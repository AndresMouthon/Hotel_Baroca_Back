const { Reserva } = require("../../models/registro/Reserva.model");
const { Sequelize } = require('sequelize');

const postCrearReserva = async (reserva = []) => {
    for (const item of reserva) {
        if (item.id) {
            item.codigo_grupo = item.id;
            delete item.id;
        };
        await Reserva.create(item);
    };
    return reserva;
};

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

module.exports = {
    postCrearReserva,
    getReservas,
};