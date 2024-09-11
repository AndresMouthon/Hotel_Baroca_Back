const ruta = require("express").Router();
const { getClienteByCedula, postCrearCliente, putActualizarCliente } = require("../../controllers/persona/cliente.controller");

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

ruta.post("/guardar-cliente",
    async (req, res) => {
        const buscarCliente = await getClienteByCedula(req.body.documento);
        if (buscarCliente) {
            const cliente = await putActualizarCliente(req.body);
            res.status(200).json({
                status: true,
                message: cliente,
            });
        } else {
            const cliente = await postCrearCliente(req.body);
            res.status(201).json({
                status: true,
                message: cliente,
            });
        }
    }
);

module.exports = {
    indice: "/cliente",
    ruta,
};