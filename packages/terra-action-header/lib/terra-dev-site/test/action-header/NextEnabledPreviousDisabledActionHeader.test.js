'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ActionHeader = require('../../../ActionHeader');

var _ActionHeader2 = _interopRequireDefault(_ActionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-alert */
var ActionHeaderExample = function ActionHeaderExample() {
  return _react2.default.createElement(_ActionHeader2.default, {
    title: 'Next Enabled Previous Disabled Action Header',
    onNext: function onNext() {
      return alert('You clicked next!');
    }
  });
};

exports.default = ActionHeaderExample;
/* eslint-enable no-alert */