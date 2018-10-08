'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Menu = require('../../../../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultMenuItem = function DefaultMenuItem() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Below is a default Menu Item with text'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'ul',
      { style: { height: '34px', width: '240px' } },
      _react2.default.createElement(_Menu2.default.Item, { text: 'DefaultMenuItem', className: 'TestMenuItem' })
    )
  );
};

exports.default = DefaultMenuItem;