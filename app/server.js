'use strict';
let path = require('path');
let express = require('express');
let app = express();
let bodyParser = require("body-parser");

//app set...
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('index.ejs');
});
app.listen(8080, function () {
  console.log(' app listening on port 8080!');
});