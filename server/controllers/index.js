var models = require('../models');


module.exports = {
  messages: {
    get: function (request, response) {
      models.messages.get(function(error, results) {
        if (error) {
          console.log(error);
        }
        response.json(results);
      });
    },

    post: function (request, response) {
      var params = [request.body.message, request.body.username, request.body.roomname];
      models.messages.post(params, function(error, results) {
        if (error) {
          console.log(error);
        }
        response.sendStatus(201);
      });
    }
  },

  users: {
    get: function (request, response) {
      models.users.get(function(error, results) {
        if (error) {
          console.log(error);
        }
        response.json(results);
      });
    },

    post: function (request, response) {
      var params = [request.body.username];
      models.users.post(params, function(error, results) {
        if (error) {
          console.log(error);
        }
        response.sendStatus(201);
      });
    }
  }
};

