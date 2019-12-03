// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const mainController = require("../controllers/mainController");

/* GET - home page. */
router.get("/", mainController.home);
router.get("/detalleAnuncio", mainController.detalleAnuncio);
router.get("/misPostulaciones", mainController.misPostulaciones);
router.get("/registroEmpresa", mainController.registroEmpresa);
router.get("/registroUsuario", mainController.registroUsuario);
router.get("/crearPublicacion", mainController.crearPublicacion);

module.exports = router;
