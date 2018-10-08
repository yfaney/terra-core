'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('../../../Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaceholderInput = function PlaceholderInput() {
  return _react2.default.createElement(_Input2.default, { 'aria-label': 'placeholder form input', id: 'form-input-placeholder', placeholder: 'placeholder' });
};

exports.default = PlaceholderInput;