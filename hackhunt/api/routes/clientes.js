const express = require('express');
const router = express.Router();

const controller = require('../controllers/clientesController');

router.get('/', controller.clientes)
router.get('/skills/:id', controller.skills)
router.post('/skills', controller.addSkill)
router.post('/skills/delete', controller.deleteSkill)

module.exports = router;