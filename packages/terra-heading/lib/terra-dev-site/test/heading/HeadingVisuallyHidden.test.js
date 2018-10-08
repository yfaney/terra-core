'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('../../../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadingVisuallyHidden = function HeadingVisuallyHidden() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      null,
      'Heading below is visually hidden but available to screen readers'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-visually-hidden', level: 1, isVisuallyHidden: true },
      'Visually Hidden'
    )
  );
};

exports.default = HeadingVisuallyHidden;