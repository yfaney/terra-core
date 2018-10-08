'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProgressBar = require('terra-progress-bar/lib/ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBarGradient = function ProgressBarGradient() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_ProgressBar2.default, { valueText: '3%', value: 3, max: 10, color: 'green', hasGradient: true }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_ProgressBar2.default, { valueText: '5%', value: 5, max: 10, color: 'Orange', hasGradient: true }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_ProgressBar2.default, { valueText: '8%', value: 8, max: 10, color: 'blue', hasGradient: true })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = ProgressBarGradient;