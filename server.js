require('babel-register')({
    presets: ['react', 'es2015']
});

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var createRoutes = require('./routes');

createRoutes(app);

var PORT = process.env.PORT || 3000;
app.listen(PORT);