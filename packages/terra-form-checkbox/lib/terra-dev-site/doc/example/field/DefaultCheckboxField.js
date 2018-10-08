'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('terra-form-checkbox/lib/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _CheckboxField = require('terra-form-checkbox/lib/CheckboxField');

var _CheckboxField2 = _interopRequireDefault(_CheckboxField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
var disabledCheckbox = function disabledCheckbox() {
  return _react2.default.createElement(
    _CheckboxField2.default,
    {
      legend: 'Do you have experience with any of the following?'
    },
    _react2.default.createElement(_Checkbox2.default, { id: 'experience-indesign', name: 'experience[]', labelText: 'InDesign' }),
    _react2.default.createElement(_Checkbox2.default, { id: 'experience-photoshop', name: 'experience[]', labelText: 'Photoshop' }),
    _react2.default.createElement(_Checkbox2.default, { id: 'experience-illustrator', name: 'experience[]', labelText: 'Illustrator' })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = disabledCheckbox;