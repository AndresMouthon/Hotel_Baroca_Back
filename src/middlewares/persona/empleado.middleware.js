const { getEmpleadoByDocumento } = require("../../controllers/persona/empleado.controller");
const { getUsuarioByDocumento } = require("../../controllers/persona/usuario.controller");

const verificarDocumentoEmpleado = async (req, res, next) => {
    try {
        const documento = req.params.documento || req.body.documento;
        const empleadoExistente = await getEmpleadoByDocumento(documento);
        if (empleadoExistente && req.path.includes('/registrar-empleado')) {
            return res.json({ mensaje: "El empleado ya tiene un rol asignado" });
        } else if (!empleadoExistente && (req.path.includes('/actualizar-empleado') || req.path.includes('/eliminar-empleado'))) {
            return res.json({ mensaje: "El empleado no existe" });
        };
        next();
    } catch (error) {
        return res.status(500).json({ mensaje: "Error al verificar el documento", error });
    }
};

module.exports = {
    verificarDocumentoEmpleado,
};