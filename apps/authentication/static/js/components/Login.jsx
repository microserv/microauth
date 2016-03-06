var React = require('react');

var LoginForm = require('./LoginForm.jsx');

var Login = React.createClass({
  render: function () {
    return (
      <div>
        <hgroup>
          <h1>Sign in</h1>
        </hgroup>
        <LoginForm />
      </div>
    )
  }
})

module.exports = Login;