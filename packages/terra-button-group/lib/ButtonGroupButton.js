'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _ButtonGroupModule = require('./ButtonGroup.module.scss');

var _ButtonGroupModule2 = _interopRequireDefault(_ButtonGroupModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_ButtonGroupModule2.default);

var KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  TAB: 9
};

var propTypes = {
  /**
   * An optional icon. If an icon is provided, it will be an icon only button and the provided text is set as the aria-label for accessibility.
   */
  icon: _propTypes2.default.element,
  /**
   * Whether or not the button should be disabled.
   */
  isDisabled: _propTypes2.default.bool,
  /**
   * Callback function triggered when button loses focus.
   */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function triggered when clicked.
   */
  onClick: _propTypes2.default.func,
  /**
   * Callback function triggered when button gains focus.
   */
  onFocus: _propTypes2.default.func,
  /**
   * Callback function triggered when key is pressed.
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * Callback function triggered when key is released.
   */
  onKeyUp: _propTypes2.default.func,
  /**
   * Sets the button text. If an icon is provided, it will be an icon only button and this text is set as the aria-label for accessibility.
   */
  text: _propTypes2.default.string.isRequired
};

var defaultProps = {
  isDisabled: false
};

var ButtonGroupButton = function (_React$Component) {
  _inherits(ButtonGroupButton, _React$Component);

  function ButtonGroupButton(props) {
    _classCallCheck(this, ButtonGroupButton);

    var _this = _possibleConstructorReturn(this, (ButtonGroupButton.__proto__ || Object.getPrototypeOf(ButtonGroupButton)).call(this, props));

    _this.state = { focused: false };
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.handleOnBlur = _this.handleOnBlur.bind(_this);
    return _this;
  }

  _createClass(ButtonGroupButton, [{
    key: 'handleOnBlur',
    value: function handleOnBlur(event) {
      this.setState({ focused: false });

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      // Add focus styles for keyboard navigation.
      // The onFocus event doesn't get triggered in some browsers, hence, the focus state needs to be managed here.
      if (event.nativeEvent.keyCode === KEYCODES.SPACE || event.nativeEvent.keyCode === KEYCODES.ENTER) {
        this.setState({ focused: true });
      }

      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      // Apply focus styles for keyboard navigation.
      // The onFocus event doesn't get triggered in some browsers, hence, the focus state needs to be managed here.
      if (event.nativeEvent.keyCode === KEYCODES.TAB) {
        this.setState({ focused: true });
      }

      if (this.props.onKeyUp) {
        this.props.onKeyUp(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          isDisabled = _props.isDisabled,
          customProps = _objectWithoutProperties(_props, ['icon', 'isDisabled']);

      var buttonClassName = cx(['button-group-button', { 'is-disabled': isDisabled }, { 'is-focused': this.state.focused }, customProps.className]);

      return _react2.default.createElement(_terraButton2.default, _extends({}, customProps, {
        icon: icon,
        isDisabled: isDisabled,
        isIconOnly: icon != null,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onBlur: this.handleOnBlur,
        variant: _terraButton2.default.Opts.Variants.NEUTRAL,
        className: buttonClassName
      }));
    }
  }]);

  return ButtonGroupButton;
}(_react2.default.Component);

ButtonGroupButton.propTypes = propTypes;
ButtonGroupButton.defaultProps = defaultProps;

exports.default = ButtonGroupButton;