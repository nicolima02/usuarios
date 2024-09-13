const bcrypt = require('bcrypt');

async function encriptarPassword(pass){
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pass, salt);
    return hash;
}

async function compararPassword(pass, passHash){
    return await bcrypt.compare(pass, passHash);
}

module.exports = { encriptarPassword, compararPassword };