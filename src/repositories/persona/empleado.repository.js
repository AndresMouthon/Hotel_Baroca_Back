const ejecutarQuery = require("../../../config/data-base.config");

const saveEmpleado = async (empleado = {}) => {
    const { Usuario, Pass, RolId, Nombres, Apellidos, Genero, FechaNacimiento } = empleado;
    const store_procedure = 'CALL sp_insertar_usuario_empleado(?, ?, ?, ?, ?, ?, ?)';
    const parametros = [Usuario, Pass, RolId, Nombres, Apellidos, Genero, FechaNacimiento];
    const response = await ejecutarQuery(store_procedure, parametros);
    return response;
};

module.exports = {
    saveEmpleado,
};