'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BadgeSize = exports.BadgeIntent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _BadgeModule = require('./Badge.module.scss');

var _BadgeModule2 = _interopRequireDefault(_BadgeModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_BadgeModule2.default);

var BadgeIntent = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  WARNING: 'warning',
  POSITIVE: 'positive',
  NEGATIVE: 'negative'
};

var BadgeSize = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge'
};

var propTypes = {
  /**
   * Child Nodes.
   */
  children: _propTypes2.default.node,
  /**
   * An optional icon. Nested inline with the text when provided.
   */
  icon: _propTypes2.default.element,
  /**
   * Sets the badge color scheme. One of `default`, `primary`, `secondary`, `positive`, `negative`, `warning`, `info`.
   */
  intent: _propTypes2.default.oneOf(['default', 'primary', 'secondary', 'info', 'warning', 'positive', 'negative']),
  /**
   * Reverses the position of the icon and text.
   */
  isReversed: _propTypes2.default.bool,
  /**
   * Sets the badge size. One of `tiny`, `small`, `medium`, `large`, `huge`.
   */
  size: _propTypes2.default.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Sets the badge text.
   */
  text: _propTypes2.default.string
};

var defaultProps = {
  children: null,
  icon: null,
  intent: 'default',
  isReversed: false,
  size: 'small',
  text: null
};

var Badge = function Badge(_ref) {
  var size = _ref.size,
      intent = _ref.intent,
      isReversed = _ref.isReversed,
      text = _ref.text,
      icon = _ref.icon,
      customProps = _objectWithoutProperties(_ref, ['size', 'intent', 'isReversed', 'text', 'icon']);

  var badgeClassNames = cx('badge', size, intent, customProps.className);

  var textContent = text ? _react2.default.createElement(
    'span',
    { className: _BadgeModule2.default.text },
    text
  ) : null;
  var content = isReversed ? [textContent, icon, customProps.children] : [icon, textContent, customProps.children];
  return _react2.default.createElement.apply(_react2.default, ['span', _extends({}, customProps, { className: badgeClassNames })].concat(content));
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

exports.default = Badge;
exports.BadgeIntent = BadgeIntent;
exports.BadgeSize = BadgeSize;