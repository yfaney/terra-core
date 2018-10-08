'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hyperlink = require('../../../Hyperlink');

var _Hyperlink2 = _interopRequireDefault(_Hyperlink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScaledHyperlink = function ScaledHyperlink() {
  return _react2.default.createElement(
    'div',
    { role: 'main', style: { fontSize: '40px' }, id: 'link-example' },
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://www.cerner.com', variant: 'audio' },
      'Audio hyperlink'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://www.cerner.com', variant: 'document' },
      'Document hyperlink'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://www.cerner.com', variant: 'external' },
      'External hyperlink'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://www.cerner.com', variant: 'image' },
      'Image hyperlink'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://www.cerner.com', variant: 'video' },
      'Video hyperlink'
    )
  );
};

exports.default = ScaledHyperlink;