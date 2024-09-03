const { conectarMongoDB } = require('../bD/conexion');

async function insertarSesionActiva(sesionActiva) {
    try {
        const db = await conectarMongoDB(); // Obtener la conexión existente a la base de datos
        const collection = db.collection('sesionesActivas');
    
        // Establecer la fecha de creación y la fecha de expiración
        const now = new Date();
        sesionActiva.createdAt = now;
        sesionActiva.expiresAt = new Date(now.getTime() + 60 * 1000); // Expira en 1 minuto
    
        // Insertar el documento en la colección
        const resultado = await collection.updateOne(
            { user: sesionActiva.user }, // Filtro: busca por el campo 'usuario'
            { $set: { ...sesionActiva } },     // Establece los nuevos valores para 'createdAt' y 'expiresAt'
            { upsert: true }                   // Inserta un nuevo documento si no existe
          );
    } catch (error) {
      console.error('Error al insertar el registro:', error);
    }
  }

  module.exports = { insertarSesionActiva };