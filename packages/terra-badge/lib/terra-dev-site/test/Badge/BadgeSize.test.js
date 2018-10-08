'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Badge = require('../../../Badge');

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BadgeSize = function BadgeSize() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Badge2.default, { size: 'tiny', text: 'Tiny', id: 'tiny-badge' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { size: 'small', text: 'Small', id: 'small-badge' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { size: 'medium', text: 'Medium', id: 'medium-badge' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { size: 'large', text: 'Large', id: 'large-badge' }),
    ' ',
    _react2.default.createElement(_Badge2.default, { size: 'huge', text: 'Huge', id: 'huge-badge' })
  );
};

exports.default = BadgeSize;