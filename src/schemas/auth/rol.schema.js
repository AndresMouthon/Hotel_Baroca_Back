const { body } = require("express-validator");

const validarBodyRol = [
    body("descripcion")
        .exists()
        .withMessage("La descripcion del rol es requerida")
        .isString()
        .withMessage("La descripcion del rol debe ser de tipo texto")
        .isLength({ min: 3 })
        .withMessage("La descripcion del rol debe tener al menos 3 caracteres")
        .isLength({ max: 50 })
        .withMessage("La descripcion del rol debe tener como maximo 50 caracteres"),
];

module.exports = {
    validarBodyRol,
}