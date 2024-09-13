const { body } = require("express-validator");

const validarBodyCliente = [
    body("tipo_documento")
        .exists()
        .withMessage("El tipo de documento es requerido")
        .isIn(["CC", "TI", "CE", "NIT"])
        .withMessage("La opción del tipo de documento no se encuentra en el sistema"),
    body("documento")
        .exists()
        .withMessage("El documento es requerido")
        .isInt()
        .withMessage("El documento debe ser de tipo entero")
        .isLength({ min: 5 })
        .withMessage("El documento debe ser de al menos 5 digito"),
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
    body("pais")
        .exists()
        .withMessage("El pais es requerido")
        .isString()
        .withMessage("El pais debe ser de tipo texto")
        .isLength({ min: 3 })
        .withMessage("El pais debe tener al menos 3 caracteres")
        .isLength({ max: 50 })
        .withMessage("El pais debe tener como maximo 50 caracteres"),
    body("departamento")
        .exists()
        .withMessage("El departamento es requerido")
        .isString()
        .withMessage("El departamento debe ser de tipo texto")
        .isLength({ min: 3 })
        .withMessage("El departamento debe tener al menos 3 caracteres")
        .isLength({ max: 50 })
        .withMessage("El departamento debe tener como maximo 50 caracteres"),
    body("ciudad")
        .exists()
        .withMessage("La ciudad es requerida")
        .isString()
        .withMessage("La ciudad debe ser de tipo texto")
        .isLength({ min: 3 })
        .withMessage("La ciudad debe tener al menos 3 caracteres")
        .isLength({ max: 50 })
        .withMessage("La ciudad debe tener como maximo 50 caracteres"),
    body("direccion")
        .exists()
        .withMessage("La direccion es requerida")
        .isString()
        .withMessage("La direccion debe ser de tipo texto")
        .isLength({ min: 3 })
        .withMessage("La direccion debe tener al menos 3 caracteres")
        .isLength({ max: 50 })
        .withMessage("La direccion debe tener como maximo 50 caracteres"),
    body("email")
        .exists()
        .withMessage("El email es requerido")
        .isEmail()
        .withMessage("El email debe contener un formato valido"),
    body("telefono")
        .exists()
        .withMessage("El telefono es requerido")
        .isInt()
        .withMessage("El telefono debe ser de tipo entero")
        .isLength({ min: 5 })
        .withMessage("El telefono debe tener al menos 8 digitos"),
    body("fecha_nacimiento")
        .exists()
        .withMessage("La fecha de nacimiento es requerida"),
];

module.exports = {
    validarBodyCliente,
};