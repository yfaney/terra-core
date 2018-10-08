'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('../../../../lib/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePickerDefaultDateExcluded = function DatePickerDefaultDateExcluded() {
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
      excludeDates: ['2017-04-03', '2017-04-04', '2017-04-05', '2017-04-06', '2017-04-07'],
      selectedDate: '2017-04-05'
    })
  );
};

exports.default = DatePickerDefaultDateExcluded;