'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('terra-dialog/lib/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-alert */
var header = 'Header Stuff';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var footer = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'span',
    null,
    'Footer Stuff'
  ),
  _react2.default.createElement(
    'span',
    null,
    'Footer Stuff'
  ),
  _react2.default.createElement(
    'span',
    null,
    'Footer Stuff'
  ),
  _react2.default.createElement(
    'span',
    null,
    'Footer Stuff'
  ),
  _react2.default.createElement(
    'span',
    null,
    'Footer Stuff'
  )
);

var body = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'p',
    null,
    'This is my body content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  ),
  _react2.default.createElement(
    'p',
    null,
    'This is some more content.'
  )
);

var DialogLongContent = function DialogLongContent() {
  return _react2.default.createElement(
    'div',
    { style: { height: '200px', width: '350px', border: 'dashed' } },
    _react2.default.createElement(
      _Dialog2.default,
      { header: header, footer: footer, onClose: function onClose() {
          return alert('Close');
        } },
      body
    )
  );
};

exports.default = DialogLongContent;
/* eslint-enable no-alert */