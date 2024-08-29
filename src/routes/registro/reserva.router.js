const ruta = require("express").Router();
const { getHabitacionesFiltradas } = require("../../controllers/habitacion/habitacion.controller");
const { postCrearReserva } = require("../../controllers/registro/reserva.controller");
ruta.post("/crear-reserva",
    async (req, res) => {
        try {
            const habitacionesGenerales = await getHabitacionesFiltradas(req.body.tipo_habitacion);
            if (habitacionesGenerales.length === 0) {
                return res.json({
                    status: false,
                    message: "No hay habitaciones disponibles para " + req.body.nombres + " " + req.body.apellidos + " de ese tipo",
                });
            } else {
                req.body.habitacion_id = habitacionesGenerales[0].id;
                req.body.codigo_grupo = req.body.id;
                delete req.body.created_at;
                delete req.body.updated_at;
            }
            const { DetallePreregistros } = req.body;
            for (const detalle_preregistro of DetallePreregistros) {
                const habitaciones = await getHabitacionesFiltradas(detalle_preregistro.tipo_habitacion);
                if (habitaciones.length === 0) {
                    return res.json({
                        status: false,
                        message: "No hay habitaciones disponibles para " + detalle_preregistro.nombres + " " + detalle_preregistro.apellidos + " de ese tipo",
                    });
                } else {
                    detalle_preregistro.habitacion_id = habitaciones[0].id;
                    detalle_preregistro.codigo_grupo = req.body.id;
                }
            }
            delete req.body.DetallePreregistros;
            DetallePreregistros.push(req.body);
            const response = await postCrearReserva(DetallePreregistros);
            res.json({ status: true, message: response });
        } catch (error) {
            console.log(error);
        };
    }
);

module.exports = {
    indice: "/reserva",
    ruta,
};