'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _ActionHeader = require('../../../ActionHeader');

var _ActionHeader2 = _interopRequireDefault(_ActionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionHeaderExample = function ActionHeaderExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _ActionHeader2.default,
      { title: 'Minimize Custom Button Action Header', onMaximize: function onMaximize() {
          return alert('You clicked maximize!');
        } },
      _react2.default.createElement(_terraButton2.default, { text: 'Custom Button', onClick: function onClick() {
          return alert('You clicked me!');
        } })
    )
  );
}; /* eslint-disable no-alert, import/no-extraneous-dependencies */
exports.default = ActionHeaderExample;
/* eslint-enable no-alert */