var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      
        // somehow input rows and fields(cols) into appropriate view 
    },
       // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      // check what's in json, 
      // if just username, then ask model to insert into db
      var username = '';
      req.on('data', function(chunk) {
        var info = JSON.parse(chunk.toString('utf8'));
        username += info;
      });
      req.on('end', function() {
        models.users.post(username);
      });
      res.end();
    }
  }
};

