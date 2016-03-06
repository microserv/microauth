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

  prepareAjax: function prepareAjax() {
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
          <Login prepareAjax={this.prepareAjax} />
        </div>
        <div className="" hidden={this.state.hideRegistration}>
          <Register prepareAjax={this.prepareAjax} />
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