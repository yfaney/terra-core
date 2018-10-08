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
    { role: 'main', id: 'link-example' },
    'Example of a hyperlink inside some content that will wrap. With this, the icon should not wrap onto a separate line without the link text. I am a',
    _react2.default.createElement(
      _Hyperlink2.default,
      { href: 'https://www.cerner.com', variant: 'document' },
      'Document hyperlink'
    ),
    ' ',
    'that is forced to wrap due to space constraints. My icon wraps with me.'
  );
};