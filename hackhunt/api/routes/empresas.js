const express = require('express');
const router = express.Router();


const empresaFavController = require('../controllers/empresaFavController');
const checkEmailController = require('../controllers/checkEmailController');

router.get('/favoritos', empresaFavController.favoritos); 
router.post('/favoritos', empresaFavController.addFavorite); 
router.delete('/favoritos', empresaFavController.removeFavorite);

router.get('/email', checkEmailController.check);

module.exports = router; 