'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraMenu = require('terra-menu');

var _terraMenu2 = _interopRequireDefault(_terraMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var propTypes = {
  isArrowDisplayed: _propTypes2.default.bool,
  contentWidth: _propTypes2.default.string,
  boundingRef: _propTypes2.default.func
};

var BasicMenu = function (_React$Component) {
  _inherits(BasicMenu, _React$Component);

  function BasicMenu(props) {
    _classCallCheck(this, BasicMenu);

    var _this = _possibleConstructorReturn(this, (BasicMenu.__proto__ || Object.getPrototypeOf(BasicMenu)).call(this, props));

    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.setButtonNode = _this.setButtonNode.bind(_this);
    _this.getButtonNode = _this.getButtonNode.bind(_this);
    _this.handleToggle1OnClick = _this.handleToggle1OnClick.bind(_this);
    _this.handleToggle2OnClick = _this.handleToggle2OnClick.bind(_this);
    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.handleAction = _this.handleAction.bind(_this);
    _this.handleCloseOnClick = _this.handleCloseOnClick.bind(_this);
    _this.state = {
      open: false,
      toggle1Selected: false,
      toggle2Selected: false,
      groupSelectedIndex: undefined,
      actionClickCount: 0
    };
    return _this;
  }

  _createClass(BasicMenu, [{
    key: 'setButtonNode',
    value: function setButtonNode(node) {
      this.buttonNode = node;
    }
  }, {
    key: 'getButtonNode',
    value: function getButtonNode() {
      return this.buttonNode;
    }
  }, {
    key: 'handleButtonClick',
    value: function handleButtonClick() {
      this.setState({ open: true });
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'handleCloseOnClick',
    value: function handleCloseOnClick(event) {
      event.preventDefault();
      this.handleRequestClose();
    }
  }, {
    key: 'handleToggle1OnClick',
    value: function handleToggle1OnClick() {
      this.setState(function (prevState) {
        return { toggle1Selected: !prevState.toggle1Selected };
      });
      this.handleRequestClose();
    }
  }, {
    key: 'handleToggle2OnClick',
    value: function handleToggle2OnClick() {
      this.setState(function (prevState) {
        return { toggle2Selected: !prevState.toggle2Selected };
      });
    }
  }, {
    key: 'handleOnChange',
    value: function handleOnChange(event, index) {
      this.setState({ groupSelectedIndex: index });
    }
  }, {
    key: 'handleAction',
    value: function handleAction(event) {
      event.preventDefault();
      var newState = this.state;
      newState.actionClickCount += 1;
      this.setState(newState);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: { display: 'inline-block' }, ref: this.setButtonNode },
          _react2.default.createElement(
            _terraMenu2.default,
            {
              isOpen: this.state.open,
              targetRef: this.getButtonNode,
              onRequestClose: this.handleRequestClose,
              contentWidth: this.props.contentWidth,
              isArrowDisplayed: this.props.isArrowDisplayed,
              boundingRef: this.props.boundingRef
            },
            _react2.default.createElement(_terraMenu2.default.Item, {
              text: 'Toggle Item 1 - Closes Menu',
              key: 'Toggle1',
              isSelected: this.state.toggle1Selected,
              onClick: this.handleToggle1OnClick,
              isSelectable: true
            }),
            _react2.default.createElement(_terraMenu2.default.Item, {
              text: 'Toggle Item 2',
              key: 'Toggle2',
              isSelected: this.state.toggle2Selected,
              onClick: this.handleToggle2OnClick,
              isSelectable: true
            }),
            _react2.default.createElement(_terraMenu2.default.Item, {
              text: 'Disabled Item 1',
              key: 'Disabled1',
              isSelected: this.state.toggle1Selected,
              onClick: this.handleToggle1OnClick,
              isDisabled: true
            }),
            _react2.default.createElement(_terraMenu2.default.Divider, { key: 'Divider1' }),
            _react2.default.createElement(_terraMenu2.default.Item, {
              text: 'Nested Menu 1',
              key: 'Nested1',
              subMenuItems: [_react2.default.createElement(_terraMenu2.default.Item, { text: 'Action 1.1', key: '1.1', onClick: this.handleAction }), _react2.default.createElement(_terraMenu2.default.Item, { text: 'Action 1.2', key: '1.2', onClick: this.handleAction }), _react2.default.createElement(_terraMenu2.default.Item, { text: 'Action 1.3', key: '1.3', onClick: this.handleAction }), _react2.default.createElement(_terraMenu2.default.Divider, { key: 'Divider1.1' }), _react2.default.createElement(_terraMenu2.default.Item, { text: 'Close Action 1.1', key: '1.4', onClick: this.handleCloseOnClick }), _react2.default.createElement(_terraMenu2.default.Item, { text: 'Close Action 1.2', key: '1.5', onClick: this.handleCloseOnClick }), _react2.default.createElement(_terraMenu2.default.Item, { text: 'Close Action 1.3', key: '1.6', onClick: this.handleCloseOnClick })]
            }),
            _react2.default.createElement(_terraMenu2.default.Item, {
              text: 'Nested Menu 2 has a long title that will wrap and a truncated title when clicked',
              key: 'Nested2',
              isDisabled: true,
              subMenuItems: [_react2.default.createElement(_terraMenu2.default.Item, { text: 'Default 2.1', key: '2.1' }), _react2.default.createElement(_terraMenu2.default.Item, { text: 'Default 2.2', key: '2.2' }), _react2.default.createElement(_terraMenu2.default.Item, { text: 'Default 2.3', key: '2.3' })]
            }),
            _react2.default.createElement(_terraMenu2.default.Divider, { key: 'Divider2' }),
            _react2.default.createElement(_terraMenu2.default.Item, { text: 'Close Action', key: 'Action2', onClick: this.handleCloseOnClick }),
            _react2.default.createElement(_terraMenu2.default.Item, { text: 'Action', key: 'Action1', onClick: this.handleAction }),
            _react2.default.createElement(_terraMenu2.default.Divider, { key: 'Divider3' }),
            _react2.default.createElement(
              _terraMenu2.default.ItemGroup,
              { key: 'Group', onChange: this.handleOnChange },
              _react2.default.createElement(_terraMenu2.default.Item, { text: 'Group Item 1', key: 'GroupItem1', isSelected: this.state.groupSelectedIndex === 0 }),
              _react2.default.createElement(_terraMenu2.default.Item, { text: 'Group Item 2', key: 'GroupItem2', isSelected: this.state.groupSelectedIndex === 1 }),
              _react2.default.createElement(_terraMenu2.default.Item, { text: 'Group Item 3', key: 'GroupItem3', isSelected: this.state.groupSelectedIndex === 2, isDisabled: true })
            )
          ),
          _react2.default.createElement(_terraButton2.default, { onClick: this.handleButtonClick, text: 'Click Me' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'Action button has been clicked',
          this.state.actionClickCount,
          ' ',
          'times.'
        )
      );
    }
  }]);

  return BasicMenu;
}(_react2.default.Component);

BasicMenu.propTypes = propTypes;

exports.default = BasicMenu;