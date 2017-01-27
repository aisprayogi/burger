// Require ORM.
var orm = require('../config/orm.js');

module.exports = {
    all: function(callback) {
        // Makes a request for data to ORM function, returns data to controller.
        orm.selectAll('burgers', 'id', 'DESC', function(data) {
            callback(data);
        });
    },
    post: function(input, callback) {
        // Creates query snippets from input from controller.
        var columns = '(burger_name, devoured)';
        var values = '\'' + input + '\', false';

        // Gives query parameters to ORM function.
        orm.insertOne('burgers', columns, values, function (data) {
            callback(data);
        });
    },
    update: function(property, selector, callback) {
        // Creates query snippets from property and selector from controller.
        var update = 'devoured = ' + property;
        var condition = 'id = ' + selector;

        // Gives query parameters to ORM function.
        orm.updateOne('burgers', update, condition, function(data) {
            callback(data);
        });
    }
};
