const ruta = require("express").Router();
const { roles } = require("../../utils/contants.util");
const { RECEPSIONISTA } = roles;
const { postCrearRegistro, getPreregistro, getPreregistroByUsuario, putActualizarPreregistro, getPreregistrosPendientes } = require("../../controllers/registro/preregistro.controller");
const { validacionDeParametros } = require("../../middlewares/validaciones.middleware");
const { jwtMiddleware } = require("../../middlewares/auth/jwt.middleware");

ruta.get("/todos-los-preregistros",
    jwtMiddleware([RECEPSIONISTA]),
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
    jwtMiddleware([RECEPSIONISTA]),
    validacionDeParametros,
    async (req, res) => {
        const preregistro = await postCrearRegistro(req.body);
        res.status(201).json({
            status: true,
            preregistro: preregistro,
        });
    }
);

ruta.get("/buscar-preregistro/:documento",
    jwtMiddleware([RECEPSIONISTA]),
    async (req, res) => {
        try {
            const preregistro = await getPreregistroByUsuario(req.params.documento);
            res.status(200).json({
                status: true,
                preregistro: preregistro[0],
            });
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
)

ruta.get("/preregistros-pendientes",
    jwtMiddleware([RECEPSIONISTA]),
    async (req, res) => {
        try {
            const preregistro = await getPreregistrosPendientes();
            res.status(200).json(preregistro);
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
)

module.exports = {
    indice: "/preregistro",
    ruta,
};