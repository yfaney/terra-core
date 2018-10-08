'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Radio = require('../../../../Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _RadioField = require('../../../../RadioField');

var _RadioField2 = _interopRequireDefault(_RadioField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exampleRadioField = function exampleRadioField() {
  return _react2.default.createElement(
    _RadioField2.default,
    { legend: 'Desired Department', isLegendHidden: true },
    _react2.default.createElement(_Radio2.default, { id: 'ux-dept', name: 'dept', labelText: 'UX/Interaction Design', value: 'ux' }),
    _react2.default.createElement(_Radio2.default, { id: 'magazine-dept', name: 'dept', labelText: 'Magazine Advertisements', value: 'magazine' }),
    _react2.default.createElement(_Radio2.default, { id: 'website-dept', name: 'dept', labelText: 'Website Advertisements', value: 'website' }),
    _react2.default.createElement(_Radio2.default, { id: 'events-dept', name: 'dept', labelText: 'Event Promotions', value: 'events' })
  );
};

exports.default = exampleRadioField;