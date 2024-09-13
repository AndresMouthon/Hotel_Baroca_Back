const { body } = require("express-validator");

const validarBodyHabitacion = [
    body("nombre_habitacion")
        .exists()
        .withMessage("El nombre de la habitacion es requerido")
        .isString()
        .withMessage("El nombre de la habitacion debe ser de tipo texto")
        .isLength({ min: 2 })
        .withMessage("El nombre de la habitacion debe tener al menos 2 caracteres")
        .isLength({ max: 50 })
        .withMessage("El nombre de la habitacion debe tener como maximo 50 caracteres"),
    body("descripcion_habitacion")
        .exists()
        .withMessage("La descripcion de la habitacion es requerida"),
    body("numero_habitacion")
        .exists()
        .withMessage("El numero de la habitacion es requerido"),
    body("capacidad_habitacion")
        .exists()
        .withMessage("La capacidad de la habitacion es requerida"),
    body("precio_habitacion")
        .exists()
        .withMessage("El precio de la habitacion es requerido"),
    body("tipo_habitacion")
        .exists()
        .withMessage("El tipo de la habitacion es requerido"),
    body("precio_habitacion")
        .exists()
        .withMessage("El precio de la habitacion es requerido"),
    body("espacio_id")
        .exists()
        .withMessage("El hotel de la habitacion es requerido"),
];

module.exports = {
    validarBodyHabitacion,
};