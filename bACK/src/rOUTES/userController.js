const userRouter = require('express').Router();
const { insertarSesionActiva } = require('../bD/sesiones');
const Session = require('../mODELS/session');

userRouter.post('/login', async (req, res) => {
    const { user, password } = req.body;

    if (user === 'admin' && password === 'admin') {
        req.session.user = user;
        
        // await insertarSesionActiva({user});
        res.status(200).send('Sesión iniciada');
    } else {
        res.status(401).send('Usuario o contraseña incorrectos');
    }


    userRouter.get('/check-session', (req, res) => {
        console.log('Entro');
        console.log(req.session);
        if (req?.session) {
            return res.status(200).json({ user: req?.session?.user });
        } else {
            return res.status(401).json({ message: 'No autenticado' });
        }
    });

    userRouter.post('/logout', (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: 'Error al cerrar sesión' });
            } else {
                return res.status(200).json({ message: 'Sesión cerrada' });
            }
        });
    });
});

module.exports = userRouter;

