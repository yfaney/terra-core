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

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _IconCheckmark = require('terra-icon/lib/icon/IconCheckmark');

var _IconCheckmark2 = _interopRequireDefault(_IconCheckmark);

var _IconChevronRight = require('terra-icon/lib/icon/IconChevronRight');

var _IconChevronRight2 = _interopRequireDefault(_IconChevronRight);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _MenuUtils = require('./_MenuUtils');

var _MenuUtils2 = _interopRequireDefault(_MenuUtils);

var _MenuItemModule = require('./MenuItem.module.scss');

var _MenuItemModule2 = _interopRequireDefault(_MenuItemModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_MenuItemModule2.default);

var contextTypes = {
  isGroupItem: _propTypes2.default.bool,
  isSelectableMenu: _propTypes2.default.bool
};

var propTypes = {
  /**
   * Sets the item's text.
   */
  text: _propTypes2.default.string,

  /**
   * Indicates if item should be disabled
   */
  isDisabled: _propTypes2.default.bool,

  /**
   * Indicates if the item is selected. A selected item is indicated with a checkmark.
   */
  isSelected: _propTypes2.default.bool,

  /**
   * Indicates if the item should be selectable.
   */
  isSelectable: _propTypes2.default.bool,

  /**
   * List of Menu.Items to display in a submenu when this item is selected.
   */
  subMenuItems: _propTypes2.default.arrayOf(_propTypes2.default.element),

  /**
   * Callback function for when item is clicked
   */
  onClick: _propTypes2.default.func,

  /**
   * Callback function for when selection state changes on a selectable item.
   */
  onChange: _propTypes2.default.func,

  /**
   * Indicates if the item has focus. This is used internally to control focus and does not set initial focus.
   */
  isActive: _propTypes2.default.bool
};

var defaultProps = {
  text: '',
  isSelected: false,
  isActive: false,
  isSelectable: undefined,
  isDisabled: false,
  subMenuItems: []
};

var MenuItem = function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem(props, context) {
    _classCallCheck(this, MenuItem);

    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props, context));

    _this.wrapOnClick = _this.wrapOnClick.bind(_this);
    _this.wrapOnKeyDown = _this.wrapOnKeyDown.bind(_this);
    _this.wrapOnKeyUp = _this.wrapOnKeyUp.bind(_this);
    _this.handleSelection = _this.handleSelection.bind(_this);
    _this.setItemNode = _this.setItemNode.bind(_this);
    _this.state = {
      isSelected: props.isSelected && props.isSelectable && !context.isGroupItem,
      isActive: false
    };
    return _this;
  }

  _createClass(MenuItem, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.isActive && this.itemNode) {
        this.itemNode.focus();
      }
    }
  }, {
    key: 'setItemNode',
    value: function setItemNode(node) {
      if (node) {
        this.itemNode = node;
      }
    }
  }, {
    key: 'handleSelection',
    value: function handleSelection(event) {
      event.preventDefault();

      if (this.props.isSelectable && !this.context.isGroupItem && !this.props.isDisabled) {
        this.setState(function (prevState) {
          return { isSelected: !prevState.isSelected };
        });

        if (this.props.onChange) {
          this.props.onChange(event, !this.state.isSelected);
        }
      }
    }
  }, {
    key: 'wrapOnClick',
    value: function wrapOnClick(event) {
      this.handleSelection(event);

      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }, {
    key: 'wrapOnKeyDown',
    value: function wrapOnKeyDown(onKeyDown) {
      var _this2 = this;

      return function (event) {
        if (event.nativeEvent.keyCode === _MenuUtils2.default.KEYCODES.ENTER || event.nativeEvent.keyCode === _MenuUtils2.default.KEYCODES.SPACE) {
          _this2.handleSelection(event);

          // Only add active style if the menu doesn't have a sub menu to avoid active style being stuck enabled
          if (!(_this2.props.subMenuItems && _this2.props.subMenuItems.length > 0)) {
            _this2.setState({ isActive: true });
          }

          if (_this2.props.onClick) {
            _this2.props.onClick(event);
          }
          // Remove active state when tab key is released while while holding the space key to avoid active style being stuck enabled
        } else if (event.nativeEvent.keyCode === _MenuUtils2.default.KEYCODES.TAB) {
          _this2.setState({ isActive: false });
        }

        if (onKeyDown) {
          onKeyDown(event);
        }
      };
    }
  }, {
    key: 'wrapOnKeyUp',
    value: function wrapOnKeyUp(onKeyUp) {
      var _this3 = this;

      return function (event) {
        if (event.nativeEvent.keyCode === _MenuUtils2.default.KEYCODES.ENTER || event.nativeEvent.keyCode === _MenuUtils2.default.KEYCODES.SPACE) {
          _this3.setState({ isActive: false });
        }

        if (onKeyUp) {
          onKeyUp(event);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          isDisabled = _props.isDisabled,
          isSelected = _props.isSelected,
          isSelectable = _props.isSelectable,
          subMenuItems = _props.subMenuItems,
          isActive = _props.isActive,
          customProps = _objectWithoutProperties(_props, ['text', 'isDisabled', 'isSelected', 'isSelectable', 'subMenuItems', 'isActive']);

      var _context = this.context,
          isGroupItem = _context.isGroupItem,
          isSelectableMenu = _context.isSelectableMenu;


      var attributes = _extends({}, customProps);
      attributes.tabIndex = isDisabled ? '-1' : '0';
      attributes['aria-disabled'] = isDisabled;

      // This is passed down by the single select list in group item and not needed
      delete attributes.hasChevron;

      if (isDisabled) {
        delete attributes.onClick;
        delete attributes.onKeyDown;
      } else {
        attributes.onClick = this.wrapOnClick;
        attributes.onKeyDown = this.wrapOnKeyDown(attributes.onKeyDown);
        attributes.onKeyUp = this.wrapOnKeyUp(attributes.Up);
      }

      var markAsSelected = this.state.isSelected || isGroupItem && isSelected;

      var itemClassNames = cx(['item', { selected: markAsSelected }, { 'is-disabled': isDisabled },
      // eslint-disable-next-line quote-props
      { 'active': this.state.isActive }, attributes.className]);

      var textContainer = _react2.default.createElement(
        'div',
        { className: cx(['text']) },
        text
      );
      var hasChevron = subMenuItems.length > 0;
      var content = textContainer;
      if (hasChevron || isSelectableMenu) {
        content = _react2.default.createElement(_terraArrange2.default, {
          fitStart: isSelectableMenu ? _react2.default.createElement(_IconCheckmark2.default, { className: cx(['checkmark']) }) : null,
          fill: textContainer,
          fitEnd: hasChevron ? _react2.default.createElement(_IconChevronRight2.default, { className: cx(['chevron']) }) : null,
          align: 'center'
        });
      }

      var role = 'menuitem';
      if (isGroupItem) {
        role = 'menuitemradio';
      } else if (isSelectable) {
        role = 'menuitemcheckbox';
      }

      return _react2.default.createElement(
        'li',
        _extends({}, attributes, { className: itemClassNames, ref: this.setItemNode, role: role, 'aria-checked': markAsSelected }),
        content
      );
    }
  }]);

  return MenuItem;
}(_react2.default.Component);

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;
MenuItem.contextTypes = contextTypes;

exports.default = MenuItem;