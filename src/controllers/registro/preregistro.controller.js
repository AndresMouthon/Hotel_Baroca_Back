const { Preregistro } = require("../../models/registro/Preregistro.model");
const { DetallePreregistro } = require("../../models/registro/DetallePreregistro.model");
const { Cliente } = require("../../models/persona/Cliente.model");
const { Espacio } = require("../../models/espacio/espacio.model");

const postCrearRegistro = async (preregistros = {}) => {
    try {
        const { fecha_ingreso, tipo_habitacion, cliente_id, espacio_id, observacion } = preregistros;
        const preregistro = await Preregistro.create({
            fecha_ingreso,
            tipo_habitacion,
            cliente_id,
            espacio_id,
            observacion,
        });
        return preregistro;
    } catch (error) {
        console.log(error);
    }
};

const getPreregistro = async () => {
    const preregistro = await Preregistro.findAll({
        include: [
            {
                model: Cliente,
                required: false,
                attributes: ["tipo_documento", "documento", "nombres", "apellidos", "pais", "departamento", "ciudad", "direccion", "telefono", "email", "fecha_nacimiento"],
            },
            {
                model: Espacio,
                required: false,
                attributes: ["descripcion", "tipo_espacio"],
            }
        ]
    });
    return preregistro;
};

const getPreregistroByUsuario = async (documento = "") => {
    const preregistro = await Preregistro.findAll({
        where: { documento },
        include: {
            model: DetallePreregistro,
            attributes: ["nombres", "apellidos", "tipo_documento", "documento", "telefono", "tipo_habitacion"],
        }
    });
    return preregistro;
};

const putActualizarPreregistro = async (preregistro = {}) => {
    const { documento } = preregistro;
    const user = await Preregistro.update({
        preregistro
    }, {
        where: { documento },
    });
    if (user.length > 0) {
        const preregistro_actualizado = await getPreregistroByUsuario(documento);
        return preregistro_actualizado;
    }
    return null;
};

module.exports = {
    postCrearRegistro,
    getPreregistro,
    getPreregistroByUsuario,
    putActualizarPreregistro,
};