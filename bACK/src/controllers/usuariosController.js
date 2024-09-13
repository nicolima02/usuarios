const userRouter = require("express").Router();
const usuariosController = require("../orm/usuarios");
const auditoriaController = require("../orm/auditorias");
const passService = require("../services/passwordService");
const Usuario = require("../models/usuario");
const Auditoria = require("../models/auditoria");
const jwt = require("jsonwebtoken");
const timezone = require("moment-timezone");

userRouter.post("/login", async (req, res) => {
  const { user, password } = req.body;
  const userloged = await usuariosController.obtenerUsuario(user);
  if (!userloged) {
    res.status(401).send("Usuario no encontrado");
  } else {
    const match = await passService.compararPassword(
      password,
      userloged.password
    );
    if (!match) {
      res.status(401).send("Contraseña incorrecta");
    } else {
      try {
        const auditoria = new Auditoria({ accion: "login", user: user , fecha: timezone().tz("America/Argentina/Buenos_Aires").format('DD/MM/YY HH:mm:ss')});
        await auditoriaController.insertarAuditoria(auditoria);
        const token = jwt.sign({ user: user }, "Super-key-secreta", {
          expiresIn: "20m",
        });
        res
          .cookie("access_token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
          })
          .status(200)
          .send('Usuario logueado');
      } catch {
        res.status(401).send("Usuario o contraseña incorrectos");
      }
    }
  }
});

userRouter.get("/check-session", async (req, res) => {
  const token = req.cookies.access_token;

  try {
    const data = jwt.verify(token, "Super-key-secreta");
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

userRouter.post("/logout", (req, res) => {
  try {
    res
      .clearCookie("access_token", {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      })
      .status(200)
      .send("Cookie eliminada");
  } catch (error) {
    res.status(500).send(error);
  }
});

userRouter.post("/register", async (req, res) => {
  const user = req.body.user;
  const auditoria = new Auditoria({ accion: "Registro", user: user,  fecha: timezone().tz("America/Argentina/Buenos_Aires").format('DD/MM/YY HH:mm:ss')});
  await auditoriaController.insertarAuditoria(auditoria);
  const password = await passService.encriptarPassword(req.body.password);
  const usuario = new Usuario({user:user, password:password});
  try {
    await usuariosController.insertarUsuario(usuario);
    res.status(201).send("Usuario creado");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = userRouter;
