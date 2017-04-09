var React = require('react');
var Page = require('./shared/Page');

var Home = function(props) {
  return (
    <Page
      title="Jack Marchant - Web Developer"
    >
      <div className="container main-content">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1"></div>
        </div>
      </div>
    </Page>
  );
};

module.exports = Home;