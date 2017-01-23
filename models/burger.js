var connection = require('../config/connections.js');
var orm = require('../config/orm.js');

connection.connect(function (err) {
    if (err) {
        return console.error('error connecting: ' + err.stack);
    }

    console.log('connected as id %s', connection.threadId);
});

var router = 'fdsf';

// Root get route
app.get("/", function(req, res) {

    connection.query("SELECT * FROM events;", function(err, data) {
        if (err) throw err;

        res.render("index", { events: data });
    });
});

// Post route -> back to home
app.post("/create", function(req, res) {

    connection.query("INSERT INTO events (event) VALUES (?)", [req.body.event], function(err, result) {
        if (err) throw err;

        res.redirect("/");
    });

});


module.exports = router;