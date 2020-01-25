// ************ Require's ************
const express = require("express");
const router = express.Router();
const upload = require('../middlewares/multer.js');
const soloGuest = require('../middlewares/guest');
const { check, validationResult, body } = require('express-validator');
// ************ Controller Require ************
const mainController = require("../controllers/mainController");

// ************ Router's ************
router.get("/", mainController.home); //agregar querystrings a los filtros de la busqueda
router.post("/", mainController.busquedaHome);
router.get("/detalle", mainController.detalleAnuncio);
router.get("/login", soloGuest, mainController.loginUsuario);
router.post("/login", [
    check('user_email')
        .notEmpty().withMessage('Debes ingresar un correo').bail()
        .isEmail().withMessage('Ingresa un correo válido'),
    check('user_passwd')
        .notEmpty().withMessage('Debes ingresar una clave').bail()
        .isLength({ min: 3 }).withMessage('Ingresa una clave válida'),
    //validar que exista el usuario
], mainController.validarUsuario);
router.get("/registro", soloGuest, mainController.registroUsuario);
router.post("/registro", upload.single('user_avatar'),[
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
], mainController.valRegUsuario);
router.get("/registro/cv", soloGuest, mainController.completarCv);
router.post("/registro/cv", mainController.valCompletarCv);
router.get("/empresa/login", soloGuest, mainController.loginEmpresa);
router.post("/empresa/login", [
    check('cmp_user_email')
        .notEmpty().withMessage('Debes ingresar un correo').bail()
        .isEmail().withMessage('Ingresa un correo válido'),
    check('cmp_user_passwd')
        .notEmpty().withMessage('Debes ingresar una clave').bail()
        .isLength({ min: 3 }).withMessage('Ingresa una clave válida'),
    //validar que exista el usuario
], mainController.validarEmpresa);
router.get("/empresa/registro", soloGuest, mainController.registroEmpresa);
router.post("/empresa/registro", upload.single('cmp_avatar'), [
    check('user_cmp_name')
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
], mainController.valRegEmpresa);
// enviar mail con link para recuperar clave
router.post("/recuperar", mainController.recuperar);
router.post("/empresa/recuperar", mainController.recuperarEmpresa);
router.get("/pruebas", mainController.pruebas);
router.get("/logout", mainController.logout);

module.exports = router;