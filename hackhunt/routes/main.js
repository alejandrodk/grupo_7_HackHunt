// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const mainController = require("../controllers/mainController");

/* GET - home page. */
router.get("/", mainController.home);
router.get("/detalle", mainController.detalleAnuncio);
router.get("/login", mainController.loginUsuario);
router.get("/registro", mainController.registroUsuario);
router.get("/empresa/login", mainController.loginEmpresa);
router.get("/empresa/registro", mainController.registroEmpresa);

module.exports = router;
