var db = require('../db');
var connection = db.connection;
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function () {
      return new Promise(function(resolve, reject) {
        connection.query('SELECT * FROM messages', function(error, results) {
          if (error) {
            console.error('you messed up:', error);
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
    }, // a function which produces all the messages
    post: function () {
      return new Promise(function(resolve, reject) {
        connection.query('INSERT INTO messages (text, id_User, id_Room) VALUES (?, ?,?);', function(error) {
          if (error) {
            reject(error);
          } else {
            console.log('successful');
            resolve();
          }
        });
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username) {
      connection.query('INSERT INTO users (name) VALUES (' + username + ');',
        function(err) {
          if (err) { console.log(err); }
        });
    }
  }
};

