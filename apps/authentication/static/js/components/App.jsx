var React = require('react');

var Login = require('./Login.jsx');
var Register = require('./Register.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <hgroup>
          <h1>MicroAuth</h1>
          <h3>Authentication service for microserv</h3>
        </hgroup>
        <div className="split-page left">
          <Login />
        </div>
        <div className="split-page right">
          <Register />
        </div>
        <div className="clearfix"></div>
      </div>
    )
  }
});

module.exports = App;