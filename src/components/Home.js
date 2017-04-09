var React = require('react');
var Page = require('./shared/Page');
var Link = require('./shared/Link');

var Home = function(props) {
  return (
    <Page
      title="Jack Marchant - Web Developer"
      env={props.env}
    >
      <div className="container main-content">
        <div className="row">
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

module.exports = Home;