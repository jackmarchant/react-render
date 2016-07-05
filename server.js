require('babel-register')({
    presets: ['react', 'es2015']
});

var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');
var Onboarding = require('./Onboarding.jsx');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(request, response) {
    response.send('<h1>Go to /react/:component_name</h1>');
});

app.get('/react/:component_name', function(request, response) {
  var component = capitalizeFirstLetter(request.params.component_name);
  var Router = {
    Onboarding: React.createElement(Onboarding, {
      data: {
        email: "testing@fromtheserver.com",
        firstname: "Jack",
        lastname: 'Marchant'
      },
      handleChange: function(key, e) {
        console.log(key);
      },
      error: {
        email: 'hi there'
      }
    }),
    Component: React.createElement(Component, {title: 'Hello Component'})
  };
  var html = ReactDOMServer.renderToString(Router[component]);
  response.json({html: html});
});

app.post('/react/:component_name', function(request, response) {
  var component = capitalizeFirstLetter(request.params.component_name);

  var props = request.body;
  var Router = {
    Onboarding: React.createElement(Onboarding, props),
    Component: React.createElement(Component, props)
  };
  var html = ReactDOMServer.renderToString(Router[component]);
  response.json({html: html});
});

var PORT = process.env.PORT || 3000;
app.listen(PORT);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
