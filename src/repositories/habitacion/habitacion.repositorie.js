const ejecutarQuery = require("../../../config/data-base.config");

const queryFiltrarHabitaciones = async (tipo_habitacion = "") => {
    const query = `
        SELECT h.id AS id, 
            h.nombre_habitacion, 
            h.disponibilidad,
            h.precio_habitacion,
            h.capacidad_habitacion
        FROM habitaciones h
        LEFT JOIN preregistros p ON h.id = p.habitacion_id
        WHERE p.habitacion_id IS NULL AND h.tipo_habitacion = "Triple"
    `;
    const parametros = [tipo_habitacion];
    const response = await ejecutarQuery(query, parametros);
    return response;
};

module.exports = { queryFiltrarHabitaciones };