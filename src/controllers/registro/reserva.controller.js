const { Reserva } = require("../../models/registro/Reserva.model");

const postCrearReserva = async (reserva = []) => {
    for (const item of reserva) {
        await Reserva.create(item);
    };
    return "Reserva realizada";
};

module.exports = {
    postCrearReserva,
};