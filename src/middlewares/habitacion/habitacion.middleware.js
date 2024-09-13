const { getHabitacionById } = require("../../controllers/habitacion/habitacion.controller");

const verificarIdHabitacion = async (req, res, next) => {
    try {
        const id = req.params.id || req.body.id;
        const habitacionExistente = await getHabitacionById(id);
        if (!habitacionExistente && (req.path.includes('/actualizar-habitacion') || req.path.includes('/eliminar-habitacion'))) {
            return res.json({ mensaje: "La habitacion no existe" });
        };
        next();
    } catch (error) {
        return res.status(500).json({ mensaje: "Error al verificar el documento", error });
    }
};

module.exports = {
    verificarIdHabitacion,
};