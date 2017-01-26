var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});


router.post('/', function(req, res) {
    burger.post('(burger_name, devoured)', '\'' + req.body.name + '\', false', function() {
        res.redirect('/');
    });
});

router.put('/:id', function(req, res) {
    var update = 'devoured = ' + req.body.devoured;
    var condition = 'id = ' + req.params.id;

    burger.update(
        update, condition, function() {
            res.redirect('/');
        });
});

// Export routes for server.js to use.
module.exports = router;