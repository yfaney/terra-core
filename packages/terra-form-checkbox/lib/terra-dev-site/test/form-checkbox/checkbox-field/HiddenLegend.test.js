'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('../../../../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _CheckboxField = require('../../../../CheckboxField');

var _CheckboxField2 = _interopRequireDefault(_CheckboxField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkboxField = function checkboxField() {
  return _react2.default.createElement(
    _CheckboxField2.default,
    { legend: 'Desired Department', isLegendHidden: true },
    _react2.default.createElement(_Checkbox2.default, { id: 'ux-dept', name: 'dept[]', labelText: 'UX/Interaction Design', value: 'ux' }),
    _react2.default.createElement(_Checkbox2.default, { id: 'magazine-dept', name: 'dept[]', labelText: 'Magazine Advertisements', value: 'magazine' }),
    _react2.default.createElement(_Checkbox2.default, { id: 'website-dept', name: 'dept[]', labelText: 'Website Advertisements', value: 'website' }),
    _react2.default.createElement(_Checkbox2.default, { id: 'events-dept', name: 'dept[]', labelText: 'Event Promotions', value: 'events' })
  );
};

exports.default = checkboxField;