const { Preregistro } = require("../../models/registro/Preregistro.model");
const { postCrearDetallePreregistro } = require("../../controllers/registro/detalle-preregistro.controller");

const postCrearRegistro = async (preregistros = {}) => {
    const { tipo_documento, documento, nombres, apellidos, pais, departamento, ciudad, direccion, email, telefono, fecha_nacimiento, cantidad_personas, cantidad_habitaciones, is_group } = preregistros;
    const user = await Preregistro.create({
        tipo_documento,
        documento,
        nombres,
        apellidos,
        pais,
        departamento,
        ciudad,
        direccion,
        email,
        telefono,
        fecha_nacimiento,
        cantidad_personas,
        cantidad_habitaciones,
        is_group,
    });
    return user;
};

const getPreregistro = async () => {
    const preregistro = await Preregistro.findAll();
    return preregistro;
};

const getPreregistroByUsuario = async (documento = "") => {
    const preregistro = await Preregistro.findAll({
        where: { documento },
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
        if (preregistro_actualizado[0].tipo_habitacion) {
            await postCrearDetallePreregistro(preregistro.peopleData);
            return "Prereserva creada";
        } else {
            return preregistro_actualizado[0];
        }
    }
    return null;
};

module.exports = {
    postCrearRegistro,
    getPreregistro,
    getPreregistroByUsuario,
    putActualizarPreregistro,
};