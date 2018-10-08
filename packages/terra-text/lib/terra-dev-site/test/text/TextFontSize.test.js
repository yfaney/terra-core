'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('../../../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextFontSize = function TextFontSize() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Text2.default,
      { id: 'textFontSize100', fontSize: 100 },
      'Font Size 100'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { id: 'textFontSize32', fontSize: 32 },
      'Font Size 32'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { id: 'textFontSize24', fontSize: 24 },
      'Font Size 24'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { id: 'textFontSize20', fontSize: 20 },
      'Font Size 20'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { id: 'textFontSize18', fontSize: 18 },
      'Font Size 18'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { id: 'textFontSize16', fontSize: 16 },
      'Font Size 16'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { id: 'textFontSize14', fontSize: 14 },
      'Font Size 14'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { id: 'textFontSize12', fontSize: 12 },
      'Font Size 12'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { id: 'textFontSize10', fontSize: 10 },
      'Font Size 10'
    )
  );
};

exports.default = TextFontSize;