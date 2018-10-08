'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProgressBar = require('../../../ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBarColor = function ProgressBarColor() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_ProgressBar2.default, { id: 'progressbarWithNamedColor', valueText: '5%', value: 5, max: 10, color: 'Orange' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_ProgressBar2.default, { id: 'progressbarWithHexColor', valueText: '7.5%', value: 7.5, max: 10, color: '#8ccc62' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_ProgressBar2.default, { id: 'progressbarWithRGBColor', valueText: '10%', value: 10, max: 10, color: 'rgb(255, 0, 0)' })
  );
};

exports.default = ProgressBarColor;