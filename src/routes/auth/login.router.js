const { login } = require("../../controllers/auth/login.controller");

const ruta = require("express").Router();

ruta.post("/", (req, res) => {
    const { usuario, password } = req.body;
    login(usuario, password)
        .then((respuesta) => res.status(200).json({ 
            token: respuesta.token, 
            credenciales: respuesta.credenciales,
            usuario: respuesta.user,
            status: true,
        }))
        .catch((error) => {
            res.json(error);
        });
});

module.exports = {
    indice: "/login",
    ruta,
};