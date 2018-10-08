'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Overlay = require('../../../../Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OverlayExample = function OverlayExample() {
  return _react2.default.createElement(
    _Overlay2.default,
    { isOpen: true, backgroundStyle: _Overlay2.default.Opts.BackgroundStyles.CLEAR, id: 'clear-overlay' },
    _react2.default.createElement(
      'h1',
      null,
      'Clear Overlay'
    )
  );
};

exports.default = OverlayExample;