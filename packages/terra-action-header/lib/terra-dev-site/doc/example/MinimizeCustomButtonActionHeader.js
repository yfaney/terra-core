'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraCollapsibleMenuView = require('terra-collapsible-menu-view');

var _terraCollapsibleMenuView2 = _interopRequireDefault(_terraCollapsibleMenuView);

var _IconTable = require('terra-icon/lib/icon/IconTable');

var _IconTable2 = _interopRequireDefault(_IconTable);

var _IconFlowsheet = require('terra-icon/lib/icon/IconFlowsheet');

var _IconFlowsheet2 = _interopRequireDefault(_IconFlowsheet);

var _IconVisualization = require('terra-icon/lib/icon/IconVisualization');

var _IconVisualization2 = _interopRequireDefault(_IconVisualization);

var _IconSend = require('terra-icon/lib/icon/IconSend');

var _IconSend2 = _interopRequireDefault(_IconSend);

var _IconPrinter = require('terra-icon/lib/icon/IconPrinter');

var _IconPrinter2 = _interopRequireDefault(_IconPrinter);

var _IconFolder = require('terra-icon/lib/icon/IconFolder');

var _IconFolder2 = _interopRequireDefault(_IconFolder);

var _IconTrash = require('terra-icon/lib/icon/IconTrash');

var _IconTrash2 = _interopRequireDefault(_IconTrash);

var _ActionHeader = require('terra-action-header/lib/ActionHeader');

var _ActionHeader2 = _interopRequireDefault(_ActionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-alert */
var ActionHeaderExample = function ActionHeaderExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _ActionHeader2.default,
      { title: 'Minimize Custom Button Action Header', onMinimize: function onMinimize() {
          return alert('You clicked minimize!');
        }, onClose: function onClose() {
          return alert('You clicked close!');
        } },
      _react2.default.createElement(
        _terraCollapsibleMenuView2.default,
        null,
        _react2.default.createElement(_terraCollapsibleMenuView2.default.Toggle, {
          text: 'Toggle Item 1',
          key: 'toggle1',
          shouldCloseOnClick: false,
          isSelectable: false
        }),
        _react2.default.createElement(_terraCollapsibleMenuView2.default.Toggle, {
          text: 'Toggle Item 2',
          key: 'toggle2',
          shouldCloseOnClick: false,
          isDisabled: true
        }),
        _react2.default.createElement(_terraCollapsibleMenuView2.default.Divider, { key: 'Divider1' }),
        _react2.default.createElement(_terraCollapsibleMenuView2.default.Item, {
          text: 'Menu Button 1',
          key: 'MenuButton1',
          shouldCloseOnClick: false,
          subMenuItems: [_react2.default.createElement(_terraCollapsibleMenuView2.default.Item, { text: 'Default Item 1', key: 'defaultItem1' }), _react2.default.createElement(_terraCollapsibleMenuView2.default.Item, { text: 'Default Item 2', key: 'defaultItem2' })]
        }),
        _react2.default.createElement(_terraCollapsibleMenuView2.default.Item, {
          text: 'Menu Button 2',
          key: 'MenuButton 2',
          isDisabled: true,
          shouldCloseOnClick: false,
          subMenuItems: [_react2.default.createElement(_terraCollapsibleMenuView2.default.Item, { text: 'Default Item 1', key: 'defaultItem1' }), _react2.default.createElement(_terraCollapsibleMenuView2.default.Item, { text: 'Default Item 2', key: 'defaultItem2', isDisabled: true })]
        }),
        _react2.default.createElement(_terraCollapsibleMenuView2.default.Divider, { key: 'Divider2' }),
        _react2.default.createElement(
          _terraCollapsibleMenuView2.default.ItemGroup,
          { key: 'ViewTypeSelection', selectedKeys: ['tableView'] },
          _react2.default.createElement(_terraCollapsibleMenuView2.default.Item, {
            icon: _react2.default.createElement(_IconTable2.default, null),
            text: 'Table View',
            key: 'tableView',
            isIconOnly: true,
            shouldCloseOnClick: false
          }),
          _react2.default.createElement(_terraCollapsibleMenuView2.default.Item, {
            icon: _react2.default.createElement(_IconFlowsheet2.default, null),
            text: 'Expanded View',
            key: 'expandedView',
            isIconOnly: true,
            shouldCloseOnClick: false
          }),
          _react2.default.createElement(_terraCollapsibleMenuView2.default.Item, {
            icon: _react2.default.createElement(_IconVisualization2.default, null),
            text: 'Trending View',
            key: 'trendingView',
            isIconOnly: true,
            shouldCloseOnClick: false,
            isDisabled: true
          })
        ),
        _react2.default.createElement(_terraCollapsibleMenuView2.default.Divider, { key: 'Divider3' }),
        _react2.default.createElement(_terraCollapsibleMenuView2.default.Item, { icon: _react2.default.createElement(_IconSend2.default, null), text: 'Send Message', key: 'send', isIconOnly: true }),
        _react2.default.createElement(
          _terraCollapsibleMenuView2.default.ItemGroup,
          { key: 'messageActionGroup' },
          _react2.default.createElement(_terraCollapsibleMenuView2.default.Item, { icon: _react2.default.createElement(_IconPrinter2.default, null), text: 'Print Message', key: 'print', isIconOnly: true }),
          _react2.default.createElement(_terraCollapsibleMenuView2.default.Item, { icon: _react2.default.createElement(_IconFolder2.default, null), text: 'Move Message to Folder...', key: 'move', isIconOnly: true, isDisabled: true }),
          _react2.default.createElement(_terraCollapsibleMenuView2.default.Item, { icon: _react2.default.createElement(_IconTrash2.default, null), text: 'Trash Message', key: 'trash', isIconOnly: true })
        ),
        _react2.default.createElement(_terraCollapsibleMenuView2.default.Divider, { key: 'Divider4' }),
        _react2.default.createElement(_terraCollapsibleMenuView2.default.Item, { text: 'Button 1', key: 'button1' }),
        _react2.default.createElement(_terraCollapsibleMenuView2.default.Item, { text: 'Button 2', key: 'button2', isDisabled: true }),
        _react2.default.createElement(_terraCollapsibleMenuView2.default.Item, { text: 'Button 3', key: 'button3' }),
        _react2.default.createElement(_terraCollapsibleMenuView2.default.Item, { text: 'Button 4', key: 'button4' })
      )
    ),
    _react2.default.createElement('br', null)
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = ActionHeaderExample;
/* eslint-enable no-alert */