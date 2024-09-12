const { DetallePreregistro } = require("../../models/registro/DetallePreregistro.model");
const { Preregistro } = require("../../models/registro/Preregistro.model");

const getDetallePreregistros = async () => {
    const detallePreregistros = await DetallePreregistro.findAll({
        include: {
            model: Preregistro,
            attributes: ["documento", "nombres", "apellidos"],
        },
    });
    return detallePreregistros;
};

const postCrearDetallePreregistro = async (detallePreregistro = []) => {
    for (const preregistro of detallePreregistro) {
        const { documento, preregistro_id, nombres, apellidos } = preregistro;
        await DetallePreregistro.create({
            nombres,
            apellidos,
            documento,
            preregistro_id,
        });
    };
    return "Detalle de preregistro creado";
};

module.exports = {
    getDetallePreregistros,
    postCrearDetallePreregistro,
};