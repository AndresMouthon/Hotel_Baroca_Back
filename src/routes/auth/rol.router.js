const ruta = require("express").Router();
const { validarBodyRol } = require("../../schemas/auth/rol.schema");
const { roles } = require("../../utils/contants.util");
const { ADMINISTRADOR } = roles;
const {
    getTodosLosRoles,
    postRegistrarRol,
    putActualizarRol,
    deleteEliminarRol,
} = require("../../controllers/auth/rol.controller");
const { validacionDeParametros } = require("../../middlewares/validaciones.middleware");
const { verificarIdRol } = require("../../middlewares/auth/rol.middleware");
const { jwtMiddleware } = require("../../middlewares/auth/jwt.middleware");

ruta.get("/buscar-roles",
    jwtMiddleware([ADMINISTRADOR]),
    async (req, res) => {
        try {
            const rol = await getTodosLosRoles();
            res.status(200).json({
                status: true,
                roles: rol,
            });
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

ruta.post("/registrar-rol",
    jwtMiddleware([ADMINISTRADOR]),
    validarBodyRol,
    validacionDeParametros,
    async (req, res) => {
        const rol = await postRegistrarRol(req.body);
        res.status(201).json({
            status: true,
            message: rol,
        });
    }
);

ruta.put("/actualizar-rol/:id",
    jwtMiddleware([ADMINISTRADOR]),
    validarBodyRol,
    validacionDeParametros,
    verificarIdRol,
    async (req, res) => {
        const response = await putActualizarRol(req.params.id, req.body);
        res.status(200).json({
            status: true,
            message: response,
        });
    }
);

ruta.delete("/eliminar-rol/:id",
    jwtMiddleware([ADMINISTRADOR]),
    verificarIdRol,
    async (req, res) => {
        const response = await deleteEliminarRol(req.params.id);
        res.status(200).json({
            status: true,
            message: response,
        });
    }
);

module.exports = {
    indice: "/rol",
    ruta,
};