'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hyperlink = require('terra-hyperlink/lib/Hyperlink');

var _Hyperlink2 = _interopRequireDefault(_Hyperlink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
exports.default = function () {
  return _react2.default.createElement(
    _Hyperlink2.default,
    { href: 'https://www.cerner.com', variant: 'video' },
    'Video hyperlink'
  );
};