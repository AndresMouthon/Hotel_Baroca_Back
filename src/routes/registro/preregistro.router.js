const ruta = require("express").Router();
const { validarBodyPregistro } = require("../../schemas/registro/preregistro.schema");
const { postCrearRegistro, getPreregistro } = require("../../controllers/registro/preregistro.controller");
const { validacionDeParametros } = require("../../middlewares/validaciones.middleware");

ruta.get("/todos-los-preregistros",
    async (req, res) => {
        try {
            const preregistro = await getPreregistro();
            res.status(200).json(preregistro);
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

ruta.post("/crear-preregistro",
    validarBodyPregistro,
    validacionDeParametros,
    async (req, res) => {
        try {
            const preregistro = await postCrearRegistro(req.body);
            res.status(201).json({
                status: true,
                message: preregistro,
            });
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        }
    }
);

module.exports = {
    indice: "/preregistro",
    ruta,
};