var React = require('react');

var Code = function(props) {
  return (
    <pre
     className="container">
     {JSON.stringify(props.children, null, 2)}
    </pre>
  );
};

module.exports = Code;