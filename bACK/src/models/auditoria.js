const mongoose = require("mongoose");
const timeZone = require("moment-timezone");


const auditoriaSchema = new mongoose.Schema({
  accion: { type: String, required: true },
  user : { type: String, required: true },
  fecha: { type: Date, required:true},
});

const Auditoria = mongoose.model("Auditorias", auditoriaSchema);

module.exports = Auditoria;