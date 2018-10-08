'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Textarea = require('../../../Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textarea = function textarea() {
  return _react2.default.createElement(_Textarea2.default, {
    name: 'job_experience',
    defaultValue: '',
    required: true
  });
};

exports.default = textarea;