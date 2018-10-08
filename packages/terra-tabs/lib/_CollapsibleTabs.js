'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

require('terra-base/lib/baseStyles');

var _TabUtils = require('./TabUtils');

var _TabUtils2 = _interopRequireDefault(_TabUtils);

var _TabMenu = require('./_TabMenu');

var _TabMenu2 = _interopRequireDefault(_TabMenu);

var _TabsModule = require('./Tabs.module.scss');

var _TabsModule2 = _interopRequireDefault(_TabsModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_TabsModule2.default);

var propTypes = {
  /**
   * Key of the current active tab.
   */
  activeKey: _propTypes2.default.string.isRequired,

  /**
   * Index of the current active tab.
   */
  activeIndex: _propTypes2.default.number.isRequired,

  /**
   * Tabs to be displayed in the collapsible tab bar.
   */
  children: _propTypes2.default.node.isRequired,

  /**
   * Tabs style. One of: "modular-centered", "modular-left-aligned", or "structural".
   */
  variant: _propTypes2.default.oneOf(['modular-centered', 'modular-left-aligned', 'structural']).isRequired,

  /**
   * Callback function when selection has changed.
   * Parameters: 1. Event 2. Selected pane element
   */
  onChange: _propTypes2.default.func.isRequired,

  /**
   * Callback function when label truncation state has changed.
   * Parameters: 1. Bool indicating if any of the tab labels have been truncated.
   */
  onTruncationChange: _propTypes2.default.func
};

