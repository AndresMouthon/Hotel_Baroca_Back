const ruta = require("express").Router();
const { getEspacioByType } = require("../../controllers/espacio/espacio.controller");

ruta.get("/buscar-espacio/:type",
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