const { Habitacion } = require("../../models/habitacion/Habitacion.model");
const { queryFiltrarHabitaciones } = require("../../repositories/habitacion/habitacion.repositorie");
const { Op } = require('sequelize');

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

const getHabitacionesByTipoAndHotel = async (tipo_habitacion = "", espacio_id = "") => {
    const habitacionesByTipoAndHotel = await Habitacion.findAll({
        where: {
            [Op.and]: [
                { tipo_habitacion },
                { espacio_id },
                {disponibilidad: "Disponible"}
            ]
        }
    });
    return habitacionesByTipoAndHotel;
};

const postCrearHabitacion = async (habitacion = {}) => {
    const { nombre_habitacion, descripcion_habitacion, numero_habitacion, capacidad_habitacion, precio_habitacion, tipo_habitacion, piso, direccion, espacio_id } = habitacion;
    const nuevaHabitacion = await Habitacion.create({ nombre_habitacion, descripcion_habitacion, numero_habitacion, capacidad_habitacion, precio_habitacion, tipo_habitacion, piso, direccion, disponibilidad: "Disponible", espacio_id });
    return nuevaHabitacion;
};

const putActualizarHabitacion = async (id = "", habitacion = {}) => {
    const { nombre_habitacion, descripcion_habitacion, numero_habitacion, capacidad_habitacion, precio_habitacion, tipo_habitacion, piso, direccion, disponibilidad, espacio_id } = habitacion;
    const habitacionActualizada = await Habitacion.update({ nombre_habitacion, descripcion_habitacion, numero_habitacion, capacidad_habitacion, precio_habitacion, tipo_habitacion, piso, direccion, disponibilidad, espacio_id }, { where: { id } });
    if (habitacionActualizada.length > 0) {
        return habitacion;
    } else {
        return null;
    };
};

const deleteEliminarHabitacion = async (id = "") => {
    Habitacion.destroy({ where: { id } });
    return "Habitacion eliminada";
};

module.exports = {
    getTodasLasHabitaciones,
    getHabitacionById,
    getHabitacionesFiltradas,
    getHabitacionesByTipoAndHotel,
    postCrearHabitacion,
    putActualizarHabitacion,
    deleteEliminarHabitacion,
}