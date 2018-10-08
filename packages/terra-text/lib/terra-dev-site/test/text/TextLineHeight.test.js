'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('../../../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextLineHeight = function TextLineHeight() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: { fontSize: '100px' } },
      'Parent font size: 100px',
      _react2.default.createElement(
        _Text2.default,
        { fontSize: 16 },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ex tellus. Duis eget maximus ante, vitae bibendum libero. Integer.'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { 'font-size': '8px' } },
      'Parent font size: 8px',
      _react2.default.createElement(
        _Text2.default,
        { id: 'lineHeight', fontSize: 16 },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ex tellus. Duis eget maximus ante, vitae bibendum libero. Integer.'
      )
    )
  );
};

exports.default = TextLineHeight;