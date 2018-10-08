'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('../../../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadingSize = function HeadingSize() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-size-huge', level: 1, size: 'huge' },
      'Huge'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-size-large', level: 1, size: 'large' },
      'Large'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-size-medium', level: 1, size: 'medium' },
      'Medium'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-size-small', level: 1, size: 'small' },
      'Small'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-size-tiny', level: 1, size: 'tiny' },
      'Tiny'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-size-mini', level: 1, size: 'mini' },
      'Mini'
    )
  );
};

exports.default = HeadingSize;