'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Badge = require('../../../Badge');

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BadgeIntent = function BadgeIntent() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Badge2.default, { text: 'Default', id: 'default-badge' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { intent: 'primary', text: 'Primary', id: 'primary-badge' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { intent: 'secondary', text: 'Secondary', id: 'secondary-badge' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { intent: 'positive', text: 'Positive', id: 'positive-badge' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { intent: 'negative', text: 'Negative', id: 'negative-badge' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { intent: 'warning', text: 'Warning', id: 'warning-badge' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { intent: 'info', text: 'Info', id: 'info-badge' })
  );
};

exports.default = BadgeIntent;