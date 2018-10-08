'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Badge = require('../../../Badge');

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = _react2.default.createElement(
  'svg',
  { className: 'terra-Icon', height: '4em', width: '4em', viewBox: '0 0 48 48' },
  _react2.default.createElement('path', { d: 'M24 0h-.1C10.7 0 0 10.8 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24S37.3 0 24 0zm-4 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z', fill: '#FFF' })
);

var BadgeIcon = function BadgeIcon() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Badge2.default, { icon: Icon, text: 'icon', id: 'text-right' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { icon: Icon, text: 'icon', isReversed: true, id: 'text-left' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { icon: Icon, id: 'no-text' })
  );
};

exports.default = BadgeIcon;