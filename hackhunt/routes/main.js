// ************ Require's ************
const express = require("express");
const router = express.Router();
const upload = require('../middlewares/multer.js');
const soloGuest = require('../middlewares/soloGuest');
const { check, body } = require('express-validator');
const validator = require('../middlewares/form_validators');
const filtrarBusqueda = require('../middlewares/filtrarBusqueda');

// ************ Controller Require ************
const mainController = require("../controllers/mainController");

// ************ Router's ************ 
router.get("/", filtrarBusqueda , mainController.home); 
router.get("/publicacion/:dateFilter", filtrarBusqueda , mainController.home);
router.get("/jornada/:workdayFilter", filtrarBusqueda , mainController.home);
router.get("/skill/:skillFilter", filtrarBusqueda , mainController.home);
router.get("/experiencia/:levelFilter", filtrarBusqueda , mainController.home);

router.get("/detalle", mainController.detalleAnuncio);
router.get('/postulacion', mainController.postulacion);

router.get("/login", soloGuest, mainController.loginUsuario);
router.post("/login", validator.user_login, mainController.validarUsuario);

router.get("/registro", soloGuest, mainController.registroUsuario);
router.post("/registro", upload.single('user_avatar'), validator.user_register, mainController.valRegUsuario);

router.get("/registro/cv", soloGuest, mainController.completarCv);
router.post("/registro/cv",validator.user_complete_cv ,mainController.valCompletarCv);

router.get("/empresa/login", soloGuest, mainController.loginEmpresa);
router.post("/empresa/login", validator.cmp_login, mainController.validarEmpresa);

router.get("/empresa/registro", soloGuest, mainController.registroEmpresa);
router.post("/empresa/registro", upload.single('cmp_avatar'),validator.cmp_register, mainController.valRegEmpresa);

router.post("/recuperar", mainController.recuperar);
router.post("/empresa/recuperar", mainController.recuperarEmpresa);

router.get("/pruebas", mainController.pruebas);
router.get("/logout", mainController.logout);


module.exports = router;

/*
*/