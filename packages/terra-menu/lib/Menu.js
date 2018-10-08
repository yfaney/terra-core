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

var _terraPopup = require('terra-popup');

var _terraPopup2 = _interopRequireDefault(_terraPopup);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuItemGroup = require('./MenuItemGroup');

var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);

var _MenuDivider = require('./MenuDivider');

var _MenuDivider2 = _interopRequireDefault(_MenuDivider);

var _MenuContent = require('./_MenuContent');

var _MenuContent2 = _interopRequireDefault(_MenuContent);

var _MenuModule = require('./Menu.module.scss');

var _MenuModule2 = _interopRequireDefault(_MenuModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_MenuModule2.default);

var propTypes = {
  /**
   * List of Menu.Item(s)/Menu.ItemGroup(s)/Menu.Divider(s) to be displayed as content within the Menu.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: _propTypes2.default.func.isRequired,
  /**
   * Target element for the menu to anchor to.
   */
  targetRef: _propTypes2.default.func.isRequired,
  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: _propTypes2.default.func,
  /**
   * CSS classnames that are append to the arrow.
   */
  classNameArrow: _propTypes2.default.string,
  /**
   * CSS classnames that are append to the menu content inner.
   */
  classNameContent: _propTypes2.default.string,
  /**
   * CSS classnames that are append to the overlay.
   */
  classNameOverlay: _propTypes2.default.string,
  /**
   * Should the menu be presented as open.
   */
  isOpen: _propTypes2.default.bool,
  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760 or auto
   */
  contentWidth: _propTypes2.default.oneOf(Object.keys(_terraPopup2.default.Opts.widths)),
  /**
   * Indicates if the menu should have an center aligned arrow displayed on dropdown.
   * Otherwise, the menu will display without an arrow and right aligned.
   */
  isArrowDisplayed: _propTypes2.default.bool
};

var defaultProps = {
  isArrowDisplayed: false,
  isOpen: false,
  contentWidth: '240'
};

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.setPageDimensions = _this.setPageDimensions.bind(_this);
    _this.push = _this.push.bind(_this);
    _this.pop = _this.pop.bind(_this);
    _this.state = { stack: [_this] };
    return _this;
  }

  _createClass(Menu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.isOpen && !nextProps.isOpen || this.props.children.length !== nextProps.children.length) {
        this.setState({ stack: [this] });
      }
    }
  }, {
    key: 'setPageDimensions',
    value: function setPageDimensions(node) {
      if (node) {
        this.pageHeight = node.clientHeight;
        if (this.props.contentWidth === 'auto') {
          this.pageWidth = node.clientWidth;
        }
      } else {
        this.pageHeight = undefined;
        this.pageWidth = undefined;
      }
    }
  }, {
    key: 'pop',
    value: function pop() {
      if (this.state.stack.length > 1) {
        this.setState(function (prevState) {
          var newStack = prevState.stack.slice();
          newStack.pop();
          return { stack: newStack };
        });
      }
    }
  }, {
    key: 'push',
    value: function push(item) {
      this.setState(function (prevState) {
        var newStack = prevState.stack.slice();
        newStack.push(item);
        return { stack: newStack };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          boundingRef = _props.boundingRef,
          classNameArrow = _props.classNameArrow,
          classNameContent = _props.classNameContent,
          classNameOverlay = _props.classNameOverlay,
          onRequestClose = _props.onRequestClose,
          isOpen = _props.isOpen,
          children = _props.children,
          targetRef = _props.targetRef,
          isArrowDisplayed = _props.isArrowDisplayed,
          contentWidth = _props.contentWidth,
          customProps = _objectWithoutProperties(_props, ['boundingRef', 'classNameArrow', 'classNameContent', 'classNameOverlay', 'onRequestClose', 'isOpen', 'children', 'targetRef', 'isArrowDisplayed', 'contentWidth']);

      var arrowClass = cx(['arrow', { submenu: this.state.stack.length > 1 }, classNameArrow]);

      var visiblePage = this.state.stack.length - 1;
      var slides = this.state.stack.map(function (item, index) {
        return _react2.default.createElement(
          _MenuContent2.default
          // eslint-disable-next-line react/no-array-index-key
          ,
          { key: 'MenuPage-' + index,
            title: item.props.text,
            onRequestNext: _this2.push,
            onRequestBack: _this2.pop,
            onRequestClose: _this2.props.onRequestClose,
            isHidden: index !== visiblePage,
            fixedHeight: _this2.pageHeight,
            fixedWidth: _this2.pageWidth,
            contentWidth: _terraPopup2.default.Opts.widths[contentWidth],
            refCallback: visiblePage === 0 ? _this2.setPageDimensions : null,
            index: index,
            boundingRef: boundingRef,
            isFocused: index === visiblePage
          },
          item.props.children || item.props.subMenuItems
        );
      });

      return _react2.default.createElement(
        _terraPopup2.default,
        _extends({}, customProps, {
          boundingRef: boundingRef,
          isArrowDisplayed: isArrowDisplayed,
          attachmentBehavior: 'flip',
          contentAttachment: isArrowDisplayed ? 'top center' : 'top right',
          contentHeight: 'auto',
          contentWidth: this.props.contentWidth,
          classNameArrow: arrowClass,
          classNameContent: classNameContent,
          classNameOverlay: classNameOverlay,
          isOpen: isOpen,
          onRequestClose: onRequestClose,
          targetRef: targetRef,
          isHeaderDisabled: true,
          isContentFocusDisabled: true
        }),
        slides
      );
    }
  }]);

  return Menu;
}(_react2.default.Component);

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.Item = _MenuItem2.default;
Menu.ItemGroup = _MenuItemGroup2.default;
Menu.Divider = _MenuDivider2.default;
Menu.Opts = {
  widths: _terraPopup2.default.Opts.widths
};

exports.default = Menu;