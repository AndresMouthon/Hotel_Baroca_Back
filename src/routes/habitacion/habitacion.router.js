const ruta = require("express").Router();
const { validarBodyHabitacion } = require("../../schemas/habitacion/habitacion.schema");
const { roles } = require("../../utils/contants.util");
const { ADMINISTRADOR } = roles;
const {
    getTodasLasHabitacionesByHotel,
    getHabitacionesFiltradas,
    getHabitacionesByTipoAndHotel,
    postCrearHabitacion,
    putActualizarHabitacion,
    deleteEliminarHabitacion,
    getHabitacionesByPisoAndHotel,
} = require("../../controllers/habitacion/habitacion.controller");
const { validacionDeParametros } = require("../../middlewares/validaciones.middleware");
const { verificarIdHabitacion } = require("../../middlewares/habitacion/habitacion.middleware");
const { jwtMiddleware } = require("../../middlewares/auth/jwt.middleware");

ruta.get("/todas-las-habitaciones-por-hotel/:espacio_id",
    jwtMiddleware([ADMINISTRADOR]),
    async (req, res) => {
        try {
            const habitaciones = await getTodasLasHabitacionesByHotel(req.params.espacio_id);
            res.status(200).json(habitaciones);
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

ruta.get("/todos-los-habitaciones-filtradas",
    jwtMiddleware([ADMINISTRADOR]),
    async (req, res) => {
        try {
            const habitaciones = await getHabitacionesFiltradas(req.body.tipo_habitacion);
            res.status(200).json(habitaciones);
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

ruta.get("/todas-las-habitaciones-filtradas-por-hotel-tipo/:hotel/:habitacion",
    jwtMiddleware([ADMINISTRADOR]),
    async (req, res) => {
        try {
            const habitaciones = await getHabitacionesByTipoAndHotel(req.params.hotel, req.params.habitacion);
            res.status(200).json(habitaciones);
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

ruta.get("/todas-las-habitaciones-filtradas-por-hotel-piso",
    jwtMiddleware([ADMINISTRADOR]),
    async (req, res) => {
        try {
            const habitaciones = await getHabitacionesByPisoAndHotel(req.body);
            res.status(200).json(habitaciones);
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

ruta.post("/registrar-habitacion",
    jwtMiddleware([ADMINISTRADOR]),
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
    jwtMiddleware([ADMINISTRADOR]),
    validarBodyHabitacion,
    validacionDeParametros,
    verificarIdHabitacion,
    async (req, res) => {
        const habitacion = await putActualizarHabitacion(req.params.id, req.body);
        res.status(200).json({
            status: true,
            message: habitacion,
        });
    }
);

ruta.delete("/eliminar-habitacion/:id",
    jwtMiddleware([ADMINISTRADOR]),
    validacionDeParametros,
    verificarIdHabitacion,
    async (req, res) => {
        try {
            const response = await deleteEliminarHabitacion(req.params.id);
            res.status(200).json({ status: true, mensaje: response });
        } catch (error) {
            res.status(400).json({ status: false, mensaje: "La peticion fallo", error });
        };
    }
);

module.exports = {
    indice: "/habitacion",
    ruta,
};