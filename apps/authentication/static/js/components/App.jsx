var React = require('react');

var Login = require('./Login.jsx');
var Register = require('./Register.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {
      hideLogin: false,
      hideRegistration: true
    };
  },

  switchView: function() {
    this.setState({
      hideLogin: !this.state.hideLogin,
      hideRegistration: !this.state.hideRegistration
    });
  },

  render: function () {
    return (
      <div>
        <hgroup>
          <h1>MicroAuth</h1>
          <h3>Authentication service for microserv</h3>
        </hgroup>
        <div className="" hidden={this.state.hideLogin}>
          <Login />
        </div>
        <div className="" hidden={this.state.hideRegistration}>
          <Register />
        </div>
        <div className="clearfix"></div>
        <hgroup>
          <h3 onClick={this.switchView} hidden={this.state.hideLogin}>
            Need an account? Click here to sign up.
          </h3>
          <h3 onClick={this.switchView} hidden={this.state.hideRegistration}>
            Already have an account? Click here to log in.
          </h3>
        </hgroup>
      </div>
    )
  }
});

module.exports = App;