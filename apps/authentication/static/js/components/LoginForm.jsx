var React = require('react');

var LoginForm = React.createClass({
  render: function () {
    return (
      <form>
        <input type="text" name="email" placeholder="your.email@example.org" />
        <input type="password" name="password" placeholder="password" />
      </form>
    )
  }
})

module.exports = LoginForm;