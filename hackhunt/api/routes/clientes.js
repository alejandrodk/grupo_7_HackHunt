const express = require('express');
const router = express.Router();

const controller = require('../controllers/clientesController');

router.get('/', controller.clientes)
router.get('/skills/:id', controller.skills)
router.post('/skills', controller.addSkill)
router.post('/skills/delete', controller.deleteSkill)

router.get('/notificaciones', controller.getNotificaciones)
router.post('/notificaciones', controller.storeNotification)

router.get('/email', controller.check)

module.exports = router;