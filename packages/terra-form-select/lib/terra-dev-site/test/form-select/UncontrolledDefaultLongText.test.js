'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('../../../Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UncontrolledDefault = function UncontrolledDefault() {
  return _react2.default.createElement(
    _Select2.default,
    { placeholder: 'Select a color', id: 'default', defaultValue: 'lorem' },
    _react2.default.createElement(_Select2.default.Option, { value: 'lorem', display: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' }),
    _react2.default.createElement(_Select2.default.Option, { value: 'blue', display: 'Blue' }),
    _react2.default.createElement(_Select2.default.Option, { value: 'purple', display: 'Purple' }),
    _react2.default.createElement(_Select2.default.Option, { value: 'red', display: 'Red' }),
    _react2.default.createElement(_Select2.default.Option, { value: 'violet', display: 'Violet' })
  );
};

exports.default = UncontrolledDefault;