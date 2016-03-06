var $ = require('jquery');
var React = require('react');

var RegisterForm = require('./RegisterForm.jsx');

var Register = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      passwordRepeat:''
    };
  },

  handleEmailChange: function(event) {
    this.setState({ email: event.target.value });
  },

  handlePasswordChange: function(event) {
    this.setState({ password: event.target.value })
  },

  handlePasswordRepeatChange: function(event) {
    this.setState({ passwordRepeat: event.target.value })
  },

  handleSubmit: function() {
    var state = this.state;

    this.props.prepareAjax();

    function handleSuccess(response) {
      console.log(response);
    }

    function handleError(xhr, response, status) {
      console.log(xhr, response, status);
    }

    $.ajax({
      url: '/api/users/',
      method: 'POST',
      data: {
        username: state.email,
        email: state.email,
        password: state.password
      },
      success: handleSuccess,
      error: handleError
    });
  },

  render: function () {
    return (
      <div>
        <hgroup>
            <h1>Register</h1>
          </hgroup>
        <RegisterForm
          username={this.state.email}
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