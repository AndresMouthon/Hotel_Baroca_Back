const { Espacio } = require("../../models/espacio/Espacio.model");

const getEspacioByType = async (espacio = "") => {
    const espacioBuscar = await Espacio.findAll({
        where: { tipo_espacio: espacio },
    });
    return espacioBuscar;
};

module.exports = {
    getEspacioByType,
};