// ************ Require's ************
const express = require("express");
const router = express.Router();
const auth = require('../middlewares/auth');
const soloEmpresa = require('../middlewares/soloEmpresa');
const upload = require('../middlewares/multer.js');
// ************ Controller Require ************
const empresaController = require("../controllers/empresaController");

/* GET - home page. */
router.get("/perfil", soloEmpresa,empresaController.perfil);
router.get("/perfil/modificar", soloEmpresa, empresaController.modificarPerfil);
router.get("/perfil/configuracion",soloEmpresa, empresaController.configuracion);
router.put("/perfil/configuracion",soloEmpresa, empresaController.actualizarConfiguracion);
router.get("/informacion",soloEmpresa,empresaController.info);
router.post("/informacion",upload.single('cmp_avatar'), soloEmpresa, empresaController.modificarInfo);
router.post("/:id", upload.single('avatar'),soloEmpresa, empresaController.cambiarAvatar);
router.get("/mensajes", soloEmpresa, empresaController.mensajes);
router.get("/anuncios/",soloEmpresa, empresaController.anuncios);
router.get("/anuncios/crear",soloEmpresa, empresaController.crearPublicacion);
router.post("/anuncios/crear", soloEmpresa, empresaController.postearPublicacion);
router.get("/anuncios/modificar/:id",soloEmpresa, empresaController.modificarPublicacion);
router.post("/anuncios/modificar/:id",soloEmpresa, empresaController.actualizarPublicacion);
router.patch("/anuncios/modificar/skills",soloEmpresa,empresaController.adv_modificarSkills)
router.get("/anuncios/delete/:id",soloEmpresa, empresaController.borrarPublicacion);
router.get("/anuncios/postulantes/:id",soloEmpresa, empresaController.postulantes);
router.get("/anuncios/postulante/cv", soloEmpresa, empresaController.postulantesDetalle);


module.exports = router;
