'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('terra-heading/lib/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadingColors = function HeadingColors() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Heading2.default,
      { level: 3, color: 'Crimson' },
      'Font Color: Crimson'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { level: 3, color: 'rgb(46,125,50)' },
      'Font Color: rgb(46,125,50)'
    ),
    _react2.default.createElement(
      _Heading2.default,
      { level: 3, color: '#304FFE' },
      'Font Color: #304FFE'
    )
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = HeadingColors;