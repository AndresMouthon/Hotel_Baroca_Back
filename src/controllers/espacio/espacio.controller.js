const { Espacio } = require("../../models/espacio/Espacio.model");

const getEspacioByType = async (espacio = "") => {
    const cliente = await Espacio.findAll({
        where: { tipo_espacio: documento },
    });
    return cliente;
};

module.exports = {
    getEspacioByType,
};