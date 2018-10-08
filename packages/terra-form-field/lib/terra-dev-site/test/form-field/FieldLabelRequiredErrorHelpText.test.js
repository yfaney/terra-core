'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('../../../Field');

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldLabelRequiredErrorHelpText = function FieldLabelRequiredErrorHelpText() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'Field -  Label + Required + In Error + Help Text'
    ),
    _react2.default.createElement(
      _Field2.default,
      {
        id: 'required-invalid',
        style: { border: 'dashed 1px lightGrey', padding: '10px' },
        label: 'Field Label',
        help: 'Help Message',
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

exports.default = FieldLabelRequiredErrorHelpText;