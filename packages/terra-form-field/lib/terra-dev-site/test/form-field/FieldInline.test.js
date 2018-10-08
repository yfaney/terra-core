'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('../../../Field');

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldExamples = function FieldExamples() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Field2.default,
      {
        style: { border: 'dashed 1px lightGrey', padding: '10px' },
        label: 'Field Label',
        isInline: true,
        required: true
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
        style: { border: 'dashed 1px lightGrey', padding: '10px' },
        label: 'Field Label',
        isInline: true,
        showOptional: true
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
        style: { border: 'dashed 1px lightGrey', padding: '10px' },
        label: 'Field Label',
        isInline: true,
        required: true
      },
      _react2.default.createElement(
        'div',
        { style: { border: 'dashed 1px lightGrey' } },
        'Control Placeholder'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Field2.default,
      {
        style: { border: 'dashed 1px lightGrey', padding: '10px' },
        label: 'Field Label',
        isInline: true,
        error: 'Error Message',
        isInvalid: true,
        required: true
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
        style: { border: 'dashed 1px lightGrey', padding: '10px' },
        label: 'Field Label',
        isInline: true,
        error: 'Error Message',
        isInvalid: true,
        showOptional: true
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
        style: { border: 'dashed 1px lightGrey', padding: '10px' },
        label: 'Field Label',
        isInline: true,
        error: 'Error Message',
        isInvalid: true,
        required: true
      },
      _react2.default.createElement(
        'div',
        { style: { border: 'dashed 1px lightGrey' } },
        'Control Placeholder'
      )
    )
  );
};

exports.default = FieldExamples;