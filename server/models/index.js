var db = require('../db');
var connection = db.connection;

module.exports = {
  messages: {
    get: function () {
      connection.query('SELECT * FROM messages', function(err, rows, fields) {
        if (err) {
          console.error('you messed up:', err);
        } else {
          // return {text: rows.text, user: rows.id_User, room: rows.id_Room};
          var results = [];
          for (var i = 0; i < rows.length; i++) {
            // connection.query('SELECT name FROM users  ')
            var newObj = {text: rows[i].text, user: rows[i].id_User, room: rows[i].id_Room};
            results.push(newObj);
          }
          return results;
        }
      });
    }, // a function which produces all the messages
    post: function () {

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

