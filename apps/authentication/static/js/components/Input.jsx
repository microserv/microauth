var React = require('react');

var LoginForm = React.createClass({
  getInitialState: function() {
    return {
      className: ''
    };
  },

  updateFocusState: function(elem) {
    if (elem.value) {
      this.setState({ className: 'used' });
    } else {
      this.setState({ className: '' });
    }
  },

  handleFocus: function(event) {
    this.updateFocusState(event.target);
  },

  handleChange: function(event) {
    this.props.onChange(event);
    this.updateFocusState(event.target);
  },

  render: function () {
    return (
      <input type={this.props.type} name={this.props.name} className={this.state.className}
             value={this.props.value} onChange={this.handleChange}
             onFocus={this.handleFocus} onBlur={this.handleFocus} />
    )
  }
});

module.exports = LoginForm;