const { conectarMongoDB } = require("./conexion");

async function insertarUsuario(usuario) {
  try {
    const db = await conectarMongoDB();
    const collection = db.collection("usuarios");
    const now = new Date();
    await collection.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });
    usuario.createdAt = now;
    usuario.expiresAt = new Date(now.getTime() + + 12 * 60 * 60 * 1000); // Expira en 1 minuto
    const resultado = await collection.insertOne(usuario);
  } catch (error) {
    console.error("Error al insertar el registro:", error);
  }
}

async function obtenerUsuario(usuario) {
  try {
    const db = await conectarMongoDB();
    const collection = db.collection("usuarios");
    const resultado = await collection.findOne({ user: usuario });
    console.log(resultado);
    return resultado;
  } catch (error) {
    console.log("Error al obtener el usuario:", error);
  }
}

module.exports = { insertarUsuario, obtenerUsuario };
