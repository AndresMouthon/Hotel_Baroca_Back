const ruta = require("express").Router();
const { getHabitacionesFiltradas } = require("../../controllers/habitacion/habitacion.controller");

ruta.post("/crear-reserva",
    async (req, res) => {
        try {
            const habitaciones = await getHabitacionesFiltradas(req.body.tipo_habitacion);
            if (habitaciones.length > 0) {
                
            } else {
                res.json({
                    status: false,
                    message: "No hay habitaciones disponibles de ese tipo",
                });
            }
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

module.exports = {
    indice: "/reserva",
    ruta,
};