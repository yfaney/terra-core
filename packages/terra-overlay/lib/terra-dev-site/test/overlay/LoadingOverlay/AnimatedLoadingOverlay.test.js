'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoadingOverlay = require('../../../../LoadingOverlay');

var _LoadingOverlay2 = _interopRequireDefault(_LoadingOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_LoadingOverlay2.default, { isOpen: true, isAnimated: true, id: 'terra-LoadingOverlay' });
};