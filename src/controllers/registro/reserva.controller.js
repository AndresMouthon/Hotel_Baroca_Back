const { Reserva } = require("../../models/registro/Reserva.model");

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
    const reservas = await Reserva.findAll();
    return reservas;
};

module.exports = {
    postCrearReserva,
    getReservas,
};