// ************ Require's ************
const express = require("express");
const router = express.Router();
const validate = require('../middlewares/valuser');
const soloEmpresa = require('../middlewares/soloEmpresa');
const upload = require('../middlewares/multer.js');
// ************ Controller Require ************
const empresaController = require("../controllers/empresaController");

/* GET - home page. */
router.get("/perfil",validate, empresaController.perfil);
router.get("/perfil/modificar",validate, soloEmpresa, empresaController.modificarPerfil);
router.get("/perfil/configuracion",validate, soloEmpresa, empresaController.configuracion);
router.get("/informacion",validate, soloEmpresa,empresaController.info);
router.post("/informacion/:id",upload.single('cmp_avatar'),validate, soloEmpresa, empresaController.modificarInfo);
router.get("/mensajes",validate, soloEmpresa, empresaController.mensajes);
router.get("/anuncios/", empresaController.anuncios);
router.get("/anuncios/crear",validate, soloEmpresa, empresaController.crearPublicacion);
router.post("/anuncios/crear",validate, soloEmpresa, empresaController.postearPublicacion);
router.get("/anuncios/modificar/:id",validate, soloEmpresa, empresaController.modificarPublicacion);
router.post("/anuncios/modificar/:id",validate, soloEmpresa, empresaController.actualizarPublicacion);
router.get("/anuncios/delete/:id",validate, soloEmpresa, empresaController.borrarPublicacion);
router.get("/anuncios/postulantes",validate, soloEmpresa, empresaController.postulantes);
router.get("/anuncios/postulantes/CV",validate, soloEmpresa, empresaController.postulantesDetalle);

module.exports = router;
