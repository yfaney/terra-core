'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('../../../Field');

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultField = function DefaultField() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'Default Field'
    ),
    _react2.default.createElement(
      _Field2.default,
      {
        label: 'Field Label',
        help: 'This is a standard, non-required field.',
        error: 'Error Message'
      },
      _react2.default.createElement(
        'div',
        { style: { border: 'dashed 1px lightGrey' } },
        'Control Placeholder'
      )
    ),
    _react2.default.createElement(
      _Field2.default,
      {
        label: 'Field Label',
        help: 'This is a standard, non-required field.',
        error: 'Error Message'
      },
      _react2.default.createElement(
        'div',
        { style: { border: 'dashed 1px lightGrey' } },
        'Control Placeholder'
      )
    )
  );
};

exports.default = DefaultField;