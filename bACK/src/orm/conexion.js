const { MongoClient } = require('mongodb');
const uri  = 'mongodb+srv://nicolima02:dbpass@cluster0.kag6e.mongodb.net?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let conexion; 

async function conectarMongoDB() {
  if (!conexion) {  
    try {
      await client.connect();
      conexion = client.db('usuarios'); 
      conexion.collection('usuarios')
      console.log(`Conectado a BD ${conexion.databaseName}`);
    } catch (error) {
      console.error('Error al conectar a MongoDB:', error);
      throw error;
    }
  }
  return conexion;
}

module.exports = { conectarMongoDB };