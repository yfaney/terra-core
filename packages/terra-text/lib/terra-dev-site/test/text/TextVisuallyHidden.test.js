'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('../../../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextVisuallyHidden = function TextVisuallyHidden() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      null,
      'Text below is visually hidden but available to screen readers'
    ),
    _react2.default.createElement(
      _Text2.default,
      { id: 'textVisuallyHidden', isVisuallyHidden: true },
      'Visually Hidden'
    )
  );
};

exports.default = TextVisuallyHidden;