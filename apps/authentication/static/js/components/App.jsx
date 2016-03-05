var React = require('react');

var Login = require('./Login.jsx');
var Register = require('./Register.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Login />
        <hr />
        <Register />
      </div>
    )
  }
});

module.exports = App;