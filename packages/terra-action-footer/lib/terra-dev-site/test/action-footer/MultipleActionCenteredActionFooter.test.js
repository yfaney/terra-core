'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _CenteredActionFooter = require('../../../CenteredActionFooter');

var _CenteredActionFooter2 = _interopRequireDefault(_CenteredActionFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_CenteredActionFooter2.default, {
    center: _react2.default.createElement(
      'div',
      null,
      'FakeLink Action',
      _react2.default.createElement(_terraButton2.default, { text: 'Button Action' })
    )
  });
};