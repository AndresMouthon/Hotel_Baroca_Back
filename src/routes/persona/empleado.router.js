const ruta = require("express").Router();
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
const { validarBodyEmpleado } = require("../../schemas/persona/empleado.schema");

ruta.get("/buscar-empleados",
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
    validarBodyEmpleado,
    validacionDeParametros,
    verificarDocumentoEmpleado,
    async (req, res) => {
        await postCrearUsuario(req.body);
        await postCrearEmpleado(req.body);
        res.status(201).json({
            status: true,
            message: "Persona registrada",
        });
    }
);

ruta.put("/actualizar-empleado",
    validarBodyEmpleado,
    validacionDeParametros,
    verificarDocumentoEmpleado,
    async (req, res) => {
        await putActualizarUsuario(req.body)
        await putActualizarEmpleado(req.body);
        res.status(200).json({
            status: true,
            message: empleado,
        });
    }
);

ruta.delete("/eliminar-empleado/:documento",
    validacionDeParametros,
    verificarDocumentoEmpleado,
    async (req, res) => {
        try {
            const response = await deleteEliminarEmpleado(req.params.documento);
            res.status(200).json({ mensaje: response });
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

module.exports = {
    indice: "/empleado",
    ruta,
};