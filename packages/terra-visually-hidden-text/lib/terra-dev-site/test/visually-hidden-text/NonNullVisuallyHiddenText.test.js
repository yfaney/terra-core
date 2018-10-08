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
    'Focus in this section to hear screen reader only text',
    _react2.default.createElement(_VisuallyHiddenText2.default, { tabIndex: '0', text: 'This is read by a screen reader' })
  );
};