const { check } = require('express-validator');

module.exports = {
    user_login: [
        check('user_email')
            .notEmpty().withMessage('Debes ingresar un correo').bail()
            .isEmail().withMessage('Ingresa un correo válido'),
        check('user_passwd')
            .notEmpty().withMessage('Debes ingresar una clave').bail()
            .isLength({ min: 3 }).withMessage('Ingresa una clave válida'),
        //validar que exista el usuario
    ],
    user_register: [
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
    ],
    cmp_login : [
        check('cmp_user_email')
            .notEmpty().withMessage('Debes ingresar un correo').bail()
            .isEmail().withMessage('Ingresa un correo válido'),
        check('cmp_user_passwd')
            .notEmpty().withMessage('Debes ingresar una clave').bail()
            .isLength({ min: 3 }).withMessage('Ingresa una clave válida'),
        //validar que exista el usuario 
    ],
    cmp_register : [
        check('cmp_user_name')
            .notEmpty().withMessage('Debes ingresar un nombre').bail()
            .isString().withMessage('Ingresa un nombre válido')
            .isLength({ min: 3 }).withMessage('Tu nombre debe tener más de 3 caracteres'),
        check('cmp_user_lastname')
            .notEmpty().withMessage('Debes ingresar un apellido').bail()
            .isString().withMessage('Ingresa un apellido válido')
            .isLength({ min: 3 }).withMessage('Tu apellido debe tener más de 3 caracteres'),
        check('cmp_user_email')
            .notEmpty().withMessage('Debes ingresar un correo').bail()
            .isEmail().withMessage('Ingresa un Email'),
        check('cmp_user_passwd')
            .notEmpty().withMessage('Debes ingresar una contraseña').bail()
            .isLength({ min: 5 }).withMessage('Tu contraseña debe tener al menos 5 caracteres'),
            // agregar validaciones de los datos propios de la empresa
    ],
    user_complete_cv : [
        check('user_name')
            .notEmpty().withMessage('Debes ingresar un nombre').bail()
            .isString().withMessage('Ingresa un nombre válido')
            .isLength({ min: 3 }).withMessage('Tu nombre debe tener más de 3 caracteres'),
        check('user_lastname')
            .notEmpty().withMessage('Debes ingresar un apellido').bail()
            .isString().withMessage('Ingresa un apellido válido')
            .isLength({ min: 3 }).withMessage('Tu apellido debe tener más de 3 caracteres'),
        check('user_dni')
            .notEmpty().withMessage('Debes ingresar un número de DNI').bail()
            .isInt({min:8}).withMessage('Debes ingresar un DNI válido'),
        check('user_datebirth')
            .notEmpty().withMessage('Debes ingresar una fecha de nacimiento'),
        check('user_gender')
            .notEmpty().withMessage('Debes ingresar un género').bail(),
        check('user_phone')
            .isMobilePhone().withMessage('Debes ingresar un número de teléfono válido').bail(),
        check('user_city')
            .notEmpty().withMessage('Debes ingresar una ciudad').bail(),
        check('user_position')
            .notEmpty().withMessage('Debes ingresar un cargo').bail()
            .isString().withMessage('Debes ingresar un cargo válido'),
        check('user_position_level')
            .notEmpty().withMessage('Debes ingresar un nivel de cargo').bail()
            .isString().withMessage('Debes ingresar un nivel de cargo válido'),
        check('user_position_description')
            .notEmpty().withMessage('Debes ingresar una descripción de cargo').bail()
            .isString().withMessage('Debes ingresar una descripción de cargo válida')
    ]
}