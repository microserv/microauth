var $ = require('jquery');
var React = require('react');

var Login = require('./Login.jsx');
var Register = require('./Register.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {
      hideLogin: false,
      hideRegistration: true,
      hideAuth: true,
      auth: {
        expires_in: '',
        refresh_token: '',
        scope: '',
        access_token: '',
        token_type: ''
      },
      oauth2: {
        id: '',
        secret: ''
      }
    };
  },

  switchView: function() {
    this.setState({
      hideLogin: !this.state.hideLogin,
      hideRegistration: !this.state.hideRegistration
    });
  },

  toggleShowAuth: function() {
    this.setState({ hideAuth: !this.state.hideAuth });
  },

  updateAuthentication: function(authentication) {
    this.setState({ auth: authentication });
    this.setState({ hideAuth: false });
  },

  prepareAjax: function prepareAjax(_username, _password) {
    var username = _username ? _username : '';
    var password = _password ? _password : '';

    function getCookie(name) {
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
    }

    var csrftoken = getCookie('csrftoken');

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }

            if (username && password) {
              var header = 'Basic ' + btoa(username + ':' + password);
              xhr.setRequestHeader('Authorization', header);
            }
        }
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
          <Login prepareAjax={this.prepareAjax}
            clientId={this.state.oauth2.id}
            clientSecret={this.state.oauth2.secret}
            updateAuthentication={this.updateAuthentication} />
        </div>
        <div className="" hidden={this.state.hideRegistration}>
          <Register prepareAjax={this.prepareAjax} />
        </div>
        <div className="clearfix"></div>
        <h3 onClick={this.toggleShowAuth}>
          OAuth2 information
        </h3>
        <div>
          <pre hidden={this.state.hideAuth}>
            {JSON.stringify(this.state.auth, null, 2)}
          </pre>
        </div>
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