
const functions = require("firebase-functions")
var express = require('express');

var cons = require('consolidate');
var path = require('path');
var app = express();

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'html');


app.get('/', function(req, res) {
    res.render('index', 
               {title: 'Home'}
              );
//    res.send('Hello');
});

//const app = functions.https.onRequest(app)
//
//module.exports = {
//  app
//}

var server = app.listen(3000, function() {
    
//});