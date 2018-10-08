'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraFormInput = require('terra-form-input');

var _terraFormInput2 = _interopRequireDefault(_terraFormInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultInvalidExample = function DefaultInvalidExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Default'
    ),
    _react2.default.createElement(_terraFormInput2.default, {
      name: 'default error input',
      defaultValue: 'Default Error Input \u2013 Uncontrolled',
      isInvalid: true
    })
  );
};

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = DefaultInvalidExample;