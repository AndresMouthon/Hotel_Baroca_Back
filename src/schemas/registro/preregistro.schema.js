const { body } = require("express-validator");

const validarBodyPregistro = [
    body("is_group")
        .exists()
        .withMessage("El grupo de personas es requerido")
        .isBoolean()
        .withMessage("El grupo debe ser de tipo booleano"),
];

module.exports = { validarBodyPregistro };