var React = require('react');

var LoginForm = React.createClass({
  handleFocus: function(event, target) {
    if (event.target.value) {
      event.target.className = 'used';
    } else {
      event.target.className = '';
    }
  },

  render: function () {
    return (
      <input type={this.props.type} name={this.props.name} className={this.props.className}
             value={this.props.value} onChange={this.props.onChange}
             onFocus={this.handleFocus} onBlur={this.handleFocus} />
    )
  }
})

module.exports = LoginForm;