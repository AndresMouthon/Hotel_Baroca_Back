const { body } = require("express-validator");

const validarBodyEmpleado = [
    body("usuario_id")
        .exists()
        .withMessage("El id del usuario es requerido"),
    body("nombres")
        .exists()
        .withMessage("El nombre es requerido")
        .isString()
        .withMessage("El nombre debe ser de tipo texto")
        .isLength({ min: 3 })
        .withMessage("El nombre debe tener al menos 3 caracteres")
        .isLength({ max: 50 })
        .withMessage("El nombre debe tener como maximo 50 caracteres"),
    body("apellidos")
        .exists()
        .withMessage("El apellido es requerido")
        .isString()
        .withMessage("El apellido debe ser de tipo texto")
        .isLength({ min: 3 })
        .withMessage("El apellido debe tener al menos 3 caracteres")
        .isLength({ max: 50 })
        .withMessage("El apellido debe tener como maximo 50 caracteres"),
    body("genero")
        .exists()
        .withMessage("El genero es requerido")
        .isIn(["Masculino", "Femenino"])
        .withMessage("La opción del tipo de documento no se encuentra en el sistema"),
    body("fecha_nacimiento")
        .exists()
        .withMessage("La fecha de nacimiento es requerida"),
];

module.exports = {
    validarBodyEmpleado,
};