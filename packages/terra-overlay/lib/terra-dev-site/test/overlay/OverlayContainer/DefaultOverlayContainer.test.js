'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OverlayContainer = require('../../../../OverlayContainer');

var _OverlayContainer2 = _interopRequireDefault(_OverlayContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContainerExample = function ContainerExample() {
  return _react2.default.createElement(
    _OverlayContainer2.default,
    { id: 'terra-OverlayContainer' },
    'OverlayContainer is a wrapper component that applies the css style `position: relative;` so the overlay relative to container displays correctly.'
  );
};

exports.default = ContainerExample;