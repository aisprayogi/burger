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
    burger.post([
        'name', 'sleepy'
    ], [
        req.body.name, req.body.sleepy
    ], function() {
        res.redirect('/');
    });
});

router.put('/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger.update({
        sleepy: req.body.sleepy
    }, condition, function() {
        res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;