const { ROLES } = require("./contants.util");
const bcrypt = require("bcrypt");

const inicializadorDeRoles = () => {
    const rolesEnArray = [
        {
            numeroRol: 1,
            nombreRol: "Administrador",
        },
    ];
    rolesEnArray.forEach((rol) => {
        ROLES.set(rol.nombreRol, rol.numeroRol);
    });
};

const init = () => {
    inicializadorDeRoles();
};

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, Number(process.env.SALT_ROUNDS), (err, hash) => {
            if (err) {
                console.error("Error al encriptar la contraseña", err);
                reject(err);
            } else {
                resolve(hash);
            }
        });
    })
};

const comparePassword = (hash, password) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, result) => {
            if (result) {
                resolve(true);
            } else {
                resolve(false);
            };
        });
    });
};

module.exports = {
    init,
    hashPassword,
    comparePassword,
};