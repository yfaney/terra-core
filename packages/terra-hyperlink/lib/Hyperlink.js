'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HyperlinkVariants = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _HyperlinkModule = require('./Hyperlink.module.scss');

var _HyperlinkModule2 = _interopRequireDefault(_HyperlinkModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_HyperlinkModule2.default);

var KEYCODES = {
  ENTER: 13,
  TAB: 9
};

var variants = {
  DEFAULT: 'default',
  EXTERNAL: 'external',
  IMAGE: 'image',
  VIDEO: 'video',
  AUDIO: 'audio',
  DOCUMENT: 'document'
};

var propTypes = {
  /**
   * The content to display inside link.
   */
  children: _propTypes2.default.node,
  /**
   * Sets the href of the link.
   */
  href: _propTypes2.default.string,
  /**
   * Whether or not the link should be disabled.
   */
  isDisabled: _propTypes2.default.bool,
  /**
   * Whether or not the link should display an underline by default. Will still display an underline on hover and focus.
   */
  isUnderlineHidden: _propTypes2.default.bool,
  /**
   * Callback function triggered when clicked.
   */
  onClick: _propTypes2.default.func,
  /**
   * Callback function triggered when hyperlink loses focus.
   */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function triggered when hyperlink gains focus.
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
   * Sets the hyperlink variant. One of `default`, `external`, `image`, `video`, `audio`, `document`.
   */
  variant: _propTypes2.default.oneOf(['default', 'external', 'image', 'video', 'audio', 'document'])
};

var defaultProps = {
  isDisabled: false,
  variant: variants.DEFAULT
};

var Hyperlink = function (_React$Component) {
  _inherits(Hyperlink, _React$Component);

  function Hyperlink(props) {
    _classCallCheck(this, Hyperlink);

    var _this = _possibleConstructorReturn(this, (Hyperlink.__proto__ || Object.getPrototypeOf(Hyperlink)).call(this, props));

    _this.state = { active: false, focused: false };
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.handleOnBlur = _this.handleOnBlur.bind(_this);
    return _this;
  }

  _createClass(Hyperlink, [{
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
      // Add focus styles for keyboard navigation
      if (event.nativeEvent.keyCode === KEYCODES.ENTER) {
        this.setState({ focused: true });
      }

      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      // Apply focus styles for keyboard navigation
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
          children = _props.children,
          isDisabled = _props.isDisabled,
          isUnderlineHidden = _props.isUnderlineHidden,
          variant = _props.variant,
          href = _props.href,
          onClick = _props.onClick,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onKeyDown = _props.onKeyDown,
          onKeyUp = _props.onKeyUp,
          customProps = _objectWithoutProperties(_props, ['children', 'isDisabled', 'isUnderlineHidden', 'variant', 'href', 'onClick', 'onBlur', 'onFocus', 'onKeyDown', 'onKeyUp']);

      var hyperlinkClasses = cx(['hyperlink', variant, { 'is-disabled': isDisabled }, { 'is-underline-hidden': isUnderlineHidden }, { 'is-active': this.state.active }, { 'is-focused': this.state.focused }, customProps.className]);

      var ComponentType = isDisabled ? 'span' : 'a';

      var target = customProps.target; // Defaults to undefined if not set

      var rel = customProps.rel; // Defaults to undefined if not set

      // If variant is set to external, we'll add target="_blank" and rel="noopener noreferrer"
      // unless user passes their own target or rel attribute

      if (!customProps.target && variant === 'external') {
        target = '_blank';
      }

      if (!customProps.rel && variant === 'external') {
        rel = 'noopener noreferrer';
      }

      return _react2.default.createElement(
        ComponentType,
        _extends({}, customProps, {
          className: hyperlinkClasses,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onBlur: this.handleOnBlur,
          onClick: onClick,
          onFocus: onFocus,
          href: isDisabled ? null : href,
          target: target,
          rel: rel
        }),
        children
      );
    }
  }]);

  return Hyperlink;
}(_react2.default.Component);

Hyperlink.propTypes = propTypes;
Hyperlink.defaultProps = defaultProps;

exports.HyperlinkVariants = variants;
exports.default = Hyperlink;