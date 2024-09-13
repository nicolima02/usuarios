const { conectarMongoDB } = require("./conexion");

async function insertarAuditoria(auditoria) {
  try {
    const db = await conectarMongoDB();
    const collection = db.collection("auditorias");
    const resultado = await collection.insertOne(auditoria);
  } catch (error) {
    console.error("Error al insertar el registro:", error);
  }
}

async function obtenerAuditorias(filtros) {
  try {
    const query = {};
    if (filtros.accion) {
      query.accion = filtros.accion;
    }
    if (filtros.fechaDesde) {
      query.fecha = { $gte: new Date(filtros.fechaDesde) };
    }
    if (filtros.fechaHasta) {
      query.fecha = { ...query.fecha, $lte: new Date(filtros.fechaHasta) };
    }
    if (filtros.user) {
      query.user = filtros.user;
    }
    const limit = 10;
    const skip = (filtros.pagina - 1) * limit;
    const db = await conectarMongoDB();
    const collection = db.collection("auditorias");
    const resultado = await collection
      .find(query)
      .skip(skip)
      .limit(limit)
      .sort({ fecha: -1 })
      .toArray();
    return resultado;
  } catch (error) {
    console.log("Error al obtener auditorias:", error);
  }
}

module.exports = { insertarAuditoria, obtenerAuditorias };
