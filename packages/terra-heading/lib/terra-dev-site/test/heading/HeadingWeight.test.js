'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('../../../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadingWeight = function HeadingWeight() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-weight-700', level: 1, weight: 700 },
      '700 Weight'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-weight-400', level: 1, weight: 400 },
      '400 Weight'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { id: 'heading-weight-200', level: 1, weight: 200 },
      '200 Weight'
    )
  );
};

exports.default = HeadingWeight;