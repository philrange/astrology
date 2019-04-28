const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

//const functions = require("firebase-functions")
var express = require('express');

var cons = require('consolidate');
var path = require('path');
var app = express();

// view engine setup
app.engine('html', cons.swig)
console.log(__dirname);
console.log(path.join(__dirname, '/../web/views'));
app.set('views', path.join(__dirname, '/../web/views'));
app.set('view engine', 'html');


app.get('/', function(req, res) {
    res.render('index', 
               {title: 'Home'}
              );
//    res.send('Hello');
});

exports.app = functions.https.onRequest(app)