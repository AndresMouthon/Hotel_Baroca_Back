const ruta = require("express").Router();
const { getClienteByCedula } = require("../../controllers/persona/cliente.controller");

ruta.get("/buscar-cliente/:documento",
    async (req, res) => {
        try {
            const cliente = await getClienteByCedula(req.params.documento);
            if (cliente) {
                res.status(200).json({
                    status: true,
                    cliente,
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
    indice: "/cliente",
    ruta,
};