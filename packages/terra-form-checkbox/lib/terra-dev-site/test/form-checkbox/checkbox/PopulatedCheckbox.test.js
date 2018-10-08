'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('../../../../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkbox = function checkbox() {
  return _react2.default.createElement(_Checkbox2.default, {
    id: 'populated',
    labelText: 'Do you have any Children?',
    labelTextAttrs: { className: 'healtheintent-control-label-text' },
    name: 'children_present',
    value: 'children_present',
    inputAttrs: { className: 'healtheintent-application' },
    isInline: true
  });
};

exports.default = checkbox;