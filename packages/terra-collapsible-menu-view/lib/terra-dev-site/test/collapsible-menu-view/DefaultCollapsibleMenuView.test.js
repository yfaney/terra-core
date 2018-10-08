'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var _CollapsibleMenuView = require('../../../CollapsibleMenuView');

var _CollapsibleMenuView2 = _interopRequireDefault(_CollapsibleMenuView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollapsibleMenuViewDemo = function (_React$Component) {
  _inherits(CollapsibleMenuViewDemo, _React$Component);

  function CollapsibleMenuViewDemo(props) {
    _classCallCheck(this, CollapsibleMenuViewDemo);

    var _this = _possibleConstructorReturn(this, (CollapsibleMenuViewDemo.__proto__ || Object.getPrototypeOf(CollapsibleMenuViewDemo)).call(this, props));

    _this.handleDisplayTypeChange = _this.handleDisplayTypeChange.bind(_this);
    _this.handleToggleOneOnChange = _this.handleToggleOneOnChange.bind(_this);
    _this.handleToggleTwoOnChange = _this.handleToggleTwoOnChange.bind(_this);
    _this.state = {
      toggle1Selection: false,
      toggle2Selection: false,
      displayType: 'tableView'
    };
    return _this;
  }

  _createClass(CollapsibleMenuViewDemo, [{
    key: 'handleToggleOneOnChange',
    value: function handleToggleOneOnChange(event, isSelected) {
      this.setState({ toggle1Selection: isSelected });
    }
  }, {
    key: 'handleToggleTwoOnChange',
    value: function handleToggleTwoOnChange(event, isSelected) {
      this.setState({ toggle2Selection: isSelected });
    }
  }, {
    key: 'handleDisplayTypeChange',
    value: function handleDisplayTypeChange(event, selectedKey) {
      this.setState({ displayType: selectedKey });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _CollapsibleMenuView2.default,
        null,
        _react2.default.createElement(_CollapsibleMenuView2.default.Toggle, {
          text: 'Toggle Item 1',
          className: 'ToggleItem1',
          key: 'toggle1',
          shouldCloseOnClick: false,
          onChange: this.handleToggleOneOnChange,
          isSelected: this.state.toggle1Selection
        }),
        _react2.default.createElement(_CollapsibleMenuView2.default.Toggle, {
          text: 'Toggle Item 2',
          className: 'ToggleItem2',
          key: 'toggle2',
          shouldCloseOnClick: false,
          onChange: this.handleToggleTwoOnChange,
          isSelected: this.state.toggle2Selection
        }),
        _react2.default.createElement(_CollapsibleMenuView2.default.Divider, { key: 'Divider1' }),
        _react2.default.createElement(_CollapsibleMenuView2.default.Item, {
          text: 'Menu Button 1',
          key: 'MenuButton1',
          className: 'MenuButton1',
          shouldCloseOnClick: false,
          subMenuItems: [_react2.default.createElement(_CollapsibleMenuView2.default.Item, { text: 'Default Item 1', key: 'defaultItem1' }), _react2.default.createElement(_CollapsibleMenuView2.default.Item, { text: 'Default Item 2', key: 'defaultItem2' })]
        }),
        _react2.default.createElement(_CollapsibleMenuView2.default.Item, {
          text: 'MenuButton2',
          key: 'MenuButton2',
          className: 'MenuButton2',
          shouldCloseOnClick: false,
          subMenuItems: [_react2.default.createElement(_CollapsibleMenuView2.default.Item, { text: 'Default Item 1', key: 'defaultItem1' }), _react2.default.createElement(_CollapsibleMenuView2.default.Item, { text: 'Default Item 2', key: 'defaultItem2' })]
        }),
        _react2.default.createElement(_CollapsibleMenuView2.default.Divider, { key: 'Divider2' }),
        _react2.default.createElement(
          _CollapsibleMenuView2.default.ItemGroup,
          { key: 'ViewTypeSelection', className: 'ViewTypeGroup', selectedKeys: [this.state.displayType], onChange: this.handleDisplayTypeChange },
          _react2.default.createElement(_CollapsibleMenuView2.default.Item, {
            icon: _react2.default.createElement(_IconTable2.default, null),
            text: 'Table View',
            className: 'TableView',
            key: 'tableView',
            isIconOnly: true,
            shouldCloseOnClick: false,
            isSelected: this.state.displayType === 'tableView'
          }),
          _react2.default.createElement(_CollapsibleMenuView2.default.Item, {
            icon: _react2.default.createElement(_IconFlowsheet2.default, null),
            text: 'Expanded View',
            className: 'ExpandedView',
            key: 'expandedView',
            isIconOnly: true,
            shouldCloseOnClick: false,
            isSelected: this.state.displayType === 'expandedView'
          }),
          _react2.default.createElement(_CollapsibleMenuView2.default.Item, {
            icon: _react2.default.createElement(_IconVisualization2.default, null),
            text: 'Trending View',
            className: 'TendingView',
            key: 'trendingView',
            isIconOnly: true,
            shouldCloseOnClick: false,
            isSelected: this.state.displayType === 'trendingView'
          })
        ),
        _react2.default.createElement(_CollapsibleMenuView2.default.Divider, { key: 'Divider3' }),
        _react2.default.createElement(_CollapsibleMenuView2.default.Item, { icon: _react2.default.createElement(_IconSend2.default, null), text: 'Send Message', className: 'SendMessage', key: 'send', isIconOnly: true }),
        _react2.default.createElement(
          _CollapsibleMenuView2.default.ItemGroup,
          { className: 'MessageActionGroup', key: 'messageActionGroup' },
          _react2.default.createElement(_CollapsibleMenuView2.default.Item, { icon: _react2.default.createElement(_IconPrinter2.default, null), text: 'Print Message', className: 'Print', key: 'print', isIconOnly: true }),
          _react2.default.createElement(_CollapsibleMenuView2.default.Item, { icon: _react2.default.createElement(_IconFolder2.default, null), text: 'Move Message to Folder...', className: 'Move', key: 'move', isIconOnly: true }),
          _react2.default.createElement(_CollapsibleMenuView2.default.Item, { icon: _react2.default.createElement(_IconTrash2.default, null), text: 'Trash Message', key: 'trash', className: 'Trash', isIconOnly: true })
        ),
        _react2.default.createElement(_CollapsibleMenuView2.default.Divider, { key: 'Divider4' }),
        _react2.default.createElement(_CollapsibleMenuView2.default.Item, { text: 'Button 1', className: 'Button1', key: 'button1' }),
        _react2.default.createElement(_CollapsibleMenuView2.default.Item, { text: 'Button 2', className: 'Button2', key: 'button2' }),
        _react2.default.createElement(_CollapsibleMenuView2.default.Item, { text: 'Button 3', className: 'Button3', key: 'button3' }),
        _react2.default.createElement(_CollapsibleMenuView2.default.Item, { text: 'Button 4', className: 'Button4', key: 'button4' })
      );
    }
  }]);

  return CollapsibleMenuViewDemo;
}(_react2.default.Component);

exports.default = CollapsibleMenuViewDemo;