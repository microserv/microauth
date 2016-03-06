var React = require('react');

var Login = require('./Login.jsx');
var Register = require('./Register.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <div className="split-page left">
          <hgroup>
            <h1>Sign in</h1>
            <Login />
          </hgroup>
        </div>
        <div className="split-page right">
          <hgroup>
            <h1>Register</h1>
            <Register />
          </hgroup>
        </div>
        <div className="clearfix"></div>
      </div>
    )
  }
});

module.exports = App;