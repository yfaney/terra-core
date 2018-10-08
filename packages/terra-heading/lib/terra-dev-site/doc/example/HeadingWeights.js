'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('terra-heading/lib/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadingWeights = function HeadingWeights() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Heading2.default,
      { level: 3, weight: 200 },
      'Font Weight: 200'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { level: 3, weight: 400 },
      'Font Weight: 400'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { level: 3, weight: 700 },
      'Font Weight: 700'
    )
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = HeadingWeights;