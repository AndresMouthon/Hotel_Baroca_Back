const ruta = require("express").Router();
const {
    getTodosLosClientes,
    getClienteByCedula,
    postCrearCliente,
    putActualizarCliente,
    deleteEliminarCliente,
} = require("../../controllers/persona/cliente.controller");
const { validacionDeParametros } = require("../../middlewares/validaciones.middleware");
const { verificarDocumento } = require("../../middlewares/persona/cliente.middleware");
const { validarBodyCliente } = require("../../schemas/persona/cliente.schema");

ruta.get("/buscar-clientes",
    async (req, res) => {
        try {
            const cliente = await getTodosLosClientes();
            res.status(200).json({
                status: true,
                clientes: cliente,
            });
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

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
    validarBodyCliente,
    validacionDeParametros,
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

ruta.post("/registrar-cliente",
    validarBodyCliente,
    validacionDeParametros,
    verificarDocumento,
    async (req, res) => {
        const cliente = await postCrearCliente(req.body);
        res.status(201).json({
            status: true,
            message: cliente,
        });
    }
);

ruta.put("/actualizar-cliente",
    validarBodyCliente,
    validacionDeParametros,
    verificarDocumento,
    async (req, res) => {
        const cliente = await putActualizarCliente(req.body);
        res.status(200).json({
            status: true,
            message: cliente,
        });
    }
);

ruta.delete("/eliminar-cliente/:documento",
    validacionDeParametros,
    verificarDocumento,
    async (req, res) => {
        try {
            const response = await deleteEliminarCliente(req.params.documento);
            res.status(200).json({ mensaje: response });
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        };
    }
);

module.exports = {
    indice: "/cliente",
    ruta,
};