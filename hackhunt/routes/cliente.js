// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const clienteController = require("../controllers/clienteController");

/* GET - home page. */
router.get("/", clienteController.perfil);
router.get("/postulaciones", clienteController.postulaciones);
router.get("/favoritos", clienteController.favoritos);
router.get("/alertas", clienteController.alertas);
router.get("/informacion", clienteController.info);
router.put("/informacion", clienteController.actInfo);
router.get("/configuracion", clienteController.configuracion);
router.put("/configuracion", clienteController.actConfig);
router.get("/mensajes", clienteController.mensajes);

module.exports = router;
