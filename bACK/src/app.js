//iMPORTS--------------------------------------
const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const usersRouter = require('./controllers/usuariosController.js');
const {conectarMongoDB} = require('./orm/conexion.js');
const auditoriasRouter = require('./controllers/auditoriasController.js');
//----------------------------------------------

const app = express();

//cONEXION CON LA BD---------------------------
conectarMongoDB();
//----------------------------------------------
// mIDDLEWARES
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true 
}));
//----------------------------------------------

//rOUTES----------------------------------------
app.use("/users", usersRouter);
app.use("/auditorias", auditoriasRouter);
//----------------------------------------------

app.get('/', (req, res) => {
    res.send('Usuarios WEBB!')
});


module.exports = app;

