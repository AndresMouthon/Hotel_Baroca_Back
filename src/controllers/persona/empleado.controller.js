const { Empleado } = require("../../models/auth/Empleado.model");
// const {saveEmpleado}

const getTodosLosEmpleados = async () => {
    const empleados = await Empleado.findAll();
    return empleados;
};

const getEmpleadoByDocumento = async (documento = "") => {
    const empleado = await Empleado.findOne({
        where: { documento_usuario: documento },
    });
    return empleado;
};

const postCrearEmpleado = async (persona = {}) => {
    const { documento, nombres, apellidos, genero, fecha_nacimiento } = persona;
    const nuevoEmpleado = await Empleado.create({ documento_usuario: documento, nombres, apellidos, genero, fecha_nacimiento });
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
    getEmpleadoByDocumento,
    postCrearEmpleado,
    putActualizarEmpleado,
    deleteEliminarEmpleado,
}