var CollapsibleTabs = function (_React$Component) {
  _inherits(CollapsibleTabs, _React$Component);

  function CollapsibleTabs(props) {
    _classCallCheck(this, CollapsibleTabs);

    var _this = _possibleConstructorReturn(this, (CollapsibleTabs.__proto__ || Object.getPrototypeOf(CollapsibleTabs)).call(this, props));

    _this.setContainer = _this.setContainer.bind(_this);
    _this.setMenuRef = _this.setMenuRef.bind(_this);
    _this.resetCache = _this.resetCache.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    _this.handleSelectionAnimation = _this.handleSelectionAnimation.bind(_this);
    _this.handleOnKeyDown = _this.handleOnKeyDown.bind(_this);
    _this.handleFocusLeft = _this.handleFocusLeft.bind(_this);
    _this.handleFocusRight = _this.handleFocusRight.bind(_this);
    _this.resetCache();
    return _this;
  }

  _createClass(CollapsibleTabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.resizeObserver = new _resizeObserverPolyfill2.default(function (entries) {
        _this2.contentWidth = entries[0].contentRect.width;
        if (!_this2.isCalculating) {
          _this2.animationFrameID = window.requestAnimationFrame(function () {
            // Resetting the cache so that all elements will be rendered face-up for width calculations
            _this2.resetCache();
            _this2.forceUpdate();
          });
        }
      });
      this.resizeObserver.observe(this.container);
      this.handleResize(this.contentWidth);
      this.handleSelectionAnimation();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.isCalculating) {
        this.isCalculating = false;
        this.handleResize(this.contentWidth);
      } else {
        this.handleSelectionAnimation();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.cancelAnimationFrame(this.animationFrameID);
      this.resizeObserver.disconnect(this.container);
      this.container = null;
    }
  }, {
    key: 'setContainer',
    value: function setContainer(node) {
      if (node === null) {
        return;
      } // Ref callbacks happen on mount and unmount, element will be null on unmount
      this.container = node;
    }
  }, {
    key: 'setMenuRef',
    value: function setMenuRef(node) {
      if (node === null) {
        return;
      }
      this.menuRef = node;
    }
  }, {
    key: 'resetCache',
    value: function resetCache() {
      this.animationFrameID = null;
      this.hiddenStartIndex = -1;
      this.isCalculating = true;
      this.menuHidden = false;
    }
  }, {
    key: 'handleResize',
    value: function handleResize(width) {
      var menuMarginLeft = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-left'), 10);
      var menuMarginRight = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-right'), 10);
      var menuToggleWidth = this.menuRef.getBoundingClientRect().width + menuMarginLeft + menuMarginRight;
      var availableWidth = width - menuToggleWidth;

      // Calculate hide index
      var childrenCount = _react2.default.Children.count(this.props.children);
      var newHideIndex = childrenCount;
      var calcMinWidth = 0;
      var isMenuHidden = true;
      for (var i = 0; i < this.props.children.length; i += 1) {
        var tab = this.container.children[i];
        var tabMarginLeft = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-left'), 10);
        var tabMarginRight = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-right'), 10);
        var minWidth = parseInt(window.getComputedStyle(tab, null).getPropertyValue('min-width'), 10);
        calcMinWidth += minWidth + tabMarginLeft + tabMarginRight;
        if (calcMinWidth > availableWidth && !(i === childrenCount - 1 && calcMinWidth <= width)) {
          newHideIndex = i;
          isMenuHidden = false;
          break;
        }
      }

      // Calculate if label will be truncated
      var isLabelTruncated = false;
      var calcWidth = 0;
      for (var _i = 0; _i < newHideIndex; _i += 1) {
        var _tab = this.container.children[_i];
        calcWidth += _tab.getBoundingClientRect().width;
        if (isMenuHidden && calcWidth > width || !isMenuHidden && calcWidth > availableWidth) {
          isLabelTruncated = true;
          break;
        }
      }

      this.props.onTruncationChange(isLabelTruncated);

      if (this.menuHidden !== isMenuHidden || this.hiddenStartIndex !== newHideIndex) {
        this.menuHidden = isMenuHidden;
        this.hiddenStartIndex = newHideIndex;
        this.forceUpdate();
      }
    }
  }, {
    key: 'handleSelectionAnimation',
    value: function handleSelectionAnimation() {
      if (this.selectionBar && window.getComputedStyle(this.selectionBar, null).getPropertyValue('transition-property').includes('transform')) {
        var activeIndex = this.props.activeIndex > this.hiddenStartIndex ? this.hiddenStartIndex : this.props.activeIndex;
        var selectedTab = this.container.children[activeIndex];

        if (selectedTab) {
          var isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
          var tabRect = selectedTab.getBoundingClientRect();
          var barWidth = tabRect.width;
          var barLeft = tabRect.left - this.container.getBoundingClientRect().left;
          if (isRTL) {
            barLeft = tabRect.right - this.container.getBoundingClientRect().right;
          }

          this.selectionBar.style.width = barWidth + 'px';
          this.selectionBar.style.transform = 'translate3d(' + barLeft + 'px,0,0)';
        }
      }
    }
  }, {
    key: 'handleOnKeyDown',
    value: function handleOnKeyDown(event) {
      // If there are less than 2 children we don't need to worry about keyboard navigation
      if (_react2.default.Children.count(this.props.children) < 2) {
        return;
      }

      var isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
      var visibleChildren = this.container.children;

      if (event.nativeEvent.keyCode === _TabUtils2.default.KEYCODES.LEFT_ARROW) {
        if (isRTL) {
          this.handleFocusRight(visibleChildren, event);
        } else {
          this.handleFocusLeft(visibleChildren, event);
        }
      } else if (event.nativeEvent.keyCode === _TabUtils2.default.KEYCODES.RIGHT_ARROW) {
        if (isRTL) {
          this.handleFocusLeft(visibleChildren, event);
        } else {
          this.handleFocusRight(visibleChildren, event);
        }
      }
    }
  }, {
    key: 'handleFocusRight',
    value: function handleFocusRight(visibleChildren, event) {
      if (this.props.activeIndex >= this.hiddenStartIndex) {
        return;
      }

      for (var i = this.props.activeIndex + 1; i < visibleChildren.length; i += 1) {
        if (!this.props.children[i].props.isDisabled) {
          if (visibleChildren[i] === this.menuRef) {
            this.menuRef.focus();
            break;
          } else {
            this.props.onChange(event, this.props.children[i]);
            break;
          }
        }
      }
    }
  }, {
    key: 'handleFocusLeft',
    value: function handleFocusLeft(visibleChildren, event) {
      var startIndex = this.props.activeIndex - 1;
      if (startIndex >= this.hiddenStartIndex || document.activeElement === this.menuRef) {
        startIndex = this.hiddenStartIndex - 1;
      }

      for (var i = startIndex; i >= 0; i -= 1) {
        if (!this.props.children[i].props.isDisabled) {
          if (document.activeElement === this.menuRef) {
            this.container.focus();
          }
          this.props.onChange(event, this.props.children[i]);
          break;
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var visibleChildren = [];
      var hiddenChildren = [];

      _react2.default.Children.forEach(this.props.children, function (child, index) {
        if (index < _this3.hiddenStartIndex || _this3.hiddenStartIndex < 0) {
          visibleChildren.push(child);
        } else {
          hiddenChildren.push(child);
        }
      });

      var menu = this.menuHidden ? null : _react2.default.createElement(
        _TabMenu2.default,
        { refCallback: this.setMenuRef, activeKey: this.props.activeKey },
        hiddenChildren
      );

      var selectionBar = this.props.variant === 'modular-centered' || this.props.variant === 'modular-left-aligned' ? _react2.default.createElement('div', { className: cx('selection-bar'), ref: function ref(node) {
          if (node) {
            _this3.selectionBar = node;
          }
        } }) : null;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          {
            className: cx(['collapsible-tabs-container', { 'is-calculating': this.isCalculating }]),
            ref: this.setContainer,
            tabIndex: '0',
            onKeyDown: this.handleOnKeyDown,
            role: 'tablist'
          },
          visibleChildren,
          menu
        ),
        selectionBar
      );
    }
  }]);

  return CollapsibleTabs;
}(_react2.default.Component);

CollapsibleTabs.propTypes = propTypes;

exports.default = CollapsibleTabs;