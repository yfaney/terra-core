'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OverlayContainer = require('../../../../OverlayContainer');

var _OverlayContainer2 = _interopRequireDefault(_OverlayContainer);

var _LoadingOverlay = require('../../../../LoadingOverlay');

var _LoadingOverlay2 = _interopRequireDefault(_LoadingOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _OverlayContainer2.default,
    { style: { height: '100px', width: '100%' } },
    _react2.default.createElement(_LoadingOverlay2.default, { isOpen: true, isRelativeToContainer: true, id: 'terra-LoadingOverlay' })
  );
};