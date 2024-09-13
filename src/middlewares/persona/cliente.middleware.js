const { getClienteByCedula } = require("../../controllers/persona/cliente.controller");

const verificarDocumento = async (req, res, next) => {
    try {
        const documento = req.params.documento || req.body.documento;
        const clienteExistente = await getClienteByCedula(documento);
        if (clienteExistente && req.path.includes('/registrar-cliente')) {
            return res.json({ mensaje: "El cliente ya existe" });
        } else if (!clienteExistente && (req.path.includes('/actualizar-cliente') || req.path.includes('/eliminar-cliente'))) {
            return res.json({ mensaje: "El cliente no existe" });
        };
        next();
    } catch (error) {
        return res.status(500).json({ mensaje: "Error al verificar el documento", error });
    }
};

module.exports = {
    verificarDocumento,
};