const express = require('express'); 
const router = express.Router();

const controller = require('../controllers/skillsController');

router.get('/', controller.skills)
router.get('/:id', controller.skill)
router.post('/', controller.create) 
router.delete('/:id', controller.delete)

module.exports = router;