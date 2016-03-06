var React = require('react');

var LoginForm = require('./LoginForm.jsx');

var Login = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: ''
    };
  },

  handleEmailChange: function(event) {
    this.setState({ email: event.target.value });
  },

  handlePasswordChange: function(event) {
    this.setState({ password: event.target.value });
  },

  render: function () {
    return (
      <div>
        <hgroup>
          <h1>Sign in</h1>
        </hgroup>
        <LoginForm
          email={this.state.email}
          handleEmailChange={this.handleEmailChange}
          password={this.state.password}
          handlePasswordChange={this.handlePasswordChange} />
      </div>
    )
  }
})

module.exports = Login;