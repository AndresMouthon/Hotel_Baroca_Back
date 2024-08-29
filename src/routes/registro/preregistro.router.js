const ruta = require("express").Router();
const { validarBodyPregistro } = require("../../schemas/registro/preregistro.schema");
const { postCrearRegistro, getPreregistro, getPreregistroByUsuario, putActualizarPreregistro, terminarPreregistro } = require("../../controllers/registro/preregistro.controller");
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

ruta.post("/guardar-preregistro",
    validarBodyPregistro,
    validacionDeParametros,
    async (req, res) => {
        const buscarPreregistro = await getPreregistroByUsuario(req.body.documento);
        if (buscarPreregistro.length == 0) {
            const preregistro = await postCrearRegistro(req.body);
            res.status(201).json({
                status: true,
                message: preregistro,
            });
        } else {
            const preregistro = await putActualizarPreregistro(req.body);
            res.status(200).json({
                status: true,
                message: preregistro,
            });
        }
    }
);

ruta.put("/terminar-preregistro",
    async (req, res) => {
        const preregistro = await terminarPreregistro(req.body);
        res.status(200).json({
            status: true,
            message: preregistro,
        });
    }
);

module.exports = {
    indice: "/preregistro",
    ruta,
};