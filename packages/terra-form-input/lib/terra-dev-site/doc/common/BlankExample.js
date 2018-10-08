'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('../../../Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlankExample = function BlankExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Blank'
    ),
    _react2.default.createElement(_Input2.default, { name: 'default blank input' })
  );
};

exports.default = BlankExample;