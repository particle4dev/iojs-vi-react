const express = require('express');
const { getPost, getCategories, getCategory } = require("./data");
const { getPosts } = require("impl");

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:4000/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/posts', function(req, res) {
    getPosts().then(function (data) {
        res.json(data);
    });
});

router.get('/post/:id', function(req, res) {
    getPost(req.params.id, function (data) {
        res.json(data);
    });
});

router.get('/categories', function(req, res) {
    getCategories(function (data) {
        res.json(data);
    });
});

router.get('/category/:id', function(req, res) {
    getCategory(req.params.id, function (data) {
        res.json(data);
    });
});

module.exports = router;