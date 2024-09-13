const { getEmpleadoById } = require("../../controllers/persona/empleado.controller");
const { getUsuarioById } = require("../../controllers/persona/usuario.controller");

const verificarIdEmpleado = async (req, res, next) => {
    try {
        const id = req.params.usuario_id || req.body.usuario_id;
        const usuarioExistente = await getUsuarioById(id);
        if (usuarioExistente) {
            const empleadoExistente = await getEmpleadoById(id);
            if (empleadoExistente && req.path.includes('/registrar-empleado')) {
                return res.json({ mensaje: "El empleado ya tiene un rol asignado" });
            } else if (!empleadoExistente && (req.path.includes('/actualizar-empleado') || req.path.includes('/eliminar-empleado'))) {
                return res.json({ mensaje: "El empleado no existe" });
            };
        } else {
            return res.json({ mensaje: "No se encuentra registrado un usuario con este id" });
        }
        next();
    } catch (error) {
        return res.status(500).json({ mensaje: "Error al verificar el documento", error });
    }
};

module.exports = {
    verificarIdEmpleado,
};