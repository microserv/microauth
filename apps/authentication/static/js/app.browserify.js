var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var TestApp = React.createClass({
  render: function() {
    return (
      <div className="page">
        <h1>Oh shit! React works!</h1>
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(TestApp, null),
  document.getElementById('content')
);