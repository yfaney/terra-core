'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('terra-text/lib/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextColors = function TextColors() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Text2.default,
      { fontSize: 18, color: 'Crimson' },
      'Font Color: Crimson'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: 18, color: 'rgb(46,125,50)' },
      'Font Color: rgb(46,125,50)'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: 18, color: '#304FFE' },
      'Font Color: #304FFE'
    )
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = TextColors;