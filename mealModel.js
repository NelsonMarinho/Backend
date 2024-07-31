const db = require('../config/database').connectDB();

const createMealTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS meals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT,
      lunch INTEGER,
      dinner INTEGER,
      snack INTEGER,
      soda INTEGER
    );
  `;
  db.run(query);
};

const addMeal = (meal, callback) => {
  const { date, lunch, dinner, snack, soda } = meal;
  const query = `INSERT INTO meals (date, lunch, dinner, snack, soda) VALUES (?, ?, ?, ?, ?)`;
  db.run(query, [date, lunch, dinner, snack, soda], function(err) {
    callback(err, this.lastID);
  });
};

const getMealsByMonth = (month, year, callback) => {
  const query = `SELECT * FROM meals WHERE strftime('%m', date) = ? AND strftime('%Y', date) = ?`;
  db.all(query, [month, year], (err, rows) => {
    callback(err, rows);
  });
};

const savePrices = (prices, callback) => {
  const { lunchPrice, dinnerPrice, snackPrice, sodaPrice } = prices;
  const query = `INSERT OR REPLACE INTO prices (id, lunch, dinner, snack, soda) VALUES (1, ?, ?, ?, ?)`;
  db.run(query, [lunchPrice, dinnerPrice, snackPrice, sodaPrice], callback);
};

const getPrices = (callback) => {
  const query = `SELECT * FROM prices WHERE id = 1`;
  db.get(query, (err, row) => {
    callback(err, row);
  });
};

module.exports = { createMealTable, addMeal, getMealsByMonth, savePrices, getPrices };
