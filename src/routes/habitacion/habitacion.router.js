const ruta = require("express").Router();
const {
    getTodasLasHabitaciones,
    getHabitacionesFiltradas,
    postCrearHabitacion,
    putActualizarHabitacion,
} = require("../../controllers/habitacion/habitacion.controller");
const { validacionDeParametros } = require("../../middlewares/validaciones.middleware");
const { verificarIdHabitacion } = require("../../middlewares/habitacion/habitacion.middleware");
const { validarBodyHabitacion } = require("../../schemas/habitacion/habitacion.schema");

ruta.get("/todas-las-habitaciones",
    async (req, res) => {
        try {
            const habitaciones = await getTodasLasHabitaciones();
            res.status(200).json(habitaciones);
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

ruta.get("/todos-los-habitaciones-filtradas",
    async (req, res) => {
        try {
            const habitaciones = await getHabitacionesFiltradas(req.body.tipo_habitacion);
            res.status(200).json(habitaciones);
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

ruta.post("/registrar-habitacion",
    validarBodyHabitacion,
    validacionDeParametros,
    async (req, res) => {
        const habitacion = await postCrearHabitacion(req.body);
        res.status(201).json({
            status: true,
            message: habitacion,
        });
    }
);

ruta.put("/actualizar-habitacion/:id",
    validarBodyHabitacion,
    validacionDeParametros,
    verificarIdHabitacion,
    async (req, res) => {
        const cliente = await putActualizarHabitacion(req.body);
        res.status(200).json({
            status: true,
            message: cliente,
        });
    }
);

// ruta.delete("/eliminar-cliente/:documento",
//     validacionDeParametros,
//     verificarDocumento,
//     async (req, res) => {
//         try {
//             const response = await deleteEliminarCliente(req.params.documento);
//             res.status(200).json({ mensaje: response });
//         } catch (error) {
//             res.status(400).json({ mensaje: "La peticion fallo", error });
//         };
//     }
// );

module.exports = {
    indice: "/habitacion",
    ruta,
};