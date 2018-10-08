'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('../../../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _x = require('../../assets/150x150.jpg');

var _x2 = _interopRequireDefault(_x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: { border: '5px solid #f00' } },
      _react2.default.createElement(_Avatar2.default, { id: 'image-avatar', image: _x2.default, alt: 'placeholder', variant: 'user', ariaLabel: 'user' })
    ),
    _react2.default.createElement(
      'div',
      { style: { border: '5px solid #f00' } },
      _react2.default.createElement(_Avatar2.default, { id: 'facility-avatar', variant: 'facility', ariaLabel: 'facility' })
    )
  );
};