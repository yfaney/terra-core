'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _MenuModule = require('./Menu.module.scss');

var _MenuModule2 = _interopRequireDefault(_MenuModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_MenuModule2.default);

var MenuDivider = function MenuDivider() {
  return _react2.default.createElement('li', { className: cx('divider'), role: 'separator' });
};

exports.default = MenuDivider;