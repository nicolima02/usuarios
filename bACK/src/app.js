//iMPORTS--------------------------------------
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./rOUTES/userController.js');
const {conectarMongoDB} = require('./bD/conexion.js');
//----------------------------------------------

const app = express();

//cONEXION CON LA BD---------------------------
conectarMongoDB()
//----------------------------------------------
// mIDDLEWARES
app.use(session({
    secret: 'my_secret_key', // Cambiar a una clave secreta segura
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 10000 * 60 , // Duración de la cookie 
        httpOnly: true,
        secure: false, // Cambiar a true en producción si usas HTTPS
    },

}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:3000', // URL del frontend de React
    credentials: true // Necesario para el uso de cookies de sesión
}));
//----------------------------------------------

//rOUTES----------------------------------------
app.use("/users", usersRouter);
//----------------------------------------------

app.get('/', (req, res) => {
    res.send('Usuarios WEBB!')
});


module.exports = app;

