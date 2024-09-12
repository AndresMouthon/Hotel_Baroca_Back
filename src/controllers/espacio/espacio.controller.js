const { Espacio } = require("../../models/espacio/Espacio.model");

const getEspacioByType = async (type = "") => {
    const cliente = await Espacio.findAll({
        where: { tipo_espacio: type },
    });
    return cliente;
};

module.exports = {
    getEspacioByType,
};