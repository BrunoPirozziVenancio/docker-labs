const express = require('express');
const mysql = require('mysql2');

const app = express();
const serverName = process.env.SERVER_NAME || 'backend';

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'database',
  user: process.env.DB_USER || 'appuser',
  password: process.env.DB_PASS || 'apppass',
  database: process.env.DB_NAME || 'appdb'
});

app.get('/', (req, res) => {
  res.json({
    server: serverName,
    status: 'online',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  db.ping((err) => {
    if (err) {
      res.status(500).json({ server: serverName, status: 'db_error', error: err.message });
    } else {
      res.json({ server: serverName, status: 'healthy', db: 'connected' });
    }
  });
});

app.listen(3000, () => {
  console.log(`${serverName} rodando na porta 3000`);
});
