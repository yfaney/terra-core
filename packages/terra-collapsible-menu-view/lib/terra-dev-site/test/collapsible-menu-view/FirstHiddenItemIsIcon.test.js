'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconSend = require('terra-icon/lib/icon/IconSend');

var _IconSend2 = _interopRequireDefault(_IconSend);

var _CollapsibleMenuView = require('../../../CollapsibleMenuView');

var _CollapsibleMenuView2 = _interopRequireDefault(_CollapsibleMenuView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollapsibleMenuViewDemo = function CollapsibleMenuViewDemo() {
  return _react2.default.createElement(
    _CollapsibleMenuView2.default,
    null,
    _react2.default.createElement(_CollapsibleMenuView2.default.Item, { text: 'Button A', className: 'ButtonA', key: 'buttonA' }),
    _react2.default.createElement(_CollapsibleMenuView2.default.Item, { text: 'Button B', className: 'ButtonB', key: 'buttonB' }),
    _react2.default.createElement(_CollapsibleMenuView2.default.Divider, { key: 'Divider4' }),
    _react2.default.createElement(_CollapsibleMenuView2.default.Item, { text: 'Button 1', className: 'Button1', key: 'button1' }),
    _react2.default.createElement(_CollapsibleMenuView2.default.Item, { text: 'Button 2', className: 'Button2', key: 'button2' }),
    _react2.default.createElement(_CollapsibleMenuView2.default.Item, {
      icon: _react2.default.createElement(_IconSend2.default, null),
      text: 'Button3',
      className: 'IconOnly',
      key: 'button3',
      isIconOnly: true
    })
  );
};

exports.default = CollapsibleMenuViewDemo;