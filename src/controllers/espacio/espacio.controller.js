const { Espacio } = require("../../models/espacio/Espacio.model");

const getEspacioByType = async (type = "") => {
    const espacioBuscar = await Espacio.findAll({
        where: { tipo_espacio: type },
    });
    return espacioBuscar;
};

module.exports = {
    getEspacioByType,
};