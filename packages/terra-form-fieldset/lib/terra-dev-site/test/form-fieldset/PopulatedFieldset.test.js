'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Fieldset = require('../../../Fieldset');

var _Fieldset2 = _interopRequireDefault(_Fieldset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fieldset = function fieldset() {
  return _react2.default.createElement(_Fieldset2.default, {
    id: 'populated-fieldset',
    legend: 'Do you have any children?',
    legendAttrs: { className: 'healtheintent-application' },
    name: 'children_present',
    value: 'children_present',
    help: 'Families are eligible for family package plans',
    required: true
  });
};

exports.default = fieldset;