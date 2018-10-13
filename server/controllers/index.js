var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          console.error('error occured: ', err);
        } else {
          res.json(results); //send back data as json through express
        }
      });
    }, 
    //models.messages.post receives param(val), must be provided as an array in sql
    //in controller, we get the data in body aka req.body and it's an obj.
    post: function (req, res) {
      var val = [req.body[msg] ];
      models.messages.post(val, (err, results) => {
        if (err) {
          console.error('error occured: ', err);
        } else {
          res.json(results);
        }
      });
    }
  },
  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, result) => {
        if (err) {
          console.error('error occured: ', err);
        } else {
          res.json(result);
        }
      });
    },
    post: function (req, res) {
      var val = [req.body[username]];
      models.users.post(val, (err, result) => {
        if (err) {
          console.err('error occured: ', err);
        } else {
          res.json(result);
        }
      });
    }
  }
};