var React = require('react');
var ReactDOMServer = require('react-dom/server');
var getComponent = require('./getComponent');

var renderWithProps = function(component, props = {}) {
  return ReactDOMServer.renderToString(getComponent(component, props));
}

var createRoutes = function(app) {
  app.get('/', function(request, response) {
    response.send(renderWithProps('component', {title: 'React Server Renderer'}));
  });

  app.get('/:component_name', function(request, response) {
    response.send(renderWithProps(request.params.component_name, request.body));
  });

  app.post('/:component_name', function(request, response) {
    response.send(renderWithProps(request.params.component_name, request.body));
  });
};

module.exports = createRoutes;