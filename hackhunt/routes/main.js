// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const mainController = require("../controllers/mainController");

/* GET - home page. */
router.get("/", mainController.home); //agregar querystrings a los filtros de la busqueda
router.post("/", mainController.busquedaHome);
router.get("/detalle", mainController.detalleAnuncio);
router.get("/login", mainController.loginUsuario);
router.post("/login", mainController.validarUsuario);
router.get("/registro", mainController.registroUsuario);
router.post("/registro", mainController.valRegUsuario);
router.get("/registro/cv", mainController.completarCv);
router.post("/registro/cv", mainController.valCompletarCv);
router.get("/empresa/login", mainController.loginEmpresa);
router.post("/empresa/login", mainController.validarEmpresa);
router.get("/empresa/registro", mainController.registroEmpresa);
router.post("/empresa/registro", mainController.valRegEmpresa);
router.post("/recuperar", mainController.recuperar);
router.post("/empresa/recuperar", mainController.recuperarEmpresa);

module.exports = router;
