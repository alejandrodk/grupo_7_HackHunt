// ************ Require's ************
const express = require("express");
const router = express.Router();
const auth = require('../middlewares/auth');
const soloEmpresa = require('../middlewares/soloEmpresa');
const upload = require('../middlewares/multer.js');
// ************ Controller Require ************
const empresaController = require("../controllers/empresaController");

/* GET - home page. */
router.get("/perfil",auth,soloEmpresa, empresaController.perfil);
router.get("/perfil/modificar",auth, soloEmpresa, empresaController.modificarPerfil);
router.get("/perfil/configuracion",auth, soloEmpresa, empresaController.configuracion);
router.get("/informacion",auth, soloEmpresa,empresaController.info);
router.post("/informacion/:id",upload.single('cmp_avatar'),auth, soloEmpresa, empresaController.modificarInfo);
router.get("/mensajes",auth, soloEmpresa, empresaController.mensajes);
router.get("/anuncios/", empresaController.anuncios);
router.get("/anuncios/crear",auth, soloEmpresa, empresaController.crearPublicacion);
router.post("/anuncios/crear",auth, soloEmpresa, empresaController.postearPublicacion);
router.get("/anuncios/modificar/:id",auth, soloEmpresa, empresaController.modificarPublicacion);
router.post("/anuncios/modificar/:id",auth, soloEmpresa, empresaController.actualizarPublicacion);
router.get("/anuncios/delete/:id",auth, soloEmpresa, empresaController.borrarPublicacion);
router.get("/anuncios/postulantes",auth, soloEmpresa, empresaController.postulantes);
router.get("/anuncios/postulantes/CV",auth, soloEmpresa, empresaController.postulantesDetalle);

module.exports = router;
