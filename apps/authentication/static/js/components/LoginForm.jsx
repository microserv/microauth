var $ = require('jquery');
var React = require('react');

var Input = require('./Input.jsx');

var LoginForm = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: ''
    };
  },

  isActive: function() {
    return (this.state.selected)
  },

  handleEmailChange: function(event) {
    this.setState({ email: event.target.value });
  },

  handlePasswordChange: function(event) {
    this.setState({ password: event.target.value });
  },

  renderButtonRipple: function() {
    var $ripples = $('.ripples');

    $ripples.on('click.Ripples', function(e) {

    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

    });

    $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
      $(this).removeClass('is-active');
    });
  },

  componentDidMount: function() {
    this.renderButtonRipple();
  },

  render: function () {
    return (
      <form>
        <div className="group">
          <Input type="text" name="email"
                 value={this.state.email} onChange={this.handleEmailChange} />
          <span className="highlight" />
          <span className="bar" />
          <label>Email</label>
        </div>
        <div className="group">
          <Input type="password" name="password"
                 value={this.state.password} onChange={this.handlePasswordChange} />
          <span className="highlight" />
          <span className="bar" />
          <label>Password</label>
        </div>
        <button type="button" className="button buttonBlue" onClick={this.handleClickSubmit} >
          Log in
          <div className="ripples buttonRipples"><span className="ripplesCircle" /></div>
        </button>
      </form>
    )
  }
})

module.exports = LoginForm;