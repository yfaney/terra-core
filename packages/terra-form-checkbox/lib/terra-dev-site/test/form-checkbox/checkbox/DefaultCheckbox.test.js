'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('../../../../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkbox = function checkbox() {
  return _react2.default.createElement(_Checkbox2.default, { id: 'default', labelText: 'Default Checkbox' });
};

exports.default = checkbox;