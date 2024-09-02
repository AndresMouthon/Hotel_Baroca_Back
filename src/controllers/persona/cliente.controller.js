const { Cliente } = require("../../models/persona/Cliente.model");

const getClienteByCedula = async (documento = "") => {
    const cliente = await Cliente.findOne({
        where: { documento },
    });
    return cliente;
};

const postCrearCliente = async (cliente = {}) => {
    
};

module.exports = {
    getClienteByCedula,
};