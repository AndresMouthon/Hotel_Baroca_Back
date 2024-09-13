const { Rol } = require("../../models/auth/Rol.model");

const getTodosLosRoles = async () => {
    const roles = await Rol.findAll();
    return roles;
};

const getRolById = async (id = "") => {
    const rol = await Rol.findOne({
        where: { id }
    });
    return rol;
};

const postRegistrarRol = async (rol = {}) => {
    const { descripcion } = rol;
    const nuevoRol = await Rol.create({ descripcion });
    return nuevoRol;
};

const putActualizarRol = async (id = "", rol = {}) => {
    const { descripcion } = rol;
    await Rol.update({ descripcion }, { where: { id } });
    return "Rol actualizado";
};

const deleteEliminarRol = async (id = "") => {
    Rol.destroy({ where: { id } });
    return "Rol eliminado";
};

module.exports = {
    getTodosLosRoles,
    getRolById,
    postRegistrarRol,
    putActualizarRol,
    deleteEliminarRol,
}