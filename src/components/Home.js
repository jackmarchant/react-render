import React from 'react';
import Page from './shared/Page';
import Link from './shared/Link';
import Code from './shared/Code';

const Home = props => {
  return (
    <Page
      title="Jack Marchant - Web Developer"
      env={props.env}
    >
      <div className="container main-content">
        <div className="row">
          <p>You passed in props:</p>
          <Code>{props}</Code>
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <p className="text-center">
              Rendered using <Link to="https://github.com/jackmarchant/react-render">React Render</Link>
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;