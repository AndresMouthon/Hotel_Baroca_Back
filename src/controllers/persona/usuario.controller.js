const { Usuario } = require("../../models/auth/Usuario.model");
const { hashPassword } = require('../../utils/functions.util');
const {
    postCrearEmpleado,
} = require("../../controllers/persona/empleado.controller");

const getUsuarioByDocumento = async (documento = "") => {
    const usuario = await Usuario.findOne({
        where: { documento },
    });
    return usuario;
};

const postCrearUsuario = async (persona = {}) => {
    const { documento, rol_id } = persona;
    const nuevoUsuario = await Usuario.create({ documento, password: await hashPassword(documento), rol_id });
    const empleado = await postCrearEmpleado(persona);
    return nuevoUsuario;
};

module.exports = {
    getUsuarioByDocumento,
    postCrearUsuario,
};