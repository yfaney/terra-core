'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ActionHeader = require('../../../ActionHeader');

var _ActionHeader2 = _interopRequireDefault(_ActionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-alert, import/no-extraneous-dependencies */
exports.default = function () {
  return _react2.default.createElement(_ActionHeader2.default, {
    title: 'Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Long Title Action Header',
    onBack: function onBack() {
      return alert('You clicked back!');
    },
    onClose: function onClose() {
      return alert('You clicked close!');
    }
  });
};