'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraBase = require('terra-base');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraList = require('terra-list');

var _terraList2 = _interopRequireDefault(_terraList);

var _IconLeft = require('terra-icon/lib/icon/IconLeft');

var _IconLeft2 = _interopRequireDefault(_IconLeft);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _IconClose = require('terra-icon/lib/icon/IconClose');

var _IconClose2 = _interopRequireDefault(_IconClose);

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _MenuUtils = require('./_MenuUtils');

var _MenuUtils2 = _interopRequireDefault(_MenuUtils);

var _MenuModule = require('./Menu.module.scss');

var _MenuModule2 = _interopRequireDefault(_MenuModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_MenuModule2.default);

var propTypes = {
  /**
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: _terraBase.intlShape.isRequired,
  /**
   * Title the should be displayed in header.
   */
  title: _propTypes2.default.string,
  /**
   * Callback function for when back button is clicked.
   */
  onRequestBack: _propTypes2.default.func,
  /**
   * Callback function for when close button is clicked.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * Callback function that takes the content to be displayed next and is called when an item with nested content is clicked.
   */
  onRequestNext: _propTypes2.default.func.isRequired,
  /**
   * Menu Items/Menu Groups/Menu Dividers to be displayed.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Index within the Menu Stack.
   */
  index: _propTypes2.default.number.isRequired,
  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: _propTypes2.default.func,
  /**
   * Indicates if the menu content should set default focus on itself.
   */
  isFocused: _propTypes2.default.bool,
  /**
   * Indicates if menu's height has been constrained by bounding container.
   */
  isHeightBounded: _propTypes2.default.bool,
  /**
   * Indicates if menu's width has been constrained by bounding container.
   */
  isWidthBounded: _propTypes2.default.bool,
  /**
   * Fixed height for content.
   */
  fixedHeight: _propTypes2.default.number,
  /**
   * Fixed width for content.
   */
  fixedWidth: _propTypes2.default.number,
  /**
   * Width for content.
   */
  contentWidth: _propTypes2.default.number,
  /**
   * Indicates if the content should be hidden.
   */
  isHidden: _propTypes2.default.bool,
  /**
   * Ref callback function to be applied to content container.
   */
  refCallback: _propTypes2.default.func
};

var defaultProps = {
  isFocused: false,
  title: '',
  isWidthBounded: false,
  isHeightBounded: false,
  isHidden: false
};

var childContextTypes = {
  isSelectableMenu: _propTypes2.default.bool
};

