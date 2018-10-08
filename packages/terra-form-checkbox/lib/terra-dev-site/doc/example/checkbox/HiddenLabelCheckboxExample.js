'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('terra-form-checkbox/lib/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hiddenLabelCheckboxExample = function hiddenLabelCheckboxExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Checkbox2.default, { labelText: 'Can you see me?', isLabelHidden: true })
  );
};

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = hiddenLabelCheckboxExample;