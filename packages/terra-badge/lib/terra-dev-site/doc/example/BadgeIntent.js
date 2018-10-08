'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Badge = require('terra-badge/lib/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BadgeIntent = function BadgeIntent() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Badge2.default, { text: 'Default' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { intent: 'primary', text: 'Primary' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { intent: 'secondary', text: 'Secondary' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { intent: 'positive', text: 'Positive' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { intent: 'negative', text: 'Negative' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { intent: 'warning', text: 'Warning' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { intent: 'info', text: 'Info' })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = BadgeIntent;