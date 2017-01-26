var mysql = require('mysql');
var connection = require('./connection.js');

module.exports = {
    selectAll: function(table, orderBy, direction, callback) {
        var queryString = 'SELECT * FROM ?? ORDER BY ??;';
        connection.query(queryString, [table, orderBy, direction], function(err, data) {
            if (err) {
                return console.log(err);
            } else {
                return callback(data);
            }
        });
    },
    insertOne: function(table, properties, callback) {
        var queryString = 'INSERT INTO ?? (??) VALUES (??);';
        connection.query(queryString, [table, properties.keys(), properties.values()], function(err, data) {
            if (err) {
                return console.log(err);
            } else {
                return callback(data);
            }
        });
    },
    updateOne: function(table, properties, selector, callback) {
        var queryString = 'UPDATE ?? SET ?? WHERE ?? ;';
        connection.query(queryString, [table, properties, selector], function(err, data) {
            if (err) {
                return console.log(err);
            } else {
                return callback(data);
            }
        });
    }
};
