var React = require('react');

var Link = function(props) {
  return (
    <a href={props.to}>{props.children}</a>
  );
};

module.exports = Link;