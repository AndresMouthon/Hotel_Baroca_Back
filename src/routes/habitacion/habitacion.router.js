const ruta = require("express").Router();
const { getHabitacionesFiltradas } = require("../../controllers/habitacion/habitacion.controller");

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

module.exports = {
    indice: "/habitacion",
    ruta,
};