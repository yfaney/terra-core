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

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraButtonGroup = require('terra-button-group');

var _terraButtonGroup2 = _interopRequireDefault(_terraButtonGroup);

require('terra-base/lib/baseStyles');

var _CollapsibleMenu = require('./_CollapsibleMenu');

var _CollapsibleMenu2 = _interopRequireDefault(_CollapsibleMenu);

var _CollapsibleMenuViewModule = require('./CollapsibleMenuView.module.scss');

var _CollapsibleMenuViewModule2 = _interopRequireDefault(_CollapsibleMenuViewModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_CollapsibleMenuViewModule2.default);

var propTypes = {
  /**
   * Sets the item's text
   */
  text: _propTypes2.default.string.isRequired,

  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: _propTypes2.default.func,

  /**
  * An optional icon. Nested inline with the text when provided
  */
  icon: _propTypes2.default.element,

  /**
   * Indicates if only the icon should display when item is face-up. (Text should still be given to be displayed when item is in the menu)
   */
  isIconOnly: _propTypes2.default.bool,

  /**
  * Reverses the position of the icon and text
  */
  isReversed: _propTypes2.default.bool,

  /**
   * Indicates if the item start as selected when placed in a button group
   */
  isSelected: _propTypes2.default.bool,

  /**
   * Indicates if the item should be disabled.
   */
  isDisabled: _propTypes2.default.bool,

  /**
   * Indicates that clicking on this item while displayed inside a menu should close the menu.
   */
  shouldCloseOnClick: _propTypes2.default.bool,

  /**
   * List of Menu.Items to display in a submenu when this item is selected.
   */
  subMenuItems: _propTypes2.default.arrayOf(_propTypes2.default.element),

  /**
   * Callback function for when the item is clicked
   */
  onClick: _propTypes2.default.func,

  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760, or auto
   */
  menuWidth: _propTypes2.default.oneOf(Object.keys(_CollapsibleMenu2.default.Opts.widths))
};

var contextTypes = {
  isCollapsibleGroupItem: _propTypes2.default.bool,
  isCollapsibleMenuItem: _propTypes2.default.bool
};

var defaultProps = {
  isSelected: false,
  isReversed: false,
  shouldCloseOnClick: true,
  isIconOnly: false
};

var CollapsibleMenuViewItem = function (_React$Component) {
  _inherits(CollapsibleMenuViewItem, _React$Component);

  function CollapsibleMenuViewItem(props) {
    _classCallCheck(this, CollapsibleMenuViewItem);

    var _this = _possibleConstructorReturn(this, (CollapsibleMenuViewItem.__proto__ || Object.getPrototypeOf(CollapsibleMenuViewItem)).call(this, props));

    _this.setButtonNode = _this.setButtonNode.bind(_this);
    _this.getButtonNode = _this.getButtonNode.bind(_this);
    return _this;
  }

  _createClass(CollapsibleMenuViewItem, [{
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
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          isIconOnly = _props.isIconOnly,
          isReversed = _props.isReversed,
          text = _props.text,
          isSelected = _props.isSelected,
          isDisabled = _props.isDisabled,
          subMenuItems = _props.subMenuItems,
          shouldCloseOnClick = _props.shouldCloseOnClick,
          boundingRef = _props.boundingRef,
          menuWidth = _props.menuWidth,
          customProps = _objectWithoutProperties(_props, ['icon', 'isIconOnly', 'isReversed', 'text', 'isSelected', 'isDisabled', 'subMenuItems', 'shouldCloseOnClick', 'boundingRef', 'menuWidth']);

      var _context = this.context,
          isCollapsibleGroupItem = _context.isCollapsibleGroupItem,
          isCollapsibleMenuItem = _context.isCollapsibleMenuItem;

      var attributes = _extends({}, customProps);
      var item = void 0;

      if (isCollapsibleMenuItem) {
        item = _react2.default.createElement(_CollapsibleMenu2.default.Item, _extends({}, attributes, {
          text: text,
          isSelected: isSelected && isCollapsibleGroupItem,
          isDisabled: isDisabled,
          subMenuItems: subMenuItems
        }));
      } else if (isCollapsibleGroupItem) {
        item = _react2.default.createElement(_terraButtonGroup2.default.Button, _extends({}, attributes, {
          icon: icon,
          text: text,
          isDisabled: isDisabled
        }));
      } else if (subMenuItems && subMenuItems.length > 0) {
        item = _react2.default.createElement(
          _CollapsibleMenu2.default,
          {
            contentWidth: menuWidth,
            boundingRef: boundingRef,
            button: _react2.default.createElement(_terraButton2.default, _extends({}, attributes, {
              icon: icon,
              text: text,
              isReversed: isReversed,
              isDisabled: isDisabled,
              onClick: this.handleButtonClick,
              isIconOnly: isIconOnly
            }))
          },
          subMenuItems
        );
      } else {
        item = _react2.default.createElement(
          'div',
          { className: cx('face-up-item') },
          _react2.default.createElement(_terraButton2.default, _extends({}, attributes, {
            icon: icon,
            text: text,
            isReversed: isReversed,
            isDisabled: isDisabled,
            isIconOnly: isIconOnly
          }))
        );
      }

      return item;
    }
  }]);

  return CollapsibleMenuViewItem;
}(_react2.default.Component);

CollapsibleMenuViewItem.propTypes = propTypes;
CollapsibleMenuViewItem.defaultProps = defaultProps;
CollapsibleMenuViewItem.contextTypes = contextTypes;
CollapsibleMenuViewItem.Opts = {
  widths: _CollapsibleMenu2.default.Opts.widths
};

exports.default = CollapsibleMenuViewItem;