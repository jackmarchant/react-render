var React = require('react');

var testComponent = function(props) {
  return (
    <div className="component">
      <h1>{props.title}</h1>
    </div>
  );
};

module.exports = testComponent;