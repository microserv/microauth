var $ = require('jquery');
var React = require('react');

var LoginForm = require('./LoginForm.jsx');

var data = {};

var Login = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      response: ''
    };
  },

  componentDidMount: function() {
    // this.setState({ response: JSON.stringify(data) })
  },

  handleEmailChange: function(event) {
    this.setState({ email: event.target.value });
  },

  handlePasswordChange: function(event) {
    this.setState({ password: event.target.value });
  },

  handleSubmit: function() {
    var state = this.state;
    var that = this;

    if (!this.props.clientId || !this.props.clientSecret) {
      console.error('Cannot login without client id or client secret');
    }

    this.props.prepareAjax(this.props.clientId, this.props.clientSecret);

    function handleSuccess(response) {
      console.log('success:', response);
      that.setState({ response: response });
      that.props.updateAuthentication(response);
    }

    function handleError(xhr, response, status) {
      console.log('error:', xhr, response, status);
      that.setState({ response: xhr });
    }


    $.ajax({
      url: '/oauth2/token/',
      method: 'POST',
      data: {
        grant_type: 'password',
        username: state.email,
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
          <h1>Sign in</h1>
        </hgroup>
        <LoginForm
          email={this.state.email}
          handleEmailChange={this.handleEmailChange}
          password={this.state.password}
          handlePasswordChange={this.handlePasswordChange}
          handleClickSubmit={this.handleSubmit} />
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

module.exports = Login;