const { queryFiltrarHabitaciones } = require("../../repositories/habitacion/habitacion.repositorie");

const getHabitacionesFiltradas = async (tipo_habitacion = "") => {
    const response = await queryFiltrarHabitaciones(tipo_habitacion);
    return response;
};

module.exports = {
    getHabitacionesFiltradas,
}