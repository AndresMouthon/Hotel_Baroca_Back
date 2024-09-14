const { Empleado } = require("../../models/auth/Empleado.model");
const {
    deleteEliminarUsuario,
} = require("../../controllers/persona/usuario.controller");
const { Usuario } = require("../../models/auth/Usuario.model");

const getTodosLosEmpleados = async () => {
    const empleados = await Empleado.findAll({
        include: {
            model: Usuario,
            attributes: ["rol_id"],
        },
    });
    return empleados;
};

const getEmpleadoByDocumento = async (documento = "") => {
    const empleado = await Empleado.findOne({
        where: { documento },
    });
    return empleado;
};

const postCrearEmpleado = async (persona = {}, usuario_id = "") => {
    const { documento, nombres, apellidos, genero, fecha_nacimiento } = persona;
    const nuevoEmpleado = await Empleado.create({ usuario_id, documento, nombres, apellidos, genero, fecha_nacimiento });
    return nuevoEmpleado;
};

const putActualizarEmpleado = async (empleado = {}) => {
    const { usuario_id, documento, nombres, apellidos, genero, fecha_nacimiento } = empleado;
    const empleadoActualizado = await Empleado.update({ documento, nombres, apellidos, genero, fecha_nacimiento }, { where: { usuario_id } });
    if (empleadoActualizado.length > 0) {
        return empleado;
    } else {
        return null;
    };
};

const deleteEliminarEmpleado = async (documento = "") => {
    Empleado.destroy({ where: { documento } });
    await deleteEliminarUsuario(documento);
    return "Empleado eliminado";
};

module.exports = {
    getTodosLosEmpleados,
    getEmpleadoByDocumento,
    postCrearEmpleado,
    putActualizarEmpleado,
    deleteEliminarEmpleado,
}