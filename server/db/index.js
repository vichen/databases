var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".




var connection = mysql.createConnection({
  host: 'localhost:3000',
  user: 'root',
  password: '1'
});

connection.connect();   // use connection to query DB

exports.connection = connection;
