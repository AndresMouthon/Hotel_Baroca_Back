const { DetallePreregistro } = require("../../models/registro/DetallePreregistro.model");
const { Preregistro } = require("../../models/registro/Preregistro.model");

const getDetallePreregistros = async () => {
    const detallePreregistros = await DetallePreregistro.findAll({
        include: {
            model: Preregistro,
            attributes: ["id", "tipo_documento", "documento", "nombres", "apellidos", "email", "telefono", "fecha_nacimiento"],
        },
    });
    return detallePreregistros;
};

const postCrearDetallePreregistro = async (detallePreregistro = []) => {
    for (const preregistro of detallePreregistro) {
        const { tipo_documento, documento, preregistro_id, nombres, apellidos, fecha_nacimiento } = preregistro;
        await DetallePreregistro.create({
            tipo_documento,
            documento,
            preregistro_id,
            nombres,
            apellidos,
            fecha_nacimiento,
        });
    };
    return "Detalle de preregistro creada";
};

module.exports = {
    getDetallePreregistros,
    postCrearDetallePreregistro,
};