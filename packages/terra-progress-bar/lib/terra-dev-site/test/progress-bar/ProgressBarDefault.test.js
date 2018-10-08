'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProgressBar = require('../../../ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBarDefault = function ProgressBarDefault() {
  return _react2.default.createElement(_ProgressBar2.default, { id: 'progressbar', valueText: '15%', value: 15, color: 'yellow' });
};

exports.default = ProgressBarDefault;