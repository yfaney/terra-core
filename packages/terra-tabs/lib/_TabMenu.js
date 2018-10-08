'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _terraMenu = require('terra-menu');

var _terraMenu2 = _interopRequireDefault(_terraMenu);

var _IconCaretDown = require('terra-icon/lib/icon/IconCaretDown');

var _IconCaretDown2 = _interopRequireDefault(_IconCaretDown);

var _TabsModule = require('./Tabs.module.scss');

var _TabsModule2 = _interopRequireDefault(_TabsModule);

var _TabUtils = require('./TabUtils');

var _TabUtils2 = _interopRequireDefault(_TabUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_TabsModule2.default);

var propTypes = {
  /**
   * Key of the current active tab.
   */
  activeKey: _propTypes2.default.string,

  /**
   * Tabs that should be displayed collapsed as selectable menu items.
   */
  children: _propTypes2.default.node,

  /**
   * Ref callback for menu toggle.
   */
  refCallback: _propTypes2.default.func
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  }
};

var TabMenu = function (_React$Component) {
  _inherits(TabMenu, _React$Component);

  function TabMenu(props, context) {
    _classCallCheck(this, TabMenu);

    var _this = _possibleConstructorReturn(this, (TabMenu.__proto__ || Object.getPrototypeOf(TabMenu)).call(this, props, context));

    _this.handleOnRequestClose = _this.handleOnRequestClose.bind(_this);
    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.handleOnKeyDown = _this.handleOnKeyDown.bind(_this);
    _this.getTargetRef = _this.getTargetRef.bind(_this);
    _this.setTargetRef = _this.setTargetRef.bind(_this);
    _this.wrapOnClick = _this.wrapOnClick.bind(_this);
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(TabMenu, [{
    key: 'getTargetRef',
    value: function getTargetRef() {
      return this.targetRef;
    }
  }, {
    key: 'setTargetRef',
    value: function setTargetRef(node) {
      this.targetRef = node;

      if (this.props.refCallback) {
        this.props.refCallback(node);
      }
    }
  }, {
    key: 'handleOnRequestClose',
    value: function handleOnRequestClose() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'handleOnClick',
    value: function handleOnClick() {
      this.setState({ isOpen: true });
    }
  }, {
    key: 'handleOnKeyDown',
    value: function handleOnKeyDown(event) {
      if (event.nativeEvent.keyCode === _TabUtils2.default.KEYCODES.ENTER) {
        this.setState({ isOpen: true });
      }
    }
  }, {
    key: 'wrapOnClick',
    value: function wrapOnClick(child) {
      var _this2 = this;

      return function (event) {
        event.stopPropagation();

        if (child.props.onClick) {
          child.props.onClick(event);
        }

        _this2.setState({ isOpen: false });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var intl = this.context.intl;

      var menuItems = [];
      var menuToggleText = intl.formatMessage({ id: 'Terra.tabs.more' });
      var menuActive = false;

      _react2.default.Children.forEach(this.props.children, function (child) {
        var _child$props = child.props,
            label = _child$props.label,
            customDisplay = _child$props.customDisplay,
            icon = _child$props.icon,
            isIconOnly = _child$props.isIconOnly,
            otherProps = _objectWithoutProperties(_child$props, ['label', 'customDisplay', 'icon', 'isIconOnly']);

        var isSelected = false;

        if (_this3.props.activeKey === child.key) {
          menuToggleText = label;
          isSelected = true;
          menuActive = true;
        }
        menuItems.push(_react2.default.createElement(_terraMenu2.default.Item, _extends({}, otherProps, {
          text: label,
          onClick: _this3.wrapOnClick(child),
          isSelected: isSelected,
          isSelectable: true,
          key: child.key
        })));
      });

      return (
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        _react2.default.createElement(
          'div',
          {
            role: 'button',
            tabIndex: '0',
            ref: this.setTargetRef,
            onClick: this.handleOnClick,
            onKeyDown: this.handleOnKeyDown,
            className: cx(['tab-menu', { 'is-active': menuActive }]),
            'data-terra-tabs-menu': true
          },
          _react2.default.createElement(
            'span',
            null,
            menuToggleText
          ),
          _react2.default.createElement(_IconCaretDown2.default, null),
          _react2.default.createElement(
            _terraMenu2.default,
            {
              onRequestClose: this.handleOnRequestClose,
              targetRef: this.getTargetRef,
              isOpen: this.state.isOpen
            },
            menuItems
          )
        )
        /* eslint-enable jsx-ally/no-static-element-interactions */

      );
    }
  }]);

  return TabMenu;
}(_react2.default.Component);

TabMenu.contextTypes = contextTypes;
TabMenu.propTypes = propTypes;

exports.default = TabMenu;