'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('../../../Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MaxHeight = function MaxHeight() {
  return _react2.default.createElement(
    _Select2.default,
    { placeholder: 'Select a number', id: 'maxHeight', defaultValue: '1', maxHeight: 300 },
    _react2.default.createElement(_Select2.default.Option, { value: '1', display: 'One' }),
    _react2.default.createElement(_Select2.default.Option, { value: '2', display: 'Two' }),
    _react2.default.createElement(_Select2.default.Option, { value: '3', display: 'Three' }),
    _react2.default.createElement(_Select2.default.Option, { value: '4', display: 'Four' }),
    _react2.default.createElement(_Select2.default.Option, { value: '5', display: 'Five' }),
    _react2.default.createElement(_Select2.default.Option, { value: '6', display: 'Six' }),
    _react2.default.createElement(_Select2.default.Option, { value: '7', display: 'Seven' }),
    _react2.default.createElement(_Select2.default.Option, { value: '8', display: 'Eight' }),
    _react2.default.createElement(_Select2.default.Option, { value: '9', display: 'Nine' }),
    _react2.default.createElement(_Select2.default.Option, { value: '10', display: 'Ten' }),
    _react2.default.createElement(_Select2.default.Option, { value: '11', display: 'Eleven' }),
    _react2.default.createElement(_Select2.default.Option, { value: '12', display: 'Twelve' }),
    _react2.default.createElement(_Select2.default.Option, { value: '13', display: 'Thirteen' })
  );
};

exports.default = MaxHeight;