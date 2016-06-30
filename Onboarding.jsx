var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="onboarding-flow">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
});
