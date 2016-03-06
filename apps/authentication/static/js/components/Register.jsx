var $ = require('jquery');
var React = require('react');

var RegisterForm = require('./RegisterForm.jsx');

var Register = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      passwordRepeat:'',
      response: ''
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
    var that = this;

    this.props.prepareAjax();

    function handleSuccess(response) {
      console.log(response);
      that.setState({ response: response });
    }

    function handleError(xhr, response, status) {
      console.log(xhr, response, status);
      that.setState({ response: xhr });
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
          handleSubmit={this.handleSubmit} />
        <div hidden={!this.state.response || !this.props.debug}>
          <h3>Response</h3>
          <pre>
            {JSON.stringify(this.state.response, null, 2)}
          </pre>
        </div>
      </div>
    )
  }
})

module.exports = Register;