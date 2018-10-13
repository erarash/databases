var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      connection.query('SELECT msg FROM messages', (err, rows, fields) => {
        if (rows.length !== 0){
          data['']
        }
      })
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

