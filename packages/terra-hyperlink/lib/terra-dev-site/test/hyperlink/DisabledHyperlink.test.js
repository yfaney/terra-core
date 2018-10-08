'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hyperlink = require('../../../Hyperlink');

var _Hyperlink2 = _interopRequireDefault(_Hyperlink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { role: 'main' },
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://www.cerner.com', isDisabled: true },
      'Disabled hyperlink'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://www.cerner.com', isDisabled: true, variant: 'document' },
      'Disabled icon hyperlink'
    )
  );
};