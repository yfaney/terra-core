'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OverlayContainer = require('../../../../OverlayContainer');

var _OverlayContainer2 = _interopRequireDefault(_OverlayContainer);

var _Overlay = require('../../../../Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OverlayExample = function OverlayExample() {
  return _react2.default.createElement(
    _OverlayContainer2.default,
    { style: { height: '100px', width: '100%' }, id: 'overlay-container' },
    _react2.default.createElement(_Overlay2.default, { isOpen: true, isRelativeToContainer: true })
  );
};

exports.default = OverlayExample;