'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tag = require('../../../Tag');

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HrefTag = function HrefTag() {
  return _react2.default.createElement(_Tag2.default, { id: 'href', text: 'Href Tag', href: 'www.google.com' });
};

exports.default = HrefTag;