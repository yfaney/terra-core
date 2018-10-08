'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Radio = require('terra-form-radio/lib/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var multipleRadiosExample = function multipleRadiosExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Radio2.default, { id: 'first', labelText: 'First Radio', name: 'multiple-group', defaultChecked: true }),
    _react2.default.createElement(_Radio2.default, { id: 'second', labelText: 'Second Radio', name: 'multiple-group' }),
    _react2.default.createElement(_Radio2.default, { id: 'third', labelText: 'Third Radio', name: 'multiple-group' })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = multipleRadiosExample;