'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hyperlink = require('../../../Hyperlink');

var _Hyperlink2 = _interopRequireDefault(_Hyperlink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HyperlinkStates = function HyperlinkStates() {
  return _react2.default.createElement(
    'div',
    { role: 'main', style: { padding: '0 10px' }, id: 'link-example' },
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://my.cerner.com/?' },
      'hyperlink'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://my.cerner.com/?', className: 'is-visited' },
      'visited hyperlink'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://my.cerner.com/?', className: 'is-hovered' },
      'hovered hyperlink'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://my.cerner.com/?', className: 'is-focused' },
      'focused hyperlink'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://my.cerner.com/?', className: 'is-active' },
      'active hyperlink'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://my.cerner.com/?', variant: 'document' },
      'icon hyperlink'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://my.cerner.com/?', className: 'is-visited', variant: 'document' },
      'icon visited hyperlink'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://my.cerner.com/?', className: 'is-hovered', variant: 'document' },
      'icon hovered hyperlink'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://my.cerner.com/?', className: 'is-focused', variant: 'document' },
      'icon focused hyperlink'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://my.cerner.com/?', className: 'is-active', variant: 'document' },
      'icon active hyperlink'
    )
  );
};

exports.default = HyperlinkStates;