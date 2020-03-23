const express = require('express');
const router = express.Router();

const favoritosController = require('../controllers/favoritosController');
const postulacionesController = require('../controllers/postulacionesController');
const empresaFavController = require('../controllers/empresaFavController');

router.get('/favoritos', favoritosController.favoritos);
//router.get('/favoritos/:id', favoritosController.favoritos); -- favoritos por cliente
router.post('/favoritos', favoritosController.addFavorite); 
router.delete('/favoritos', favoritosController.removeFavorite);

router.get('/empresa/favoritos', empresaFavController.favoritos);
router.post('/empresa/favoritos', empresaFavController.addFavorite); 
router.delete('/empresa/favoritos', empresaFavController.removeFavorite);

router.get('/postulaciones', postulacionesController.postulaciones);
router.get('/postulaciones/:id', postulacionesController.postulacionesCliente);
router.get('/postulaciones/:id/:adv', postulacionesController.postulacionesDetalle);
//router.get('/postulaciones/anuncio/:id', postulacionesController.postulacionesCliente);
router.post('/postulaciones', postulacionesController.addPostulation);
router.delete('/postulaciones', postulacionesController.removePostulation);

module.exports = router;