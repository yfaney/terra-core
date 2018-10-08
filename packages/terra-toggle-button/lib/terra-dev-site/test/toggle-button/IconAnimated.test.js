'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ToggleButton = require('../../../ToggleButton');

var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnimatedIconToggleButton = function AnimatedIconToggleButton() {
  return _react2.default.createElement(
    _ToggleButton2.default,
    { id: 'animatedIcon', closedButtonText: 'ToggleButton', isIconAnimated: true },
    _react2.default.createElement(
      'p',
      null,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    )
  );
};

exports.default = AnimatedIconToggleButton;