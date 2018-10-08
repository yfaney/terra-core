'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StatusView = require('../../../StatusView');

var _StatusView2 = _interopRequireDefault(_StatusView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_StatusView2.default, { id: 'statusView', variant: 'no-data', style: { border: '1px solid black', height: '500px' } });
};