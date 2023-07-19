const mysql = require('mysql2');

// Create a connection
const connection = mysql.createConnection({
  host: 'dtb43',
  user: 'dev1',
  password: 'dev1@123',
  database: 'lndk_dev'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as ID: ' + connection.threadId);
});

// Perform a query
connection.query('select * from storemaster', (err, rows) => {
  if (err) {
    console.error('Error executing query: ' + err.stack);
    return;
  }
  console.log('Query result:', rows);
});

// Close the connection
connection.end((err) => {
  if (err) {
    console.error('Error closing connection: ' + err.stack);
    return;
  }
  console.log('Connection closed.');
});

module.exports = { connection }