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

var _VisuallyHiddenTextModule = require('./VisuallyHiddenText.module.scss');

var _VisuallyHiddenTextModule2 = _interopRequireDefault(_VisuallyHiddenTextModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_VisuallyHiddenTextModule2.default);

var propTypes = {
  /**
   * Text to be read to the screen reader
   */
  text: _propTypes2.default.string
};

var defaultProps = {
  text: undefined
};

var VisuallyHiddenText = function VisuallyHiddenText(_ref) {
  var text = _ref.text,
      customProps = _objectWithoutProperties(_ref, ['text']);

  var VisuallyHiddenTextClassNames = cx(['visually-hidden-text', customProps.className]);

  return _react2.default.createElement(
    'span',
    _extends({}, customProps, { className: VisuallyHiddenTextClassNames }),
    text
  );
};

VisuallyHiddenText.propTypes = propTypes;
VisuallyHiddenText.defaultProps = defaultProps;

exports.default = VisuallyHiddenText;