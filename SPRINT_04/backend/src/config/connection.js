const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.CLEARDB_HOST || 'localhost',
  user: process.env.CLEARDB_USER || 'root',
  password: process.env.CLEARDB_PASSWORD || '',
  database: process.env.CLEARDB_DATABASE || 'sosmedicamentos',
});

module.exports = connection;
