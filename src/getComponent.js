var React = require('react');

// internal components
var Component = require('./components/Component');
var Home = require('./components/Home');

var getComponents = function(component, props) {
  var internalComponents = {
    component: React.createElement(Component, props),
    home: React.createElement(Home, props),
  };

  return internalComponents[component];
};

module.exports = getComponents;