'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ToggleButton = require('../../../ToggleButton');

var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnimatedToggleButton = function AnimatedToggleButton() {
  return _react2.default.createElement(
    _ToggleButton2.default,
    { id: 'animatedToggle', closedButtonText: 'Custom Text', isAnimated: true },
    _react2.default.createElement(
      'p',
      null,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { htmlFor: 'text-input' },
        'Text input'
      ),
      _react2.default.createElement('input', { id: 'text-input', type: 'text' })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { htmlFor: 'select-field', defaultValue: 'Option 01' },
        'Select field'
      ),
      _react2.default.createElement(
        'select',
        { id: 'select-field' },
        _react2.default.createElement(
          'option',
          null,
          'Option 01'
        ),
        _react2.default.createElement(
          'option',
          null,
          'Option 02'
        )
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { htmlFor: 'textarea' },
        'Textarea'
      ),
      _react2.default.createElement('textarea', { id: 'textarea', cols: '30', rows: '5', defaultValue: 'Textarea text' })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'button',
        { type: 'button', id: 'button' },
        'button'
      )
    )
  );
};

exports.default = AnimatedToggleButton;