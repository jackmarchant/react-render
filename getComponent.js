var React = require('react');

// internal components
var Component = require('./Component');

var getComponents = function(component, props) {
  var internalComponents = {
    component: React.createElement(Component, props)
  };

  return internalComponents[component];
};

module.exports = getComponents;