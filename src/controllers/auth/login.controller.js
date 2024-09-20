const { createToken } = require("../../utils/jwt.util");
const { comparePassword } = require("../../utils/functions.util");
const { encriptacion, LLAVE_SEGUNDA } = require("../../utils/crypto.util");
const { getEmpleadoById } = require("../../controllers/persona/empleado.controller");
const { Usuario } = require("../../models/persona/Usuario.model");

const login = async (usuario = "", passwordParam = "") => {
    try {
        const response = await Usuario.findOne({
            where: { usuario },
        });
        if (response) {
            const { id, password, rol_id } = response.dataValues;
            const comparacionPassword = await comparePassword(password, passwordParam);
            if (!comparacionPassword) {
                return Promise.reject({
                    message: "Clave incorrecta",
                    status: false,
                });
            }
            const jwtData = {
                usuario,
                rolId: rol_id,
            };
            const datosEncriptados = encriptacion(JSON.stringify(jwtData));
            const token = createToken(
                { datos: datosEncriptados, llave: LLAVE_SEGUNDA },
                process.env.JWT_SECRETO,
                { expiresIn: "24h" }
            );
            const usuarioBuscar = await getEmpleadoById(id);
            const data = {
                usuario,
                user: usuarioBuscar.dataValues,
                token,
                credenciales: {
                    usuario,
                    rol_id,
                },
            };
            return data;
        };
        return Promise.reject({ message: "No encontrado", status: false });
    } catch (error) {
        console.log(error);
        return Promise.reject({
            mensaje: "Error en el servidor",
        });
    }
};

module.exports = {
    login,
}