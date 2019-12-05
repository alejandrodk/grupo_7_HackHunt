// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const empresaController = require("../controllers/empresaController");

/* GET - home page. */
router.get("/perfil", empresaController.perfil);
router.get("/info", empresaController.info);
router.get("/mensajes", empresaController.mensajes);
router.get("/anuncios/", empresaController.anuncios);
router.get("/anuncios/detalle", empresaController.anuncioDetalle);
router.get("/anuncios/postulantes", empresaController.postulantes);
router.get("/anuncios/postulantes/CV", empresaController.postulantesDetalle);

module.exports = router;
