'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _terraVisuallyHiddenText = require('terra-visually-hidden-text');

var _terraVisuallyHiddenText2 = _interopRequireDefault(_terraVisuallyHiddenText);

var _CardModule = require('./Card.module.scss');

var _CardModule2 = _interopRequireDefault(_CardModule);

var _CardBody = require('./CardBody');

var _CardBody2 = _interopRequireDefault(_CardBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var cx = _bind2.default.bind(_CardModule2.default);

var CardVariants = {
  DEFAULT: 'default',
  RAISED: 'raised'
};

var propTypes = {
  /**
   * Child Nodes
   */
  children: _propTypes2.default.node,
  /**
   * Sets the card variant to change the style for different use cases. One of `default`,  `raised`.
   */
  variant: _propTypes2.default.oneOf([].concat(_toConsumableArray(Object.values(CardVariants)))),
  /**
   * Text that describes the badge to a screen reader. Use this
   * if more information is needed to accurately describe
   * this card to screen reader users.
   */
  visuallyHiddenText: _propTypes2.default.string
};

var defaultProps = {
  variant: CardVariants.DEFAULT
};

var Card = function Card(_ref) {
  var children = _ref.children,
      variant = _ref.variant,
      visuallyHiddenText = _ref.visuallyHiddenText,
      customProps = _objectWithoutProperties(_ref, ['children', 'variant', 'visuallyHiddenText']);

  var cardClassNames = cx(['card', variant, customProps.className]);

  var visuallyHiddenTextContent = visuallyHiddenText ? _react2.default.createElement(_terraVisuallyHiddenText2.default, { text: visuallyHiddenText }) : null;

  return _react2.default.createElement(
    'article',
    _extends({}, customProps, { className: cardClassNames }),
    visuallyHiddenTextContent,
    children
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
Card.Body = _CardBody2.default;
exports.default = Card;