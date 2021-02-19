var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});

router.get('/mabat', function(req, res, next) {
    res.render('mabat', { title: 'Express' });
});


router.get('/gallery', function(req, res, next) {
    res.render('gallery', { title: 'Express' });
});

router.get('/grid', function(req, res, next) {
    res.render('grid', { title: 'Express' });
});

router.get('/vincent', function(req, res, next) {
    res.render('vincent', { title: 'Express' });
});

router.get('/grant', function(req, res, next) {
    res.render('grant', { title: 'Express' });
});


router.get('/auwal', function(req, res, next) {
    res.render('auwal', { title: 'Express' });
});

router.get('/soja', function(req, res, next) {
    res.render('soja', { title: 'Express' });
});

module.exports = router;
