var $ = require('jquery');
var React = require('react');

var RegisterForm = require('./RegisterForm.jsx');

var Register = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      email: '',
      password: '',
      passwordRepeat:''
    };
  },

  handleEmailChange: function(event) {
    this.setState({
      email: event.target.value,
      username: event.target.value
    });
  },

  handlePasswordChange: function(event) {
    this.setState({ password: event.target.value })
  },

  handlePasswordRepeatChange: function(event) {
    this.setState({ passwordRepeat: event.target.value })
  },

  handleSubmit: function() {
    $.ajax({
      url: '/api/'
    })
  },

  render: function () {
    return (
      <div>
        <p>
          Welcome.
        </p>
        <RegisterForm
          username={this.state.username}
          email={this.state.email}
          handleEmailChange={this.handleEmailChange}
          password={this.state.password}
          handlePasswordChange={this.handlePasswordChange}
          passwordRepeat={this.state.passwordRepeat}
          handlePasswordRepeatChange={this.handlePasswordRepeatChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
})

module.exports = Register;