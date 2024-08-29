const { Empleado } = require("../../models/auth/Empleado.model");

const getEmpleadoById = async (id) => {
    const empleado = await Empleado.findOne({
        where: { usuario_id: id },
    });
    return empleado;
};

module.exports = {
    getEmpleadoById,
}