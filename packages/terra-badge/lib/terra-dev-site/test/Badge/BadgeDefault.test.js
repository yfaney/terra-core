'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Badge = require('../../../Badge');

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BadgeDefault = function BadgeDefault() {
  return _react2.default.createElement(_Badge2.default, { text: 'Default', id: 'default-badge' });
};

exports.default = BadgeDefault;