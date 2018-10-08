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

var _focusTrapReact = require('focus-trap-react');

var _focusTrapReact2 = _interopRequireDefault(_focusTrapReact);

require('terra-base/lib/baseStyles');

var _OverlayModule = require('./Overlay.module.scss');

var _OverlayModule2 = _interopRequireDefault(_OverlayModule);

var _OverlayContainer = require('./OverlayContainer');

var _OverlayContainer2 = _interopRequireDefault(_OverlayContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_OverlayModule2.default);

var BackgroundStyles = {
  LIGHT: 'light',
  DARK: 'dark',
  CLEAR: 'clear'
};

var propTypes = {
  /**
  * The content to be displayed within the overlay.
  */
  children: _propTypes2.default.node,
  /**
  * Indicates if the overlay is open.
  */
  isOpen: _propTypes2.default.bool,
  /**
  * The visual theme to be applied to the overlay background. Accepts 'light', 'dark', and 'clear'.
  */
  backgroundStyle: _propTypes2.default.oneOf(['light', 'dark', 'clear']),
  /**
  * Indicates if the overlay content is scrollable.
  */
  isScrollable: _propTypes2.default.bool,
  /**
  * Callback triggered on overlay click or ESC key. Setting this enables close behavior.
  */
  onRequestClose: _propTypes2.default.func,
  /**
  * Indicates if the overlay is relative to the triggering container.
  */
  isRelativeToContainer: _propTypes2.default.bool
};

var KEYCODES = {
  ESCAPE: 27
};

var defaultProps = {
  children: null,
  isOpen: false,
  backgroundStyle: BackgroundStyles.LIGHT,
  isScrollable: false,
  isRelativeToContainer: false,
  onRequestClose: undefined
};

var Overlay = function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay(props) {
    _classCallCheck(this, Overlay);

    var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props));

    _this.setContainer = _this.setContainer.bind(_this);
    _this.disableContainerChildrenFocus = _this.disableContainerChildrenFocus.bind(_this);
    _this.enableContainerChildrenFocus = _this.enableContainerChildrenFocus.bind(_this);
    _this.shouldHandleESCKeydown = _this.shouldHandleESCKeydown.bind(_this);
    _this.shouldHandleClick = _this.shouldHandleClick.bind(_this);
    _this.resetBeforeOverlay = _this.resetBeforeOverlay.bind(_this);
    return _this;
  }

  _createClass(Overlay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.shouldHandleESCKeydown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.shouldHandleESCKeydown);
    }
  }, {
    key: 'setContainer',
    value: function setContainer(node) {
      if (!node) {
        return;
      } // Ref callbacks happen on mount and unmount, element is null on unmount
      this.overflow = document.documentElement.style.overflow;

      if (this.props.isRelativeToContainer) {
        this.container = node.parentNode;
        this.containerChildren = this.container.children;
        this.disableContainerChildrenFocus();
      } else {
        document.documentElement.style.overflow = 'hidden';
        this.container = null;
      }
    }
  }, {
    key: 'disableContainerChildrenFocus',
    value: function disableContainerChildrenFocus() {
      if (this.containerChildren) {
        var prevTabIndex = [];
        for (var i = 0; i < this.containerChildren.length; i += 1) {
          prevTabIndex.push(this.containerChildren[i].tabIndex);
          this.containerChildren[i].tabIndex = -1;
        }
        this.containerChildrenPrevTabIndex = prevTabIndex;
      }
    }
  }, {
    key: 'enableContainerChildrenFocus',
    value: function enableContainerChildrenFocus() {
      if (this.containerChildren) {
        for (var i = 0; i < this.containerChildren.length; i += 1) {
          this.containerChildren[i].tabIndex = this.containerChildrenPrevTabIndex[i];
        }
      }
    }
  }, {
    key: 'shouldHandleESCKeydown',
    value: function shouldHandleESCKeydown(event) {
      if (this.props.isOpen && event.keyCode === KEYCODES.ESCAPE) {
        this.handleCloseEvent(event);
        event.preventDefault();
      }
    }
  }, {
    key: 'shouldHandleClick',
    value: function shouldHandleClick(event) {
      if (this.props.isOpen) {
        this.handleCloseEvent(event);
      }
    }
  }, {
    key: 'handleCloseEvent',
    value: function handleCloseEvent(event) {
      if (this.props.onRequestClose) {
        this.props.onRequestClose(event);
      }
    }
  }, {
    key: 'resetBeforeOverlay',
    value: function resetBeforeOverlay() {
      document.documentElement.style.overflow = this.overflow;
      if (this.props.isRelativeToContainer) {
        this.enableContainerChildrenFocus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isOpen = _props.isOpen,
          backgroundStyle = _props.backgroundStyle,
          isScrollable = _props.isScrollable,
          isRelativeToContainer = _props.isRelativeToContainer,
          onRequestClose = _props.onRequestClose,
          customProps = _objectWithoutProperties(_props, ['children', 'isOpen', 'backgroundStyle', 'isScrollable', 'isRelativeToContainer', 'onRequestClose']);

      var type = isRelativeToContainer ? 'container' : 'fullscreen';

      if (!isOpen) {
        this.resetBeforeOverlay();
        return null;
      }

      var OverlayClassNames = cx(['overlay', type, backgroundStyle, { scrollable: isScrollable }, customProps.className]);

      /*
        tabIndex set to 0 allows screen readers like VoiceOver to read overlay content when its displayed.
        Key events are added on mount.
      */
      /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-tabindex */
      var overlayComponent = _react2.default.createElement(
        'div',
        _extends({}, customProps, { ref: this.setContainer, onClick: this.shouldHandleClick, className: OverlayClassNames, tabIndex: '0' }),
        _react2.default.createElement(
          'div',
          { className: cx('content') },
          children
        )
      );
      /* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-tabindex */

      if (isRelativeToContainer) {
        return overlayComponent;
      }

      return _react2.default.createElement(
        _focusTrapReact2.default,
        null,
        overlayComponent
      );
    }
  }]);

  return Overlay;
}(_react2.default.Component);

var Opts = { BackgroundStyles: BackgroundStyles };

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
Overlay.Opts = Opts;
Overlay.Container = _OverlayContainer2.default;

exports.default = Overlay;