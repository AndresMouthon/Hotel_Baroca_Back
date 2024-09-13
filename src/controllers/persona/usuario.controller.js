const { Usuario } = require("../../models/auth/Usuario.model");
const { hashPassword } = require('../../utils/functions.util');

const getUsuarioByDocumento = async (documento = "") => {
    const usuario = await Usuario.findOne({
        where: { documento },
    });
    return usuario;
};

const postCrearUsuario = async (usuairo = {}) => {
    const { documento, rol_id } = usuairo;
    const nuevoUsuario = await Usuario.create({ documento, password: await hashPassword(documento), rol_id });
    return nuevoUsuario;
};

const putActualizarUsuario = async (usuario = {}) => {
    const { documento, password, rol_id } = usuario;
    await Usuario.update({ password, rol_id }, { where: { documento } });
    return "Usuairo actualizado";
};

const deleteEliminarUsuario = async (documento = "") => {
    Usuario.destroy({ where: { documento } });
    return "Usuario eliminado";
};

module.exports = {
    getUsuarioByDocumento,
    postCrearUsuario,
    putActualizarUsuario,
    deleteEliminarUsuario,
};