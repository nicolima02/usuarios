const jwt = require("jsonwebtoken");
const auditoriaController = require("../orm/auditorias");
const auditoriaRouter = require("express").Router();

auditoriaRouter.post("/", async (req, res) => {
    const token = req.cookies.access_token;
    const filtros = req.body.filtros;
    try {
      const data = jwt.verify(token, "Super-key-secreta");      
      if (data.user !== "admin") {
        throw new Error("No autorizado");
      }
      const auditorias = await auditoriaController.obtenerAuditorias(filtros)
      res.status(200).send(auditorias);
    } catch (error) {
        res.status(401).send("No autorizado");
    }
});

module.exports = auditoriaRouter;