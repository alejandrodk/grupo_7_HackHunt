// ************ Require's ************
const express = require("express");
const router = express.Router();
const soloCliente = require('../middlewares/soloCliente');

// ************ Controller Require ************
const clienteController = require("../controllers/clienteController");

/* GET - home page. */
router.get("/",soloCliente, clienteController.perfil);
router.get("/postulaciones",soloCliente, clienteController.postulaciones);
router.get("/favoritos",soloCliente, clienteController.favoritos);
router.get("/alertas",soloCliente, clienteController.alertas);
router.get("/informacion",soloCliente, clienteController.info);
router.put("/informacion",soloCliente, clienteController.actInfo);
router.get("/configuracion",soloCliente, clienteController.configuracion);
router.put("/configuracion", clienteController.actConfig);
router.get("/mensajes",soloCliente, clienteController.mensajes);

module.exports = router;
