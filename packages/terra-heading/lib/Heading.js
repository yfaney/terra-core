'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadingWeight = exports.HeadingSize = exports.HeadingLevel = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _HeadingModule = require('./Heading.module.scss');

var _HeadingModule2 = _interopRequireDefault(_HeadingModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_HeadingModule2.default);

/* eslint-disable quote-props */
var HeadingLevel = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6
};

var HeadingSize = {
  MINI: 'mini',
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge'
};

var HeadingWeight = {
  '200': 200,
  '400': 400,
  '700': 700
};
/* eslint-enable quote-props */

var propTypes = {
  /**
   * Child nodes
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`.
   */
  level: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  /**
   * The color of the text. Accepts any color value parseable by CSS.
   */
  color: _propTypes2.default.string,
  /**
   * Sets the text to display in italics.
   */
  isItalic: _propTypes2.default.bool,
  /**
   * Sets the text to appear visually hidden. The text will still be available to screen readers.
   */
  isVisuallyHidden: _propTypes2.default.bool,
  /**
   * Sets the text size. One of `mini`, `tiny`, `small`, `medium`, `large`, `huge`.
   */
  size: _propTypes2.default.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Sets the text size. One of `200`, `400`, `700`.
   */
  weight: _propTypes2.default.oneOf([200, 400, 700])
};

var defaultProps = {
  color: 'inherit',
  isItalic: false,
  isVisuallyHidden: false,
  weight: 700
};

var Heading = function Heading(_ref) {
  var level = _ref.level,
      color = _ref.color,
      children = _ref.children,
      isVisuallyHidden = _ref.isVisuallyHidden,
      isItalic = _ref.isItalic,
      size = _ref.size,
      weight = _ref.weight,
      customProps = _objectWithoutProperties(_ref, ['level', 'color', 'children', 'isVisuallyHidden', 'isItalic', 'size', 'weight']);

  var attributes = _extends({}, customProps);
  var TextClassNames = cx(['heading', { italic: isItalic }, { 'visually-hidden': isVisuallyHidden }, _defineProperty({}, 'level-' + level, level), _defineProperty({}, 'size-' + size, size), _defineProperty({}, 'weight-' + weight, weight), attributes.className]);

  var headingStyles = {
    color: color
  };

  var Element = 'h' + level;

  return _react2.default.createElement(
    Element,
    _extends({}, attributes, { style: _extends({}, headingStyles, customProps.style), className: TextClassNames }),
    children
  );
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

exports.default = Heading;
exports.HeadingLevel = HeadingLevel;
exports.HeadingSize = HeadingSize;
exports.HeadingWeight = HeadingWeight;