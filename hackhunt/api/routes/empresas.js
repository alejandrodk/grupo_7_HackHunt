const express = require('express');
const router = express.Router();


const empresaController = require('../controllers/empresaController');

router.get('/', empresaController.empresas);
router.get('/favoritos', empresaController.favoritos); 
router.post('/favoritos', empresaController.addFavorite); 
router.delete('/favoritos', empresaController.removeFavorite);
router.get('/rank_postulados', empresaController.masPostulada);
router.get('/email', empresaController.check);

module.exports = router; 