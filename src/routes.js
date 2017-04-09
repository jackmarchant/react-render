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
    const props = Object.keys(request.query).length > 0 ? request.query : {title: 'Try appending ?title=hello to the URL'};
    response.send(renderWithProps(request.params.component_name, props));
  });

  app.post('/:component_name', function(request, response) {
    const props = Object.keys(request.body).length > 0 ? request.body : {title: 'Try posting a JSON object `{"title": "hello"}`'};
    response.send(renderWithProps(request.params.component_name, props));
  });
};

module.exports = createRoutes;