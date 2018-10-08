'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('../../../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextWeight = function TextWeight() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Text2.default,
      { id: 'textFontWeight700', weight: 700 },
      '700 Weight'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { id: 'textFontWeight400', weight: 400 },
      '400 Weight'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { id: 'textFontWeight200', weight: 200 },
      '200 Weight'
    )
  );
};

exports.default = TextWeight;