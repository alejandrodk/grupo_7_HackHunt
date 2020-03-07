const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/anuncios', apiController.anuncios);
router.get('/favoritos', apiController.favoritos);
router.post('/favoritos', apiController.addFavorite);

module.exports = router;