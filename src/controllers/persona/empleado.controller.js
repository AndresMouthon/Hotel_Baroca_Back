const { Empleado } = require("../../models/auth/Empleado.model");

const getTodosLosEmpleados = async () => {
    const empleados = await Empleado.findAll();
    return empleados;
};

const getEmpleadoById = async (id = "") => {
    const empleado = await Empleado.findOne({
        where: { usuario_id: id },
    });
    return empleado;
};

const postCrearEmpleado = async (empleado = {}) => {
    const { usuario_id, nombres, apellidos, genero, fecha_nacimiento } = empleado;
    const nuevoEmpleado = await Empleado.create({ usuario_id, nombres, apellidos, genero, fecha_nacimiento });
    return nuevoEmpleado;
};

const putActualizarEmpleado = async (empleado = {}) => {
    const { usuario_id, nombres, apellidos, genero, fecha_nacimiento } = empleado;
    const empleadoActualizado = await Empleado.update({ nombres, apellidos, genero, fecha_nacimiento }, { where: { usuario_id } });
    if (empleadoActualizado.length > 0) {
        return empleado;
    } else {
        return null;
    };
};

const deleteEliminarEmpleado = async (usuario_id = "") => {
    Empleado.destroy({ where: { usuario_id } });
    return "Empleado eliminado";
};

module.exports = {
    getTodosLosEmpleados,
    getEmpleadoById,
    postCrearEmpleado,
    putActualizarEmpleado,
    deleteEliminarEmpleado,
}