var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: '',
    database: 'chat'
});

db.connect();

var getConnection = function(callback) {
    db.getConnection(function(err, connection) {
        callback(err, connection);
    });
}

module.exports = db;

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".