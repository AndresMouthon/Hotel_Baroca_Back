const { createToken } = require("../../utils/jwt.util");
const { comparePassword } = require("../../utils/functions.util");
const { encriptacion, LLAVE_SEGUNDA } = require("../../utils/crypto.util");
const { Usuario } = require("../../models/auth/Usuario.model");

const login = async (usuario = "", passwordParam = "") => {
    try {
        const response = await Usuario.findOne({
            where: { usuario },
        });
        if (response) {
            const { password, rol_id } = response.dataValues;
            const comparacionPassword = await comparePassword(password, passwordParam);
            if (!comparacionPassword) {
                return Promise.reject({
                    message: "¡Clave incorrecta!",
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
            const data = {
                usuario,
                token,
                rol_id,
            };
            return data;
        };
        return Promise.reject({ message: "¡Usuario no encontrado!" });
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