'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Radio = require('terra-form-radio/lib/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inlineRadiosExample = function inlineRadiosExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Radio2.default, { id: 'first-inline', labelText: 'First Radio', name: 'inline-example', isInline: true }),
    _react2.default.createElement(_Radio2.default, { id: 'second-inline', labelText: 'Second Radio', name: 'inline-example', isInline: true }),
    _react2.default.createElement(_Radio2.default, { id: 'third-inline', labelText: 'Third Radio', name: 'inline-example', isInline: true })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = inlineRadiosExample;