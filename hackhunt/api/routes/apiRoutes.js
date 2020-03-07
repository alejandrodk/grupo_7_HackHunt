const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/favoritos', apiController.favoritos);
router.post('/favoritos', apiController.addFavorite);
router.delete('/favoritos', apiController.removeFavorite);

module.exports = router;