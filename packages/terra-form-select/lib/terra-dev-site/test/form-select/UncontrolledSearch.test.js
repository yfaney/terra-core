'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('../../../Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UncontrolledSearch = function UncontrolledSearch() {
  return _react2.default.createElement(
    _Select2.default,
    { placeholder: 'Select a color', variant: 'search', id: 'search' },
    _react2.default.createElement(_Select2.default.Option, { value: 'blue', display: 'Blue' }),
    _react2.default.createElement(_Select2.default.Option, { value: 'green', display: 'Green' }),
    _react2.default.createElement(_Select2.default.Option, { value: 'purple', display: 'Purple' }),
    _react2.default.createElement(_Select2.default.Option, { value: 'red', display: 'Red' }),
    _react2.default.createElement(_Select2.default.Option, { value: 'violet', display: 'Violet' })
  );
};

exports.default = UncontrolledSearch;