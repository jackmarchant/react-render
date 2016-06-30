var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="component">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
});
