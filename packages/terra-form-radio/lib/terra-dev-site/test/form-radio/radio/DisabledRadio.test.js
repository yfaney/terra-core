'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Radio = require('../../../../Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Radio2.default, { id: 'disabled', labelText: 'Disabled Radio', disabled: true }),
    _react2.default.createElement(_Radio2.default, { id: 'disabledchecked', labelText: 'Disabled and Checked Radio', defaultChecked: true, disabled: true })
  );
};