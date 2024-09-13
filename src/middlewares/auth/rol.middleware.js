const { getRolById } = require("../../controllers/auth/rol.controller");

const verificarIdRol = async (req, res, next) => {
    try {
        const id = req.params.id || req.body.id;
        const rolExistente = await getRolById(id);
        if (!rolExistente && (req.path.includes('/actualizar-rol') || req.path.includes('/eliminar-rol'))) {
            return res.json({ mensaje: "El rol no existe" });
        };
        next();
    } catch (error) {
        return res.status(500).json({ mensaje: "Error al verificar el documento", error });
    }
};

module.exports = {
    verificarIdRol,
};