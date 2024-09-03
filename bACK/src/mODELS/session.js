const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  user: String,
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, default: Date.now, expires: "1m" }, 
});

const Session = mongoose.model("sesionesActivas", sessionSchema);

module.exports = Session;
