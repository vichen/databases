var db = require('../db');

var dbQuery = function(queryStr, params, cb) {
  db.query(queryStr, params, function(error, results) {
    cb(error, results);
  });
};

module.exports = { 

  messages: {
    get: function (callback) {
      // fetch all messages
      // text, username, roomname, id
      var queryStr = 'select messages.id, messages.text, messages.roomname, users.username \
                      from messages left outer join users on (messages.userid = users.id) \
                      order by messages.id desc';

      dbQuery(queryStr, [], callback);
      // db.query(queryStr, function(error, results) {
      //   callback(error, results);
      // });
    },

    post: function (params, callback) {
      // create a message for a user id based on the given username
      var queryStr = 'insert into messages(text, userid, roomname) \
                      value (?, (select id from users where username = ? limit 1), ?)';

      dbQuery(queryStr, params, callback);
      // db.query(queryStr, params, function(error, results) {
      //   callback(error, results);
      // });
    }
  },

  users: {
    get: function (callback) {
      // fetch all users
      var queryStr = 'select * from users';

      dbQuery(queryStr, [], callback);
      // db.query(queryStr, function(error, results) {
      //   callback(error, results);
      // });
    },

    post: function (params, callback) {
      // create a user
      var queryStr = 'insert into users (username) values (?)';
      
      dbQuery(queryStr, params, callback);
      // db.query(queryStr, params, function(error, results) {
      //   callback(error, results);
      // });
    }
  }
};

