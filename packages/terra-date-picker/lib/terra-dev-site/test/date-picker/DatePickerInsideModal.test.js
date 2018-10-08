'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraModalManager = require('terra-modal-manager');

var _terraModalManager2 = _interopRequireDefault(_terraModalManager);

var _DatePickerModalContainer = require('./common/DatePickerModalContainer');

var _DatePickerModalContainer2 = _interopRequireDefault(_DatePickerModalContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalManagerDemo = function ModalManagerDemo() {
  return _react2.default.createElement(
    _terraModalManager2.default,
    null,
    _react2.default.createElement(_DatePickerModalContainer2.default, null)
  );
}; /* eslint-disable import/no-extraneous-dependencies */

exports.default = ModalManagerDemo;