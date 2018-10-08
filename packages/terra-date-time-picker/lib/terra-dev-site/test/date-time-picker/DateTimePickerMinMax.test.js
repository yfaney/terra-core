'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _DateTimePickerExampleTemplate = require('../../common/DateTimePickerExampleTemplate');

var _DateTimePickerExampleTemplate2 = _interopRequireDefault(_DateTimePickerExampleTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTimePickerExample = function DateTimePickerExample() {
  return _react2.default.createElement(_DateTimePickerExampleTemplate2.default, {
    minDateTime: (0, _moment2.default)().format(),
    maxDateTime: (0, _moment2.default)().add(6, 'days').format()
  });
};

exports.default = DateTimePickerExample;