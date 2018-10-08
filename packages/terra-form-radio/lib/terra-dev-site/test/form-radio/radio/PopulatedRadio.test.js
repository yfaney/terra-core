'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Radio = require('../../../../Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var radio = function radio() {
  return _react2.default.createElement(_Radio2.default, {
    id: 'populated',
    labelText: 'Do you have any Children?',
    labelTextAttrs: { className: 'healtheintent-control-label-text' },
    name: 'children-present',
    value: 'children-present',
    inputAttrs: { className: 'healtheintent-application' },
    isInline: true
  });
};

exports.default = radio;