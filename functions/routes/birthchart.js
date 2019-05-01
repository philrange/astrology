var express = require('express');
var router = express.Router();
var astrology = require('../js/astrology')


/* GET home page. */
router.get('/', function(req, res, next) {
    
    var result = astrology.getBirthChart()

  res.render('birthchart', { title: 'Home Page', abc: result[0] + ' ' + result[1] + ' ' + result[2] + ' ' + result[3] + ' ' + result[4] });
});

module.exports = router;
