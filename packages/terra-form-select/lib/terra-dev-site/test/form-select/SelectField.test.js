'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectField = require('../../../SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectFieldExample = function SelectFieldExample() {
  return _react2.default.createElement(
    _SelectField2.default,
    { label: 'T-shirt size', placeholder: 'Select a size', selectId: 'select-field', defaultValue: 'small' },
    _react2.default.createElement(_SelectField2.default.Option, { value: 'xSmall', display: 'Extra Small' }),
    _react2.default.createElement(_SelectField2.default.Option, { value: 'small', display: 'Small' }),
    _react2.default.createElement(_SelectField2.default.Option, { value: 'medium', display: 'Medium' }),
    _react2.default.createElement(_SelectField2.default.Option, { value: 'large', display: 'Large' }),
    _react2.default.createElement(_SelectField2.default.Option, { value: 'xLarge', display: 'Extra Large' })
  );
};

exports.default = SelectFieldExample;