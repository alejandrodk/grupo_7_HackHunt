const express = require('express');
const router = express.Router();

const favoritosController = require('../controllers/favoritosController');
const postulacionesController = require('../controllers/postulacionesController');

router.get('/favoritos', favoritosController.favoritos);
//router.get('/favoritos/:id', favoritosController.favoritos); -- favoritos por cliente
router.post('/favoritos', favoritosController.addFavorite);
router.delete('/favoritos', favoritosController.removeFavorite);

router.get('/postulaciones', postulacionesController.postulaciones);
//router.get('/postulaciones/:id', postulacionesController.postulaciones); -- postulaciones por cliente
router.post('/postulaciones', postulacionesController.addPostulation);
router.delete('/postulaciones', postulacionesController.removePostulation);

module.exports = router;