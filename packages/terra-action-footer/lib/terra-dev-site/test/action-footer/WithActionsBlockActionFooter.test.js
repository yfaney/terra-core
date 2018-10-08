'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _BlockActionFooter = require('../../../BlockActionFooter');

var _BlockActionFooter2 = _interopRequireDefault(_BlockActionFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _BlockActionFooter2.default,
    null,
    'FakeLink Action',
    _react2.default.createElement(_terraButton2.default, { text: 'Button Action' })
  );
};