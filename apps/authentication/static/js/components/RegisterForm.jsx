var React = require('react');

var RegisterForm = React.createClass({
  render: function() {
    return (
      <div>
        <form>
          <input type="text" name="username" placeholder="username" readOnly="true" value={this.props.username} />
          <input type="email" name="email" placeholder="your.email@example.org"
                 value={this.props.email} onChange={this.props.handleEmailChange} />
          <input type="password" name="password" placeholder="Password"
                 value={this.props.password} onChange={this.props.handlePasswordChange} />
          <input type="password" name="passwordRepeat" placeholder="Repeat password"
                 value={this.props.passwordRepeat} onChange={this.props.handlePasswordRepeatChange} />
          <input type="submit" onClick={this.props.handleSubmit} />
        </form>
      </div>
    );
  }
});

module.exports = RegisterForm;