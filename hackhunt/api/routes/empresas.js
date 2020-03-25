const express = require('express');
const router = express.Router();


const empresaController = require('../controllers/empresaController');


router.get('/favoritos', empresaController.favoritos); 
router.post('/favoritos', empresaController.addFavorite); 
router.delete('/favoritos', empresaController.removeFavorite);

router.get('/email', empresaController.check);

module.exports = router; 