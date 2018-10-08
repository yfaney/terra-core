'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _terraMenu = require('terra-menu');

var _terraMenu2 = _interopRequireDefault(_terraMenu);

require('terra-base/lib/baseStyles');

var _CollapsibleMenuViewModule = require('./CollapsibleMenuView.module.scss');

var _CollapsibleMenuViewModule2 = _interopRequireDefault(_CollapsibleMenuViewModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_CollapsibleMenuViewModule2.default);

var contextTypes = {
  isCollapsibleMenuItem: _propTypes2.default.bool
};

var CollapsibleMenuViewDivider = function CollapsibleMenuViewDivider(props, _ref) {
  var isCollapsibleMenuItem = _ref.isCollapsibleMenuItem;

  if (isCollapsibleMenuItem) {
    return _react2.default.createElement(_terraMenu2.default.Divider, null);
  }
  return _react2.default.createElement('div', { className: cx(['divider', 'face-up-item']) });
};

CollapsibleMenuViewDivider.contextTypes = contextTypes;
exports.default = CollapsibleMenuViewDivider;