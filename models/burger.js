var orm = require('../config/orm.js');

module.exports = {
    all: function(callback) {
        orm.selectAll('burgers', 'id', 'ASC', function(data) {
            callback(data);
        });
    },
    post: function(columns, values, callback) {
        orm.insertOne('burgers', columns, values, function (data) {
            callback(data);
        });
    },
    update: function(properties, selector, callback) {
        orm.updateOne('burgers', properties, selector, function(data) {
            callback(data);
        });
    }
};
