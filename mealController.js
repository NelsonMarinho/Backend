const Meal = require('../models/mealModel');

const addMeal = (req, res) => {
  const meal = req.body;
  Meal.addMeal(meal, (err, id) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id });
    }
  });
};

const getMealsByMonth = (req, res) => {
  const { month, year } = req.query;
  Meal.getMealsByMonth(month, year, (err, meals) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(meals);
    }
  });
};

const savePrices = (req, res) => {
  const prices = req.body;
  Meal.savePrices(prices, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Prices saved successfully' });
    }
  });
};

const getPrices = (req, res) => {
  Meal.getPrices((err, prices) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(prices);
    }
  });
};

module.exports = { addMeal, getMealsByMonth, savePrices, getPrices };
