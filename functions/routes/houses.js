var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('houses', { title: 'Astrology Readings - Houses', activePage: 'houses' });
});

module.exports = router;
