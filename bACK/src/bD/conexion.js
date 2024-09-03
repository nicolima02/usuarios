const { MongoClient } = require('mongodb');

// URI de conexión (ajusta esto según tu entorno)
const uri  = 'mongodb+srv://nicolima02:dbpass@cluster0.kag6e.mongodb.net?retryWrites=true&w=majority';

// Crear una nueva instancia de MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let conexion; // Variable para almacenar la conexión

async function conectarMongoDB() {
  if (!conexion) {  // Verificar si la conexión ya existe
    try {
      await client.connect();
      console.log('Conectado a MongoDB!');
      conexion = client.db('sesiones'); // Almacenar la conexión a la base de datos
      await conexion.collection('sesionesActivas').createIndex(
        { expiresAt: 1 },
        { expireAfterSeconds: 0 }  // TTL de 0 segundos después de la fecha en 'expiresAt'
      );
    } catch (error) {
      console.error('Error al conectar a MongoDB:', error);
      throw error;
    }
  }
  return conexion;
}

module.exports = { conectarMongoDB };