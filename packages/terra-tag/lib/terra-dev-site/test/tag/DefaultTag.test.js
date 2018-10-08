'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tag = require('../../../Tag');

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spacingStyle = { padding: '10px' };
var DefaultTag = function DefaultTag() {
  return _react2.default.createElement(
    'div',
    { style: spacingStyle },
    _react2.default.createElement(_Tag2.default, {
      id: 'default',
      text: 'Default Tag'
    })
  );
};
exports.default = DefaultTag;