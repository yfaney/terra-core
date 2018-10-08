'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _CollapsibleMenuViewItem = require('./CollapsibleMenuViewItem');

var _CollapsibleMenuViewItem2 = _interopRequireDefault(_CollapsibleMenuViewItem);

var _CollapsibleMenuViewItemGroup = require('./CollapsibleMenuViewItemGroup');

var _CollapsibleMenuViewItemGroup2 = _interopRequireDefault(_CollapsibleMenuViewItemGroup);

var _CollapsibleMenuViewToggle = require('./CollapsibleMenuViewToggle');

var _CollapsibleMenuViewToggle2 = _interopRequireDefault(_CollapsibleMenuViewToggle);

var _CollapsibleMenuViewDivider = require('./CollapsibleMenuViewDivider');

var _CollapsibleMenuViewDivider2 = _interopRequireDefault(_CollapsibleMenuViewDivider);

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
   * Item/ItemGroup/Divider elements to display in the view. Items that will fit in the space available will
   * display face-up the remainder will be rolled into a menu
   */
  children: _propTypes2.default.node.isRequired,

  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760, or auto
   */
  menuWidth: _propTypes2.default.oneOf(Object.keys(_CollapsibleMenuViewItem2.default.Opts.widths)),

  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: _propTypes2.default.func
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  }
};

var CollapsibleMenuView = function (_React$Component) {
  _inherits(CollapsibleMenuView, _React$Component);

  function CollapsibleMenuView(props) {
    _classCallCheck(this, CollapsibleMenuView);

    var _this = _possibleConstructorReturn(this, (CollapsibleMenuView.__proto__ || Object.getPrototypeOf(CollapsibleMenuView)).call(this, props));

    _this.setContainer = _this.setContainer.bind(_this);
    _this.setMenuButton = _this.setMenuButton.bind(_this);
    _this.resetCache = _this.resetCache.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    _this.resetCache();
    return _this;
  }

  _createClass(CollapsibleMenuView, [{
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
      this.handleResize(this.contentWidth);
      this.resizeObserver.observe(this.container);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.isCalculating) {
        this.isCalculating = false;
        this.handleResize(this.contentWidth);
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
    key: 'setMenuButton',
    value: function setMenuButton(node) {
      if (node === null) {
        return;
      }
      this.menuButton = node;
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
      var menuButtonWidth = this.menuButton.getBoundingClientRect().width;
      var availableWidth = width - menuButtonWidth;
      var hiddenStartIndex = -1;
      var calcWidth = 0;
      var menuHidden = true;

      for (var i = 0; i < this.props.children.length; i += 1) {
        var child = this.container.children[i];
        var childWidth = child.getBoundingClientRect().width;
        calcWidth += childWidth;

        if (calcWidth > availableWidth) {
          // If last child fits in the available space, leave it face up
          if (i === this.props.children.length - 1 && calcWidth <= width) {
            break;
          }

          hiddenStartIndex = i;
          menuHidden = false;
          break;
        }
      }

      if (this.menuHidden !== menuHidden || this.hiddenStartIndex !== hiddenStartIndex) {
        this.menuHidden = menuHidden;
        this.hiddenStartIndex = hiddenStartIndex;
        this.forceUpdate();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          boundingRef = _props.boundingRef,
          menuWidth = _props.menuWidth,
          customProps = _objectWithoutProperties(_props, ['children', 'boundingRef', 'menuWidth']);

      var intl = this.context.intl;

      var ellipsesText = intl.formatMessage({ id: 'Terra.collapsibleMenuView.more' });
      var visibleChildren = _react2.default.Children.toArray(children);

      var hiddenChildren = null;
      if (this.hiddenStartIndex >= 0) {
        hiddenChildren = visibleChildren.splice(this.hiddenStartIndex);
      }

      var collapsibleMenuViewClassName = cx(['collapsible-menu-view', { 'is-calculating': this.isCalculating }, customProps.className]);
      var menuButtonClassName = cx(['menu-button', { hidden: this.menuHidden }]);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: collapsibleMenuViewClassName, ref: this.setContainer }),
        visibleChildren,
        _react2.default.createElement(
          'div',
          { className: menuButtonClassName, ref: this.setMenuButton },
          _react2.default.createElement(_CollapsibleMenuViewItem2.default, {
            'data-collapsible-menu-toggle': true,
            icon: _react2.default.createElement('span', { className: cx('menu-button-icon') }),
            subMenuItems: hiddenChildren,
            boundingRef: boundingRef,
            menuWidth: menuWidth,
            isIconOnly: true,
            text: ellipsesText
          })
        )
      );
    }
  }]);

  return CollapsibleMenuView;
}(_react2.default.Component);

CollapsibleMenuView.Item = _CollapsibleMenuViewItem2.default;
CollapsibleMenuView.ItemGroup = _CollapsibleMenuViewItemGroup2.default;
CollapsibleMenuView.Toggle = _CollapsibleMenuViewToggle2.default;
CollapsibleMenuView.Divider = _CollapsibleMenuViewDivider2.default;

CollapsibleMenuView.propTypes = propTypes;
CollapsibleMenuView.contextTypes = contextTypes;

exports.default = CollapsibleMenuView;