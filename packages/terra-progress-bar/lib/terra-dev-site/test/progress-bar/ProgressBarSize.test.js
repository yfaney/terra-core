'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProgressBar = require('../../../ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBarSize = function ProgressBarSize() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_ProgressBar2.default, { id: 'progressbarTiny', heightSize: 'tiny', valueText: '15%', value: 15, color: '#8ccc62' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_ProgressBar2.default, { id: 'progressbarSmall', heightSize: 'small', valueText: '30%', value: 30, color: '#8ccc62' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_ProgressBar2.default, { id: 'progressbarMedium', heightSize: 'medium', valueText: '45%', value: 45, color: '#8ccc62' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_ProgressBar2.default, { id: 'progressbarLarge', heightSize: 'large', valueText: '60%', value: 60, color: '#8ccc62' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_ProgressBar2.default, { id: 'progressbarHuge', heightSize: 'huge', valueText: '75%', value: 75, color: '#8ccc62' })
  );
};

exports.default = ProgressBarSize;