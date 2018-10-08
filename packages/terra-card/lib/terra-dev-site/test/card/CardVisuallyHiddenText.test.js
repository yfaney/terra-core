'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('../../../Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardVisuallyHiddenText = function CardVisuallyHiddenText() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Card2.default,
      { visuallyHiddenText: 'This is a Hello World Card Introduction' },
      'Hello World!!'
    )
  );
};

exports.default = CardVisuallyHiddenText;