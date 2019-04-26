
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

var server = app.listen(3000, function() {
    
});

//const http = require('http');
//
//const hostname = '127.0.0.1';
//const port = 3000;
//
//const server = http.createServer((req, res) => {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain');
//  res.render('index', {title: 'Home'});
//});
//
//server.listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/`);
//});