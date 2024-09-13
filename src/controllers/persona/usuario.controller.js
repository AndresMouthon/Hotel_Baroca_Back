const { Usuario } = require("../../models/auth/Usuario.model");
const { hashPassword } = require('../../utils/functions.util');

const getUsuarioByDocumento = async (documento = "") => {
    const usuario = await Usuario.findOne({
        where: { documento },
    });
    return usuario;
};

const postCrearUsuario = async (persona = {}) => {
    const { documento, rol_id } = persona;
    const nuevoUsuario = await Usuario.create({ documento, password: await hashPassword(documento), rol_id });
    return nuevoUsuario;
};

const deleteEliminarUsuario = async (documento = "") => {
    Usuario.destroy({ where: { documento } });
    return "Usuario eliminado";
};

module.exports = {
    getUsuarioByDocumento,
    postCrearUsuario,
    deleteEliminarUsuario,
};