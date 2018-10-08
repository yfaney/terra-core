'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResponsiveElement = require('../../../ResponsiveElement');

var _ResponsiveElement2 = _interopRequireDefault(_ResponsiveElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultExample = function DefaultExample() {
  return _react2.default.createElement(
    'div',
    { style: { border: '1px dashed', width: '500px' } },
    _react2.default.createElement(_ResponsiveElement2.default, {
      defaultElement: _react2.default.createElement(
        'div',
        null,
        'Default'
      ),
      tiny: _react2.default.createElement(
        'div',
        null,
        'Tiny'
      ),
      small: _react2.default.createElement(
        'div',
        null,
        'Small'
      ),
      medium: _react2.default.createElement(
        'div',
        null,
        'Medium'
      ),
      large: _react2.default.createElement(
        'div',
        null,
        'Large'
      ),
      huge: _react2.default.createElement(
        'div',
        null,
        'Huge'
      )
    })
  );
};

exports.default = DefaultExample;