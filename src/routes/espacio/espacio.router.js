const ruta = require("express").Router();
const { roles } = require("../../utils/contants.util");
const { RECEPSIONISTA } = roles;
const { getEspacioByType } = require("../../controllers/espacio/espacio.controller");
const { jwtMiddleware } = require("../../middlewares/auth/jwt.middleware");

ruta.get("/buscar-espacio/:type",
    jwtMiddleware([RECEPSIONISTA]),
    async (req, res) => {
        try {
            const espacio = await getEspacioByType(req.params.type);
            if (espacio) {
                res.status(200).json({
                    status: true,
                    espacio,
                });
            } else {
                res.status(200).json({
                    status: false,
                });
            }

        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

module.exports = {
    indice: "/espacio",
    ruta,
};