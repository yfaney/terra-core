'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DateTimePickerExampleTemplate = require('../../common/DateTimePickerExampleTemplate');

var _DateTimePickerExampleTemplate2 = _interopRequireDefault(_DateTimePickerExampleTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTimePickerDefaultDateOutOfRange = function DateTimePickerDefaultDateOutOfRange() {
  return _react2.default.createElement(_DateTimePickerExampleTemplate2.default, {
    minDateTime: '2017-04-10T12:00',
    maxDateTime: '2017-04-20T12:00',
    value: '2017-04-01T12:00'
  });
};

exports.default = DateTimePickerDefaultDateOutOfRange;