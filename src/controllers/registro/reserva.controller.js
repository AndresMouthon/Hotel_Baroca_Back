const { queryObtenerReservaPorDocumento } = require("../../repositories/registro/reserva.repository");
const { Reserva } = require("../../models/registro/Reserva.model");
const { Sequelize } = require('sequelize');
const { Cliente } = require("../../models/persona/Cliente.model");
const { Espacio } = require("../../models/espacio/espacio.model");
const { Habitacion } = require("../../models/habitacion/Habitacion.model");
const { Preregistro } = require("../../models/registro/Preregistro.model");

// const postCrearReserva = async (reserva = []) => {
//     for (const item of reserva) {
//         if (item.id) {
//             item.codigo_grupo = item.id;
//             delete item.id;
//         };
//         await Reserva.create(item);
//     };
//     return reserva;
// };

const getReservas = async () => {
    const reservas = await Reserva.findAll({
        where: {
            ciudad: {
                [Sequelize.Op.ne]: null
            }
        }
    });
    return reservas;
};

const getReservaByDocumento = async (documento = "") => {
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
                        where: { documento }
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

module.exports = {
    getReservas,
    getReservaByDocumento,
};