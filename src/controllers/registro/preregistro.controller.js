const { Preregistro } = require("../../models/registro/Preregistro.model");

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
    const { tipo_documento, documento, nombres, apellidos, pais, departamento, ciudad, direccion, email, telefono, fecha_nacimiento, cantidad_personas, cantidad_habitaciones, is_group } = preregistro;
    const user = await Preregistro.update({
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
    }, {
        where: { documento },
    });
    if (user > 0) {
        const updatedPreregistro = await getPreregistroByUsuario(documento);
        return updatedPreregistro;
    }
    return null;
};

module.exports = {
    postCrearRegistro,
    getPreregistro,
    getPreregistroByUsuario,
    putActualizarPreregistro,
};