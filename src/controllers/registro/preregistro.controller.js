const { Preregistro } = require("../../models/registro/Preregistro.model");

const postCrearRegistro = async (preregistros = {}) => {
    const { tipo_documento, documento, nombres, apellidos, pais, departamento, ciudad, direccion, email, telefono, fecha_nacimiento, cantidad_personas, cantidad_habitaciones, is_group } = preregistros;
    await Preregistro.create({
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
    return "Preregistro creado";
};

const getPreregistro = async () => {
    const preregistro = await Preregistro.findAll();
    return preregistro;
};

module.exports = {
    postCrearRegistro,
    getPreregistro,
};