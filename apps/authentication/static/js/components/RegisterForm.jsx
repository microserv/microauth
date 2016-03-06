var $ = require('jquery');
var React = require('react');

var Input = require('./Input.jsx');

var RegisterForm = React.createClass({
  componentDidMount: function() {
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

  render: function() {
    return (
      <div>
        <form>
          <div className="group">
            <Input type="email" name="email"
                   value={this.props.email} onChange={this.props.handleEmailChange} />
            <span className="highlight" />
            <span className="bar" />
            <label>Email</label>
          </div>
          <div className="group">
            <Input type="password" name="password"
                   value={this.props.password} onChange={this.props.handlePasswordChange} />
            <span className="highlight" />
            <span className="bar" />
            <label>Password</label>
          </div>
          <div className="group">
            <Input type="password" name="passwordRepeat"
                   value={this.props.passwordRepeat} onChange={this.props.handlePasswordRepeatChange} />
            <span className="highlight" />
            <span className="bar" />
            <label>Repeat password</label>
          </div>
          <button type="button" className="button buttonBlue" onClick={this.props.handleSubmit}>
            Log in
            <div className="ripples buttonRipples"><span className="ripplesCircle" /></div>
          </button>
        </form>
      </div>
    );
  }
});

module.exports = RegisterForm;