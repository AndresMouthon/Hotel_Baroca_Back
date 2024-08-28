const ruta = require("express").Router();
const {
    getDetallePreregistros,
    postCrearDetallePreregistro,
} = require("../../controllers/registro/detalle-preregistro.controller");

ruta.get("/todos-los-detalle-preregistro",
    async (req, res) => {
        try {
            const detallePreregistro = await getDetallePreregistros();
            res.status(200).json(detallePreregistro);
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

ruta.post("/crear-detalle-preregistro",
    async (req, res) => {
        try {
            const detallePreregistro = await postCrearDetallePreregistro(req.body);
            res.status(201).json({
                status: true,
                message: detallePreregistro,
            });
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

module.exports = {
    indice: "/detalle-preregistro",
    ruta,
};
