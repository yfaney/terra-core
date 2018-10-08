'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('terra-form-checkbox/lib/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inlineCheckboxesExample = function inlineCheckboxesExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Checkbox2.default, { id: 'firstInline', labelText: 'First Checkbox', isInline: true }),
    _react2.default.createElement(_Checkbox2.default, { id: 'secondInline', labelText: 'Second Checkbox', isInline: true }),
    _react2.default.createElement(_Checkbox2.default, { id: 'thirdInline', labelText: 'Third Checkbox', isInline: true })
  );
};

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = inlineCheckboxesExample;