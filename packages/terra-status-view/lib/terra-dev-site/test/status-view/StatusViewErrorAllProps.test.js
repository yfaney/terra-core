'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _StatusView = require('../../../StatusView');

var _StatusView2 = _interopRequireDefault(_StatusView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _StatusView2.default,
      { id: 'statusView', variant: 'error', title: '500', message: 'An exception was thrown.' },
      _react2.default.createElement(_terraButton2.default, { text: 'OK', key: '1', id: 'button1' }),
      _react2.default.createElement(_terraButton2.default, { text: 'Cancel', key: '2', id: 'button2' })
    )
  );
};