const ruta = require("express").Router();
const {
    getTodosLosRoles,
    postRegistrarRol,
    putActualizarRol,
    deleteEliminarRol,
} = require("../../controllers/auth/rol.controller");
const { validacionDeParametros } = require("../../middlewares/validaciones.middleware");
const { verificarIdRol } = require("../../middlewares/auth/rol.middleware");
const { validarBodyRol } = require("../../schemas/auth/rol.schema");

ruta.get("/buscar-roles",
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