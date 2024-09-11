const { Preregistro } = require("../../models/registro/Preregistro.model");
const { postCrearDetallePreregistro } = require("../../controllers/registro/detalle-preregistro.controller");
const { DetallePreregistro } = require("../../models/registro/DetallePreregistro.model");

const postCrearRegistro = async (preregistros = {}) => {
    try {
        const { tipo_documento, documento, nombres, apellidos, pais, departamento, ciudad, direccion, email, telefono, fecha_nacimiento, cantidad_personas, cantidad_habitaciones, is_group } = preregistros;
        const user = await Preregistro.create({
            fecha,
            tipo_habitacion,
            cliente_id,
            espacio_id,
        });
        return user;
    } catch (error) {
        console.log(error);
    }
};

const getPreregistro = async () => {
    const preregistro = await Preregistro.findAll();
    return preregistro;
};

const getPreregistroByUsuario = async (documento = "") => {
    const preregistro = await Preregistro.findAll({
        where: { documento },
        include: {
            model: DetallePreregistro,
            attributes: ["nombres", "apellidos", "tipo_documento", "documento", "telefono", "tipo_habitacion"],
        }
    });
    return preregistro;
};

const putActualizarPreregistro = async (preregistro = {}) => {
    const { documento } = preregistro;
    const user = await Preregistro.update({
        preregistro
    }, {
        where: { documento },
    });
    if (user.length > 0) {
        const preregistro_actualizado = await getPreregistroByUsuario(documento);
        return preregistro_actualizado;
    }
    return null;
};

const terminarPreregistro = async (preregistro = {}) => {
    const { documento, tipo_habitacion, peopleData } = preregistro;
    try {
        await Preregistro.update({
            tipo_habitacion,
        }, {
            where: { documento },
        });
        const buscarPreregistro = await getPreregistroByUsuario(documento);
        await postCrearDetallePreregistro(peopleData);
        return "Preregistro terminado";
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    postCrearRegistro,
    getPreregistro,
    getPreregistroByUsuario,
    putActualizarPreregistro,
    terminarPreregistro,
};