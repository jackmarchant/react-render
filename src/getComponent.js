import React from 'react';
import Component from './components/Component';
import Home from './components/Home';

const mergePropsWithEnv = initialProps => {
  const environmentProps = {
    BASE_URI: process.env.BASE_URI
  };
  return Object.assign({}, initialProps, {
    env: environmentProps
  });
};

const getComponent = (component, props) => {
  const createElement = props => el => React.createElement(el, props);
  const createElementWithPreloadedProps = el => createElement(mergePropsWithEnv(props))(el);
  const internalComponents = {
    component: createElementWithPreloadedProps(Component),
    home: createElementWithPreloadedProps(Home),
  };

  return internalComponents[component];
};

export default getComponent;