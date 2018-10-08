'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('terra-text/lib/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextWeights = function TextWeights() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Text2.default,
      { fontSize: 18, weight: 200 },
      'Font Weight: 200'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: 18, weight: 400 },
      'Font Weight: 400'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: 18, weight: 700 },
      'Font Weight: 700'
    )
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = TextWeights;