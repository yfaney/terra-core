'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextWeight = exports.TextFontSize = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _TextModule = require('./Text.module.scss');

var _TextModule2 = _interopRequireDefault(_TextModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_TextModule2.default);

/* eslint-disable quote-props */
var TextFontSize = {
  '10': 10,
  '12': 12,
  '14': 14,
  '16': 16,
  '18': 18,
  '20': 20,
  '24': 24,
  '32': 32,
  '100': 100
};

var TextWeight = {
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
   * Sets the text size. One of `10`, `12`, `14`, `16`, `18`, `20`, `24`, `32`, `100`.
   */
  fontSize: _propTypes2.default.oneOf([10, 12, 14, 16, 18, 20, 24, 32, 100]),
  /**
   * Sets the text size. One of `200`, `400`, `700`.
   */
  weight: _propTypes2.default.oneOf([200, 400, 700])
};

var defaultProps = {
  color: 'inherit',
  isItalic: false,
  isVisuallyHidden: false
};

var Text = function Text(_ref) {
  var color = _ref.color,
      children = _ref.children,
      isVisuallyHidden = _ref.isVisuallyHidden,
      isItalic = _ref.isItalic,
      fontSize = _ref.fontSize,
      weight = _ref.weight,
      customProps = _objectWithoutProperties(_ref, ['color', 'children', 'isVisuallyHidden', 'isItalic', 'fontSize', 'weight']);

  var attributes = _extends({}, customProps);
  var TextClassNames = cx(['text', { italic: isItalic }, { 'visually-hidden': isVisuallyHidden }, _defineProperty({}, 'font-size-' + fontSize, fontSize), _defineProperty({}, 'font-weight-' + weight, weight), attributes.className]);

  var textStyles = {
    color: color
  };

  return _react2.default.createElement(
    'span',
    _extends({}, attributes, { style: _extends({}, textStyles, customProps.style), className: TextClassNames }),
    children
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

exports.default = Text;
exports.TextFontSize = TextFontSize;
exports.TextWeight = TextWeight;