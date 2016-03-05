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

  getCookie: function getCookie(name) {
    // https://docs.djangoproject.com/en/stable/ref/csrf/#ajax

    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = $.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  },

  prepareAjax: function prepareAjax() {
    var csrftoken = this.getCookie('csrftoken');

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });
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
    var state = this.state;

    this.prepareAjax();

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
        username: state.username,
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