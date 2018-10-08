'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('../../../../lib/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePickerMinMax = function DatePickerMinMax() {
  return _react2.default.createElement(_DatePicker2.default, {
    name: 'date-input',
    minDate: '2017-04-01',
    maxDate: '2017-04-10'
  });
};

exports.default = DatePickerMinMax;