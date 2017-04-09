var React = require('react');

// internal components
var Component = require('./components/Component');
var Home = require('./components/Home');

var mergePropsWithEnv = function(initialProps) {
  var environmentProps = {
    BASE_URI: process.env.BASE_URI
  };
  return Object.assign({}, initialProps, {
    env: environmentProps
  });
};

var getComponent = function(component, props) {
  var createElement = function(props) {
    return function(el) {
      return React.createElement(el, props);
    };
  };
  var createElementWithPreloadedProps = function(el) {
    return createElement(mergePropsWithEnv(props))(el);
  };
  var internalComponents = {
    component: createElementWithPreloadedProps(Component),
    home: createElementWithPreloadedProps(Home),
  };

  return internalComponents[component];
};

module.exports = getComponent;