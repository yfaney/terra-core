'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('terra-text/lib/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextFontSizes = function TextFontSizes() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Text2.default,
      { fontSize: 100 },
      '100px (7.143rem)'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: 32 },
      '32px (2.286rem)'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: 24 },
      '24px (1.714rem)'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: 20 },
      '20px (1.429rem)'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: 18 },
      '18px (1.286rem)'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: 16 },
      '16px (1.143rem)'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: 14 },
      '14px (1rem)'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: 12 },
      '12px (0.8571rem)'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: 10 },
      '10px (0.7143rem)'
    )
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = TextFontSizes;