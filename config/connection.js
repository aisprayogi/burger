// NPM dependency.
var mysql = require('mysql');

// Connect to JAWS_DB if on Heroku, or a local MySQL instance if not.
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    });
}

// Make connection.
connection.connect();

module.exports = connection;