// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const empresaController = require("../controllers/empresaController");

/* GET - home page. */
router.get("/perfil/:id", empresaController.perfil);
router.get("/info", empresaController.info);
router.get("/mensajes", empresaController.mensajes);
router.get("/anuncios/", empresaController.anuncios);
router.get("/anuncios/crear", empresaController.crearPublicacion);
router.post("/anuncios/crear", empresaController.postearPublicacion);
router.get("/anuncios/modificar", empresaController.modificarPublicacion);
router.put("/anuncios/modificar", empresaController.actualizarPublicacion);
// agregar boton eliminar anuncio
router.get("/anuncios/postulantes", empresaController.postulantes);
router.get("/anuncios/postulantes/CV", empresaController.postulantesDetalle);

module.exports = router;
