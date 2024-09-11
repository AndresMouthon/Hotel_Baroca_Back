const { where } = require("sequelize");
const { Cliente } = require("../../models/persona/Cliente.model");

const getClienteByCedula = async (documento = "") => {
    const cliente = await Cliente.findOne({
        where: { documento },
    });
    return cliente;
};

const postCrearCliente = async (cliente = {}) => {
    const { nombres, apellidos, tipo_documento, documento, pais, departamento, ciudad, direccion, telefono, email, fecha_nacimiento } = cliente;
    const nuevoCliente = await Cliente.create({ nombres, apellidos, tipo_documento, documento, pais, departamento, ciudad, direccion, telefono, email, fecha_nacimiento });
    return nuevoCliente;
};

const putActualizarCliente = async (cliente = {}) => {
    const { nombres, apellidos, tipo_documento, documento, pais, departamento, ciudad, direccion, telefono, email, fecha_nacimiento } = cliente;
    const nuevoCliente = await Cliente.update({ nombres, apellidos, tipo_documento, documento, pais, departamento, ciudad, direccion, telefono, email, fecha_nacimiento }, { where: { documento } });
    if (nuevoCliente.length > 0) {
        return cliente;
    } else {
        return null;
    };
};

module.exports = {
    getClienteByCedula,
    postCrearCliente,
    putActualizarCliente,
};