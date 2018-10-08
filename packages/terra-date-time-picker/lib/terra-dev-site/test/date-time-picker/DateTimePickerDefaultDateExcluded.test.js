'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DateTimePickerExampleTemplate = require('../../common/DateTimePickerExampleTemplate');

var _DateTimePickerExampleTemplate2 = _interopRequireDefault(_DateTimePickerExampleTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTimePickerDefaultDateExcluded = function DateTimePickerDefaultDateExcluded() {
  return _react2.default.createElement(_DateTimePickerExampleTemplate2.default, {
    excludeDates: ['2017-04-03T12:00', '2017-04-04T12:00', '2017-04-05T12:00'],
    value: '2017-04-03T12:00'
  });
};

exports.default = DateTimePickerDefaultDateExcluded;