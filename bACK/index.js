const server = require('./src/app');

const puerto = 8080;

server.listen(puerto, ()=>{
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});