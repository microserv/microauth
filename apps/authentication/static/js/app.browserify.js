var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/App.jsx');

var TestApp = React.createClass({
  render: function() {
    return (
      <div className="page">
        <App />
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(TestApp, null),
  document.getElementById('content')
);
