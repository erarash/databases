var db = require('../db');

//Think about how to refactor the repeating codes
module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      var queryStr = 'SELECT messages.users_id, messages.msg, messages.roomname from messages \
                      left outer join users on (messages.users_id = users.userid) \
                      order by messages.users_id desc'; 
      db.query(queryStr, (err, results) => {
        if (err) {
          console.error('error occured: ', err);
        } else {
          callback(result);
        }
      });
    }, 
    // a function which can be used to insert a message into the database
    post: function (val, callback) {
      var queryStr = 'INSERT INTO messages (msg, users_id, roomname) \
                      VALUES (?, (select userid from users where username = ? limit 1), ?)'; 
      db.query(queryStr, val, (err, result) => {
        if (err) {
          console.error('error occured: ', err);
        } else {
          callback(result);
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'SELECT * FROM users';
      db.query(queryStr, (err, results) => {
        if (err) {
          console.error('error occured: ', err);
        } else {
          callback(results);
        }
      });
    },
    post: function (val, callback) {
      var queryStr = 'INSERT INTO users (username) VALUES (?)';
      db.query(queryStr, val, (err, results) => {
        if (err) {
          console.error('error occured: ', err);
        } else {
          callback(results);
        }
      }); 
    }
  }
};