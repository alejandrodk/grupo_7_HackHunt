const { check } = require('express-validator');

module.exports = {
    login: [
        check('user_email')
            .notEmpty().withMessage('Debes ingresar un correo').bail()
            .isEmail().withMessage('Ingresa un correo válido'),
        check('user_passwd')
            .notEmpty().withMessage('Debes ingresar una clave').bail()
            .isLength({ min: 3 }).withMessage('Ingresa una clave válida'),
        //validar que exista el usuario
    ],

    register: [
        check('user_name')
            .notEmpty().withMessage('Debes ingresar un nombre').bail()
            .isString().withMessage('Ingresa un nombre válido')
            .isLength({ min: 3 }).withMessage('Tu nombre debe tener más de 3 caracteres'),
        check('user_lastname')
            .notEmpty().withMessage('Debes ingresar un apellido').bail()
            .isString().withMessage('Ingresa un apellido válido')
            .isLength({ min: 3 }).withMessage('Tu apellido debe tener más de 3 caracteres'),
        check('user_email')
            .notEmpty().withMessage('Debes ingresar un correo').bail()
            .isEmail().withMessage('Ingresa un Email'),
        check('user_passwd')
            .notEmpty().withMessage('Debes ingresar una contraseña').bail()
            .isLength({ min: 5 }).withMessage('Tu contraseña debe tener al menos 5 caracteres'),
    ]
    ,
}