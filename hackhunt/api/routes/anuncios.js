const express = require('express');
const router = express.Router();
const anunciosController = require('../controllers/anunciosController');
const favoritosController = require('../controllers/favoritosController');
const postulacionesController = require('../controllers/postulacionesController');

router.get('/', anunciosController.anuncios);
router.get('/activos', anunciosController.activos);
router.get('/expirados', anunciosController.expirados);

router.get('/favoritos/:id', favoritosController.favoritos);
//router.get('/favoritos/:id', favoritosController.favoritos); -- favoritos por cliente
router.post('/favoritos', favoritosController.addFavorite); 
router.delete('/favoritos', favoritosController.removeFavorite);


router.get('/postulaciones', postulacionesController.postulaciones);
router.get('/postulaciones/:id', postulacionesController.postulacionesCliente);
router.get('/postulaciones/:id/:adv', postulacionesController.postulacionesDetalle);
//router.get('/postulaciones/anuncio/:id', postulacionesController.postulacionesCliente);
router.post('/postulaciones', postulacionesController.addPostulation);
router.delete('/postulaciones', postulacionesController.removePostulation);

module.exports = router;