var MenuContent = function (_React$Component) {
  _inherits(MenuContent, _React$Component);

  function MenuContent(props) {
    _classCallCheck(this, MenuContent);

    var _this = _possibleConstructorReturn(this, (MenuContent.__proto__ || Object.getPrototypeOf(MenuContent)).call(this, props));

    _this.wrapOnClick = _this.wrapOnClick.bind(_this);
    _this.wrapOnKeyDown = _this.wrapOnKeyDown.bind(_this);
    _this.buildHeader = _this.buildHeader.bind(_this);
    _this.isSelectable = _this.isSelectable.bind(_this);
    _this.onKeyDownBackButton = _this.onKeyDownBackButton.bind(_this);
    _this.validateFocus = _this.validateFocus.bind(_this);
    _this.needsFocus = props.isFocused;
    _this.handleContainerRef = _this.handleContainerRef.bind(_this);

    _this.state = {
      focusIndex: -1
    };
    return _this;
  }

  _createClass(MenuContent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { isSelectableMenu: this.isSelectable() };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.isFocused) {
        this.needsFocus = this.needsFocus || this.props.isFocused !== newProps.isFocused;
      } else {
        this.needsFocus = false;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.validateFocus(this.contentNode);
    }
  }, {
    key: 'onKeyDownBackButton',
    value: function onKeyDownBackButton(event) {
      if (event.nativeEvent.keyCode === _MenuUtils2.default.KEYCODES.ENTER || event.nativeEvent.keyCode === _MenuUtils2.default.KEYCODES.SPACE) {
        event.preventDefault();
        this.props.onRequestBack();
      }
    }
  }, {
    key: 'validateFocus',
    value: function validateFocus(node) {
      if (this.needsFocus && node) {
        node.focus();
        this.needsFocus = document.activeElement !== node;
      }
    }
  }, {
    key: 'handleContainerRef',
    value: function handleContainerRef(node) {
      if (this.props.refCallback) {
        this.props.refCallback(node);
      }
      this.contentNode = node;
      this.validateFocus(node);
    }
  }, {
    key: 'isSelectable',
    value: function isSelectable() {
      var isSelectable = false;
      _react2.default.Children.forEach(this.props.children, function (child) {
        if (child.props.children || child.props.isSelectable) {
          isSelectable = true;
        }
      });

      return isSelectable;
    }
  }, {
    key: 'wrapOnClick',
    value: function wrapOnClick(item) {
      var _this2 = this;

      var onClick = item.props.onClick;

      return function (event) {
        event.preventDefault();
        if (_this2.state.focusIndex !== -1) {
          _this2.setState({ focusIndex: -1 });
        }

        if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
          _this2.props.onRequestNext(item);
        }

        if (onClick) {
          onClick(event);
        }
      };
    }
  }, {
    key: 'wrapOnKeyDown',
    value: function wrapOnKeyDown(item, index) {
      var _this3 = this;

      var onKeyDown = item.props.onKeyDown;

      return function (event) {
        event.preventDefault();
        if (event.nativeEvent.keyCode === _MenuUtils2.default.KEYCODES.ENTER || event.nativeEvent.keyCode === _MenuUtils2.default.KEYCODES.SPACE) {
          if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
            _this3.props.onRequestNext(item);
          }
        } else if (event.nativeEvent.keyCode === _MenuUtils2.default.KEYCODES.RIGHT_ARROW) {
          if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
            _this3.props.onRequestNext(item);
          }
        } else if (event.nativeEvent.keyCode === _MenuUtils2.default.KEYCODES.LEFT_ARROW) {
          _this3.props.onRequestBack();
        } else if (event.nativeEvent.keyCode === _MenuUtils2.default.KEYCODES.UP_ARROW) {
          _this3.setState({ focusIndex: index - 1 });
        } else if (event.nativeEvent.keyCode === _MenuUtils2.default.KEYCODES.DOWN_ARROW) {
          _this3.setState({ focusIndex: index + 1 });
        }

        if (onKeyDown) {
          onKeyDown(event);
        }
      };
    }
  }, {
    key: 'buildHeader',
    value: function buildHeader(isFullScreen) {
      var intl = this.props.intl;

      var backBtnText = intl.formatMessage({ id: 'Terra.menu.back' });
      var closeBtnText = intl.formatMessage({ id: 'Terra.menu.close' });

      var closeIcon = _react2.default.createElement(_IconClose2.default, null);
      var closeButton = _react2.default.createElement('div', null);
      if (this.props.onRequestClose && isFullScreen) {
        closeButton = _react2.default.createElement(
          'button',
          { type: 'button', className: cx(['header-button']), onClick: this.props.onRequestClose, 'aria-label': closeBtnText },
          closeIcon
        );
      }

      var backIcon = _react2.default.createElement(_IconLeft2.default, null);
      var backButton = this.props.index > 0 ?
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      _react2.default.createElement(
        'div',
        {
          role: 'button',
          onClick: this.props.onRequestBack,
          onKeyDown: this.onKeyDownBackButton,
          tabIndex: '0',
          'aria-label': backBtnText
        },
        _react2.default.createElement(_terraArrange2.default, {
          align: 'center',
          fitStart: _react2.default.createElement(
            'div',
            { className: cx(['header-button']) },
            backIcon
          ),
          fill: _react2.default.createElement(
            'h1',
            { className: cx(['header-title']) },
            this.props.title
          )
        })
      ) : _react2.default.createElement('div', null);

      return _react2.default.createElement(_terraArrange2.default, {
        className: cx(['header']),
        fitEnd: closeButton,
        fill: backButton,
        align: 'center'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var index = -1;
      var items = this.props.children ? [] : undefined;
      _react2.default.Children.map(this.props.children, function (item) {
        var onClick = _this4.wrapOnClick(item);
        var newItem = item;

        // Check if child is an enabled Menu.Item
        if (item.props.text && !item.props.isDisabled) {
          index += 1;
          var onKeyDown = _this4.wrapOnKeyDown(item, index);
          var isActive = _this4.state.focusIndex === index;

          newItem = _react2.default.cloneElement(item, {
            onClick: onClick,
            onKeyDown: onKeyDown,
            isActive: isActive
          });
          // If the child has children then it is an item group, so iterate through it's children
        } else if (item.props.children) {
          var children = item.props.children ? [] : undefined;
          _react2.default.Children.forEach(item.props.children, function (child) {
            if (!child.props.isDisabled) {
              index += 1;
              var clonedElement = _react2.default.cloneElement(child, {
                onKeyDown: _this4.wrapOnKeyDown(child, index),
                isActive: index === _this4.state.focusIndex
              });
              children.push(clonedElement);
            } else {
              children.push(child);
            }
          });
          newItem = _react2.default.cloneElement(item, {}, children);
        }

        items.push(newItem);
      });
      var boundingFrame = this.props.boundingRef ? this.props.boundingRef() : undefined;
      var isFullScreen = _MenuUtils2.default.isFullScreen(this.props.isHeightBounded, this.props.isWidthBounded, boundingFrame, this.props.contentWidth);
      var isSubMenu = this.props.index > 0;
      var contentClass = cx(['content', { submenu: isSubMenu }, { 'hidden-page': this.props.isHidden }, { fullscreen: isFullScreen }]);

      var header = void 0;
      if (isFullScreen || isSubMenu) {
        header = this.buildHeader(isFullScreen);
      }
      var contentHeight = this.props.isHeightBounded ? '100%' : this.props.fixedHeight;
      var contentPosition = this.props.isHeightBounded ? 'relative' : 'static';
      var contentWidth = this.props.isWidthBounded ? undefined : this.props.fixedWidth;

      return _react2.default.createElement(
        'div',
        {
          ref: this.handleContainerRef,
          className: contentClass,
          style: { height: contentHeight, width: contentWidth, position: contentPosition },
          tabIndex: '-1'
        },
        _react2.default.createElement(
          _terraContentContainer2.default,
          { header: header, fill: this.props.isHeightBounded || this.props.index > 0 },
          _react2.default.createElement(
            _terraList2.default,
            { className: cx(['list']), role: 'menu' },
            items
          )
        )
      );
    }
  }]);

  return MenuContent;
}(_react2.default.Component);

MenuContent.propTypes = propTypes;
MenuContent.defaultProps = defaultProps;
MenuContent.childContextTypes = childContextTypes;

exports.default = (0, _terraBase.injectIntl)(MenuContent);