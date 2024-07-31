// config/database.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
require('dotenv').config(); // Adicionar para garantir que as variáveis de ambiente sejam carregadas

const connectDB = () => {
  const dbPath = path.resolve(__dirname, '..', process.env.DATABASE_URL || './database.sqlite'); // Fallback para evitar undefined
  const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Error opening database', err.message);
    } else {
      console.log('Connected to SQLite database.');
    }
  });

  return db;
};

module.exports = { connectDB };
