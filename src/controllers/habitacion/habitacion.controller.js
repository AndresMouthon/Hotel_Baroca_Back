const { Habitacion } = require("../../models/habitacion/Habitacion.model");
const { queryFiltrarHabitaciones } = require("../../repositories/habitacion/habitacion.repositorie");
const { Op } = require('sequelize');

const getTodasLasHabitacionesByHotel = async (espacio_id = "") => {
    const habitaciones = await Habitacion.findAll({
        where: { espacio_id },
        order: [["piso", "ASC"], ["numero_habitacion", "ASC"]],
    });
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

const getHabitacionesByTipoAndHotel = async (filtro = {}) => {
    const { tipo_habitacion, espacio_id } = filtro;
    const habitacionesByTipoAndHotel = await Habitacion.findAll({
        where: {
            [Op.and]: [
                { tipo_habitacion },
                { espacio_id },
                { disponibilidad: "Disponible" }
            ]
        }
    });
    return habitacionesByTipoAndHotel;
};

const getHabitacionesByPisoAndHotel = async (filtro = {}) => {
    const { piso, espacio_id } = filtro;
    const habitacionesByTipoAndHotel = await Habitacion.findAll({
        where: {
            [Op.and]: [
                { piso },
                { espacio_id },
                { disponibilidad: "Disponible" }
            ]
        }
    });
    return habitacionesByTipoAndHotel;
};

const postCrearHabitacion = async (habitacion = {}) => {
    const { nombre_habitacion, descripcion_habitacion, numero_habitacion, capacidad_habitacion, precio_habitacion, tipo_habitacion, piso, espacio_id, ventana } = habitacion;
    const nuevaHabitacion = await Habitacion.create({ nombre_habitacion, descripcion_habitacion, numero_habitacion, capacidad_habitacion, precio_habitacion, tipo_habitacion, piso, disponibilidad: "Disponible", espacio_id, ventana });
    return nuevaHabitacion;
};

const putActualizarHabitacion = async (id = "", habitacion = {}) => {
    const { nombre_habitacion, descripcion_habitacion, numero_habitacion, capacidad_habitacion, precio_habitacion, tipo_habitacion, piso, disponibilidad, espacio_id, estado, ventana } = habitacion;
    const habitacionActualizada = await Habitacion.update({ nombre_habitacion, descripcion_habitacion, numero_habitacion, capacidad_habitacion, precio_habitacion, tipo_habitacion, piso, disponibilidad, espacio_id, estado, ventana }, { where: { id } });
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
    getTodasLasHabitacionesByHotel,
    getHabitacionById,
    getHabitacionesFiltradas,
    getHabitacionesByTipoAndHotel,
    getHabitacionesByPisoAndHotel,
    postCrearHabitacion,
    putActualizarHabitacion,
    deleteEliminarHabitacion,
}