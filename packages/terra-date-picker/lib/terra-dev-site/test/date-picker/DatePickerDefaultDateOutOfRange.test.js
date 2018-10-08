'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('../../../../lib/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePickerDefaultDateOutOfRange = function DatePickerDefaultDateOutOfRange() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'Extraneous Clickable Text'
    ),
    _react2.default.createElement(_DatePicker2.default, {
      name: 'date-input',
      minDate: '2017-04-10',
      maxDate: '2017-04-20',
      selectedDate: '2017-04-01'
    })
  );
};

exports.default = DatePickerDefaultDateOutOfRange;