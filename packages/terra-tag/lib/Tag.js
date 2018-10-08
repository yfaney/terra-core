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

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _TagModule = require('./Tag.module.scss');

var _TagModule2 = _interopRequireDefault(_TagModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_TagModule2.default);

var KEYCODES = {
  TAB: 9
};

var propTypes = {
  /**
   * Sets the href. When set will render the component as an anchor tag.
   */
  href: _propTypes2.default.string,
  /**
   * An optional icon.
   */
  icon: _propTypes2.default.element,
  /**
   * Callback function triggered when clicked.
   */
  onClick: _propTypes2.default.func,
  /**
   * Callback function triggered when tag loses focus.
   */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function triggered when tag gains focus.
   */
  onFocus: _propTypes2.default.func,
  /**
   * Callback function triggered when key is released.
   */
  onKeyUp: _propTypes2.default.func,
  /**
   * Sets the tag text.
   */
  text: _propTypes2.default.string.isRequired
};

var Tag = function (_React$Component) {
  _inherits(Tag, _React$Component);

  function Tag(props) {
    _classCallCheck(this, Tag);

    var _this = _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

    _this.state = { focused: false };
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.handleOnBlur = _this.handleOnBlur.bind(_this);
    return _this;
  }

  _createClass(Tag, [{
    key: 'handleOnBlur',
    value: function handleOnBlur(event) {
      this.setState({ focused: false });

      if (this.props.onBlur) {
        this.props.onBlur(event);
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
          icon = _props.icon,
          text = _props.text,
          href = _props.href,
          onClick = _props.onClick,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onKeyUp = _props.onKeyUp,
          customProps = _objectWithoutProperties(_props, ['icon', 'text', 'href', 'onClick', 'onBlur', 'onFocus', 'onKeyUp']);

      var tagClasses = cx(['tag', { 'is-focused': this.state.focused }, { 'is-interactive': href || onClick }, customProps.className]);

      var iconClass = cx('icon');

      var tagIcon = icon ? _react2.default.createElement(
        'span',
        { className: iconClass },
        icon
      ) : null;
      var isClickable = href || onClick;
      var clickableComponent = href ? 'a' : 'button';
      var ComponentType = isClickable ? clickableComponent : 'span';

      return _react2.default.createElement(
        ComponentType,
        _extends({}, customProps, {
          className: tagClasses,
          onKeyUp: this.handleKeyUp,
          onBlur: this.handleOnBlur,
          onClick: onClick,
          onFocus: onFocus,
          href: href
        }),
        tagIcon,
        text
      );
    }
  }]);

  return Tag;
}(_react2.default.Component);

Tag.propTypes = propTypes;
exports.default = Tag;