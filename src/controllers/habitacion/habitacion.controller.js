const { Habitacion } = require("../../models/habitacion/Habitacion.model");
const { queryFiltrarHabitaciones } = require("../../repositories/habitacion/habitacion.repositorie");

const getTodasLasHabitaciones = async () => {
    const habitaciones = await Habitacion.findAll();
    return habitaciones;
};

const getHabitacionById = async (id = "") => {
    const habitacion = await Habitacion.findOne({
        where: { id },
    });
    return habitacion;
};

const getHabitacionesFiltradas = async (tipo_habitacion = "") => {
    const response = await queryFiltrarHabitaciones(tipo_habitacion);
    return response;
};

const postCrearHabitacion = async (habitacion = {}) => {
    const { nombre_habitacion, descripcion_habitacion, numero_habitacion, capacidad_habitacion, precio_habitacion, tipo_habitacion, piso, direccion, espacio_id } = habitacion;
    const nuevaHabitacion = await Habitacion.create({ nombre_habitacion, descripcion_habitacion, numero_habitacion, capacidad_habitacion, precio_habitacion, tipo_habitacion, piso, direccion, disponibilidad: "Disponible", espacio_id });
    return nuevaHabitacion;
};

const putActualizarHabitacion = async (id = "", habitacion = {}) => {
    const { nombre_habitacion, descripcion_habitacion, numero_habitacion, capacidad_habitacion, precio_habitacion, tipo_habitacion, piso, direccion, disponibilidad, espacio_id } = habitacion;
    const habitacionActualizada = await Empleado.update({ nombre_habitacion, descripcion_habitacion, numero_habitacion, capacidad_habitacion, precio_habitacion, tipo_habitacion, piso, direccion, disponibilidad, espacio_id }, { where: { id } });
    if (habitacionActualizada.length > 0) {
        return habitacion;
    } else {
        return null;
    };
};

// const deleteEliminarEmpleado = async (usuario_id = "") => {
//     Empleado.destroy({ where: { usuario_id } });
//     return "Empleado eliminado";
// };

module.exports = {
    getTodasLasHabitaciones,
    getHabitacionById,
    getHabitacionesFiltradas,
    postCrearHabitacion,
    putActualizarHabitacion,
}