var React = require('react');

var LoginForm = require('./LoginForm.jsx');

var Login = React.createClass({
  render: function () {
    return (
      <div>
        <p>
          Welcome back, please log in.
        </p>
        <LoginForm />
      </div>
    )
  }
})

module.exports = Login;