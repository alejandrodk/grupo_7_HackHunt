// ************ Require's ************
const express = require("express");
const router = express.Router();
const upload = require('../middlewares/multer.js');
const {check, validationResult, body} = require('express-validator');
// ************ Controller Require ************
const mainController = require("../controllers/mainController");

/* GET - home page. */
router.get("/", mainController.home); //agregar querystrings a los filtros de la busqueda
router.post("/", mainController.busquedaHome);
router.get("/detalle", mainController.detalleAnuncio);
router.get("/login", mainController.loginUsuario);
router.post("/login",[
    check('user_email').isEmail().withMessage('Ingresa un correo válido'),
    /*body('usaer_email').custom((value)=>{
        // validar que el email no exista en la DB
        // retornar true o false
    }).withMessage('El correo ingresado ya existe')*/
] ,mainController.validarUsuario);
router.get("/registro", mainController.registroUsuario);
router.post("/registro",[
    check('user_name'),
    check('user_name'),
    check('user_lastname'),
    check('user_lastname'),
    check('user_email'),
    check('user_email'),
    check('user_passwd'),
    check('user_passwd'),
],upload.single('user_avatar') ,mainController.valRegUsuario);
router.get("/registro/cv", mainController.completarCv);
router.post("/registro/cv", mainController.valCompletarCv);
router.get("/empresa/login", mainController.loginEmpresa);
router.post("/empresa/login", mainController.validarEmpresa);
router.get("/empresa/registro", mainController.registroEmpresa);
router.post("/empresa/registro",upload.single('cmp_avatar'), mainController.valRegEmpresa);
router.post("/recuperar", mainController.recuperar);
router.post("/empresa/recuperar", mainController.recuperarEmpresa);
router.get("/pruebas",mainController.pruebas);
router.get("/logout",mainController.logout);

module.exports = router;
