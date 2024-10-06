const { Reserva } = require("../../models/registro/Reserva.model");
const { Cliente } = require("../../models/persona/Cliente.model");
const { Espacio } = require("../../models/espacio/espacio.model");
const { Habitacion } = require("../../models/habitacion/Habitacion.model");
const { Preregistro } = require("../../models/registro/Preregistro.model");
const { putActualizarHabitacion } = require("../../controllers/habitacion/habitacion.controller");
const { putActualizarEstadoPreregistro } = require("../../controllers/registro/preregistro.controller");

const getReservas = async () => {
    const reserva = await Reserva.findAll({
        attributes: ["transporte", "motivo_viaje", "fecha_entrada", "fecha_salida"],
        include: [
            {
                model: Preregistro,
                attributes: ["observacion", "estado", "fecha_ingreso"],
                include: [
                    {
                        model: Cliente,
                        attributes: ["tipo_documento", "documento", "nombres", "apellidos", "pais", "departamento", "ciudad", "direccion", "telefono", "email", "fecha_nacimiento"],
                    },
                    {
                        model: Espacio,
                        attributes: ["descripcion", "tipo_espacio"],
                    }
                ]
            },
            {
                model: Habitacion,
                attributes: ["nombre_habitacion", "descripcion_habitacion", "numero_habitacion", "capacidad_habitacion", "precio_habitacion", "tipo_habitacion", "piso", "disponibilidad", "estado", "ventana"],
            }
        ]
    });
    return reserva;
};

const getReservaById = async (id = "") => {
    const reserva = await Reserva.findOne({
        where: { id }
    });
    return reserva;
};

const getReservaByDocumento = async (documento = "") => {
    const reserva = await Reserva.findAll({
        attributes: ["transporte", "motivo_viaje", "fecha_entrada", "fecha_salida"],
        include: [
            {
                model: Preregistro,
                required: false,
                attributes: ["observacion", "estado", "fecha_ingreso"],
                include: [
                    {
                        model: Cliente,
                        required: false,
                        attributes: ["tipo_documento", "documento", "nombres", "apellidos", "pais", "departamento", "ciudad", "direccion", "telefono", "email", "fecha_nacimiento"],
                        where: { documento }
                    },
                    {
                        model: Espacio,
                        required: false,
                        attributes: ["descripcion", "tipo_espacio"],
                    }
                ]
            },
            {
                model: Habitacion,
                required: false,
                attributes: ["nombre_habitacion", "descripcion_habitacion", "numero_habitacion", "capacidad_habitacion", "precio_habitacion", "tipo_habitacion", "piso", "disponibilidad", "estado", "ventana"],
            }
        ]
    });
    return reserva;
};

const postCrearReserva = async (reserva = {}) => {
    const { transporte, motivo_viaje, habitacion_id, preregistro_id, fecha_salida } = reserva;
    const nuevaReserva = await Reserva.create({ transporte, motivo_viaje, habitacion_id, preregistro_id, fecha_salida });
    await putActualizarEstadoPreregistro({ preregistro_id, estado: "Reservado" });
    await putActualizarHabitacion(habitacion_id, { disponibilidad: "No disponible" });
    return nuevaReserva;
};

const putActualizarReserva = async (id = "", reserva = {}) => {
    const { transporte, motivo_viaje, habitacion_id, preregistro_id, fecha_salida } = reserva;
    const buscarReserva = await getReservaById(id);
    await Reserva.update({ transporte, motivo_viaje, habitacion_id, preregistro_id, fecha_salida }, { where: { id } });
    if (buscarReserva.dataValues.habitacion_id !== Number(habitacion_id)) {
        await putActualizarHabitacion(habitacion_id, { disponibilidad: "No disponible" });
        await putActualizarHabitacion(buscarReserva.dataValues.habitacion_id, { disponibilidad: "Disponible" });
    }
    return "Reserva actualizada";
};

module.exports = {
    getReservas,
    getReservaByDocumento,
    postCrearReserva,
    putActualizarReserva,
};