const ruta = require("express").Router();
const { validarBodyReserva } = require("../../schemas/registro/reserva.schema");
const {
    getReservas,
    getReservaByDocumento,
    postCrearReserva,
    putActualizarReserva,
} = require("../../controllers/registro/reserva.controller");
const { validacionDeParametros } = require("../../middlewares/validaciones.middleware");

ruta.get("/todas-las-reservas",
    async (req, res) => {
        try {
            const reservas = await getReservas();
            res.status(200).json(reservas);
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

ruta.get("/obtener-reserva-por-documento/:documento",
    async (req, res) => {
        try {
            const reserva = await getReservaByDocumento(req.params.documento);
            res.status(200).json(reserva);
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

ruta.post("/crear-reserva",
    validarBodyReserva,
    validacionDeParametros,
    async (req, res) => {
        try {
            const reserva = await postCrearReserva(req.body);
            res.status(201).json({
                status: true,
                message: reserva,
            });
        } catch (error) {
            console.log(error);
        };
    }
);

ruta.put("/actualizar-reserva/:id",
    async (req, res) => {
        try {
            const reserva = await putActualizarReserva(req.params.id, req.body);
            res.status(200).json({
                status: true,
                message: reserva,
            });
        } catch (error) {
            console.log(error);
        };
    }
);

module.exports = {
    indice: "/reserva",
    ruta,
};