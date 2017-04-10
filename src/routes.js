import React from 'react';
import ReactDOMServer from 'react-dom/server';
import getComponent from './getComponent';

const renderWithProps = (component, props = {}) => {
  return ReactDOMServer.renderToStaticMarkup(getComponent(component, props));
};

const hasProps = obj => Object.keys(obj).length > 0;

const createRoutes = app => {
  app.get('/', (request, response) => {
    response.send(renderWithProps('component', {title: 'React Server Renderer'}));
  });

  app.get('/:component_name', (request, response) => {
    const props = hasProps(request.query) ? request.query : {title: 'Try appending ?title=hello to the URL'};
    response.send(renderWithProps(request.params.component_name, props));
  });

  app.post('/:component_name', (request, response) => {
    const props = hasProps(request.body) ? request.body : {title: 'Try posting a JSON object `{"title": "hello"}`'};
    response.send(renderWithProps(request.params.component_name, props));
  });
};

export default createRoutes;