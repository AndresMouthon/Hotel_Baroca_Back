const ruta = require("express").Router();
const { validarBodyEmpleado } = require("../../schemas/persona/empleado.schema");
const { roles } = require("../../utils/contants.util");
const { ADMINISTRADOR } = roles;
const {
    getTodosLosEmpleados,
    getEmpleadoByDocumento,
    putActualizarEmpleado,
    deleteEliminarEmpleado,
    postCrearEmpleado,
} = require("../../controllers/persona/empleado.controller");
const {
    postCrearUsuario,
    putActualizarUsuario,
} = require("../../controllers/persona/usuario.controller");
const { validacionDeParametros } = require("../../middlewares/validaciones.middleware");
const { verificarDocumentoEmpleado } = require("../../middlewares/persona/empleado.middleware");
const { jwtMiddleware } = require("../../middlewares/auth/jwt.middleware");

ruta.get("/buscar-empleados",
    jwtMiddleware([ADMINISTRADOR]),
    async (req, res) => {
        try {
            const response = await getTodosLosEmpleados();
            res.status(200).json({
                status: true,
                empleados: response,
            });
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

ruta.get("/buscar-empleado/:documento",
    jwtMiddleware([ADMINISTRADOR]),
    async (req, res) => {
        try {
            const empleado = await getEmpleadoByDocumento(req.params.documento);
            if (empleado) {
                res.status(200).json({
                    status: true,
                    empleado,
                });
            } else {
                res.status(200).json({
                    status: false,
                });
            }

        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

ruta.post("/registrar-empleado",
    jwtMiddleware([ADMINISTRADOR]),
    validarBodyEmpleado,
    validacionDeParametros,
    verificarDocumentoEmpleado,
    async (req, res) => {
        const usuario = await postCrearUsuario(req.body);
        await postCrearEmpleado(req.body, usuario.id);
        res.status(201).json({
            status: true,
            message: "Empleado registrado",
        });
    }
);

ruta.put("/actualizar-empleado",
    jwtMiddleware([ADMINISTRADOR]),
    validarBodyEmpleado,
    validacionDeParametros,
    verificarDocumentoEmpleado,
    async (req, res) => {
        await putActualizarUsuario(req.body)
        await putActualizarEmpleado(req.body);
        res.status(200).json({
            status: true,
            message: "Empleado actualizado",
        });
    }
);

ruta.delete("/eliminar-empleado/:documento",
    jwtMiddleware([ADMINISTRADOR]),
    validacionDeParametros,
    verificarDocumentoEmpleado,
    async (req, res) => {
        try {
            const response = await deleteEliminarEmpleado(req.params.documento);
            res.status(200).json({
                status: true,
                mensaje: response
            });
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

module.exports = {
    indice: "/empleado",
    ruta,
};