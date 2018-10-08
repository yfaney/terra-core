'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('terra-form-select/lib/Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptGroupExample = function OptGroupExample() {
  return _react2.default.createElement(
    _Select2.default,
    { placeholder: 'Select a color', style: { maxWidth: '300px' } },
    _react2.default.createElement(
      _Select2.default.OptGroup,
      { label: 'Shade of blue' },
      _react2.default.createElement(_Select2.default.Option, { value: 'blue', display: 'Blue' }),
      _react2.default.createElement(_Select2.default.Option, { value: 'cyan', display: 'Cyan' }),
      _react2.default.createElement(_Select2.default.Option, { value: 'teal', display: 'Teal' }),
      _react2.default.createElement(_Select2.default.Option, { value: 'azul', display: 'Azul' }),
      _react2.default.createElement(_Select2.default.Option, { value: 'aqua', display: 'Aqua' })
    ),
    _react2.default.createElement(
      _Select2.default.OptGroup,
      { label: 'Shades of green' },
      _react2.default.createElement(_Select2.default.Option, { value: 'green', display: 'Green' }),
      _react2.default.createElement(_Select2.default.Option, { value: 'forest', display: 'Forest Green' }),
      _react2.default.createElement(_Select2.default.Option, { value: 'dark', display: 'Dark Green' }),
      _react2.default.createElement(_Select2.default.Option, { value: 'neon', display: 'Neon Green' })
    )
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = OptGroupExample;