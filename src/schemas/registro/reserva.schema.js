const { body } = require("express-validator");

const validarBodyReserva = [
    body("transporte")
        .exists()
        .withMessage("El transporte es requerido")
        .isString()
        .withMessage("El nombre debe ser de tipo texto"),
    body("motivo_viaje")
        .exists()
        .withMessage("El motivo del viaje es requerido")
        .isString()
        .withMessage("El motivo del viaje debe ser de tipo texto"),
    body("habitacion_id")
        .exists()
        .withMessage("La habitacion es requerida"),
    body("preregistro_id")
        .exists()
        .withMessage("El preregistro es requerido"),
    body("fecha_salida")
        .exists()
        .withMessage("La fecha de salida es requerida"),
];

module.exports = { validarBodyReserva };