'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VisuallyHiddenText = require('../../../VisuallyHiddenText');

var _VisuallyHiddenText2 = _interopRequireDefault(_VisuallyHiddenText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'p',
    null,
    'No Screen Reader text is added on this page, and should be blank other than this line.',
    _react2.default.createElement(_VisuallyHiddenText2.default, null)
  );
};