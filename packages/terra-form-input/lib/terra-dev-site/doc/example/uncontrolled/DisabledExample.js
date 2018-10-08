'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraFormInput = require('terra-form-input');

var _terraFormInput2 = _interopRequireDefault(_terraFormInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisabledExample = function DisabledExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Disabled'
    ),
    _react2.default.createElement(_terraFormInput2.default, {
      disabled: true,
      defaultValue: 'Disabled Example input \u2013 Uncontrolled',
      name: 'disabled input'
    })
  );
};

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = DisabledExample;