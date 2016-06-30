require('babel-register')({
    presets: ['react']
});

var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');
var Onboarding = require('./Onboarding.jsx');

app.use(express.static('public'));

app.get('/', function(request, response) {
    response.send('<h1>Go to /react/:component_name</h1>');
});

app.get('/react/:component_name', function(request, response) {
  var componentName = capitalizeFirstLetter(request.params.component_name);
  console.log(componentName);
  var MyComponent = {
    Onboarding: React.createElement(Onboarding, {title: 'Hello Onboarding'}),
    Component: React.createElement(Component, {title: 'Hello Component'})
  };
  var html = ReactDOMServer.renderToString(MyComponent[componentName]);
  response.json({html: html});
});

app.post('/react/:component_name', function(request, response) {
  var componentName = capitalizeFirstLetter(request.params.component_name);
  console.log('request: ', request);

  var props = {};
  var MyComponent = {
    Onboarding: React.createElement(Onboarding, props),
    Component: React.createElement(Component, props)
  };
  var html = ReactDOMServer.renderToString(MyComponent[componentName]);
  response.json({html: html});
});

var PORT = process.env.PORT || 3000;
app.listen(PORT);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
