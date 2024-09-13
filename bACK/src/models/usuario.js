const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { 
    type: Date, 
    default: () => new Date(Date.now() + 60 * 1000) // 1 minuto después de la creación
  },
});


const User = mongoose.model("Usuarios", userSchema);

module.exports = User;