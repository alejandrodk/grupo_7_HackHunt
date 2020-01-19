// ************ Require's ************
const express = require("express");
const router = express.Router();
const validate = require('../middlewares/valuser');
// ************ Controller Require ************
const empresaController = require("../controllers/empresaController");

/* GET - home page. */
router.get("/perfil",validate, empresaController.perfil);
router.get("/perfil/modificar", empresaController.modificarPerfil);
router.get("/perfil/configuracion", empresaController.configuracion);
router.get("/informacion", empresaController.info);
router.get("/mensajes", empresaController.mensajes);
router.get("/anuncios/", empresaController.anuncios);
router.get("/anuncios/crear", empresaController.crearPublicacion);
router.post("/anuncios/crear", empresaController.postearPublicacion);
router.get("/anuncios/modificar/:id", empresaController.modificarPublicacion);
router.post("/anuncios/modificar/:id", empresaController.actualizarPublicacion);
router.get("/anuncios/delete/:id", empresaController.borrarPublicacion);
router.get("/anuncios/postulantes", empresaController.postulantes);
router.get("/anuncios/postulantes/CV", empresaController.postulantesDetalle);

module.exports = router;
