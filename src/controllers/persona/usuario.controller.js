const { Usuario } = require("../../models/auth/Usuario.model");

const getUsuarioById = async (id = "") => {
    const usuario = await Usuario.findOne({
        where: { id },
    });
    return usuario;
};

module.exports = {
    getUsuarioById,
};