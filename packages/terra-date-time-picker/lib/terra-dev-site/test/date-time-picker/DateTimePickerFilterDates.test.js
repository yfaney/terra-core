'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DateTimePickerExampleTemplate = require('../../common/DateTimePickerExampleTemplate');

var _DateTimePickerExampleTemplate2 = _interopRequireDefault(_DateTimePickerExampleTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isWeekday = function isWeekday(date) {
  var day = date.day();
  return day !== 0 && day !== 6;
};

var DateTimePickerExample = function DateTimePickerExample() {
  return _react2.default.createElement(_DateTimePickerExampleTemplate2.default, {
    filterDate: isWeekday,
    value: '2017-08-15'
  });
};

exports.default = DateTimePickerExample;