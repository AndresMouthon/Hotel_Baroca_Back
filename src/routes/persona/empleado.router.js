const ruta = require("express").Router();
const {
    getTodosLosEmpleados,
    getEmpleadoById,
    postCrearEmpleado,
    putActualizarEmpleado,
    deleteEliminarEmpleado,
} = require("../../controllers/persona/empleado.controller");
const { validacionDeParametros } = require("../../middlewares/validaciones.middleware");
const { verificarIdEmpleado } = require("../../middlewares/persona/empleado.middleware");
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

ruta.get("/buscar-empleado/:id",
    async (req, res) => {
        try {
            const empleado = await getEmpleadoById(req.params.id);
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
    verificarIdEmpleado,
    async (req, res) => {
        const empleado = await postCrearEmpleado(req.body);
        res.status(201).json({
            status: true,
            message: empleado,
        });
    }
);

ruta.put("/actualizar-empleado",
    validarBodyEmpleado,
    validacionDeParametros,
    verificarIdEmpleado,
    async (req, res) => {
        const empleado = await putActualizarEmpleado(req.body);
        res.status(200).json({
            status: true,
            message: empleado,
        });
    }
);

ruta.delete("/eliminar-empleado/:usuario_id",
    validacionDeParametros,
    verificarIdEmpleado,
    async (req, res) => {
        try {
            const response = await deleteEliminarEmpleado(req.params.usuario_id);
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