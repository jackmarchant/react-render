require('babel-register')({
  presets: ['react', 'es2015']
});

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var createRoutes = require('./routes');

app.use(express.static('public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
createRoutes(app);

app.listen(process.env.PORT || 3000);