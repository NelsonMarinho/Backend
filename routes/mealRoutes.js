const express = require('express');
const router = express.Router();
const mealController = require('../controllers/mealController');

router.post('/', mealController.addMeal);
router.get('/', mealController.getMealsByMonth);
router.post('/prices', mealController.savePrices);
router.get('/prices', mealController.getPrices);

module.exports = router;
