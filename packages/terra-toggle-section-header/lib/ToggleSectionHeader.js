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

require('terra-base/lib/baseStyles');

var _terraSectionHeader = require('terra-section-header');

var _terraSectionHeader2 = _interopRequireDefault(_terraSectionHeader);

var _terraToggle = require('terra-toggle');

var _terraToggle2 = _interopRequireDefault(_terraToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VALID_LEVELS = [1, 2, 3, 4, 5, 6];

var propTypes = {
  /**
   * Content in the body of the toggle section header component that will be expanded or hidden.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Text to be displayed in the section header.
   */
  title: _propTypes2.default.string.isRequired,
  /**
   * Sets the heading level. One of h1, h2, h3, h4, h5, or h6.
   */
  level: _propTypes2.default.oneOf(VALID_LEVELS),
  /**
   * Callback function triggered when toggle-section-header is closed.
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback function triggered when toggle-section-header is opened.
   */
  onOpen: _propTypes2.default.func,
  /**
   * Used to set props and HTML attributes on the underlying section-header.
   */
  // eslint-disable-next-line react/forbid-prop-types
  sectionHeaderAttrs: _propTypes2.default.object,
  /**
   * Sets the toggle-section-header to be animated when it is opened or closed.
   */
  isAnimated: _propTypes2.default.bool,
  /**
   * Sets the toggle-section-header initial state to open.
   */
  isInitiallyOpen: _propTypes2.default.bool,
  /**
   * Sets the background of the section header to transparent.
   */
  isTransparent: _propTypes2.default.bool
};

var defaultProps = {
  level: 2,
  sectionHeaderAttrs: {},
  isAnimated: false,
  isInitiallyOpen: false,
  isTransparent: false
};

var ToggleSectionHeader = function (_React$Component) {
  _inherits(ToggleSectionHeader, _React$Component);

  function ToggleSectionHeader(props) {
    _classCallCheck(this, ToggleSectionHeader);

    var _this = _possibleConstructorReturn(this, (ToggleSectionHeader.__proto__ || Object.getPrototypeOf(ToggleSectionHeader)).call(this, props));

    var _this$props$isInitial = _this.props.isInitiallyOpen,
        isInitiallyOpen = _this$props$isInitial === undefined ? false : _this$props$isInitial;

    _this.state = { isOpen: isInitiallyOpen };

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.wrapOnClick = _this.wrapOnClick.bind(_this);
    return _this;
  }

  _createClass(ToggleSectionHeader, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isInitiallyOpen !== this.props.isInitiallyOpen) {
        this.setState({ isOpen: nextProps.isInitiallyOpen });
      }
    }
  }, {
    key: 'handleOnClick',
    value: function handleOnClick(event) {
      event.preventDefault();

      var _props = this.props,
          onOpen = _props.onOpen,
          onClose = _props.onClose;


      if (onOpen && !this.state.isOpen) {
        onOpen();
      } else if (onClose && this.state.isOpen) {
        onClose();
      }

      this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    }
  }, {
    key: 'wrapOnClick',
    value: function wrapOnClick(onClick) {
      var _this2 = this;

      return function (event) {
        _this2.handleOnClick(event);

        if (onClick) {
          onClick(event);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          title = _props2.title,
          level = _props2.level,
          sectionHeaderAttrs = _props2.sectionHeaderAttrs,
          isAnimated = _props2.isAnimated,
          isInitiallyOpen = _props2.isInitiallyOpen,
          isTransparent = _props2.isTransparent,
          onOpen = _props2.onOpen,
          onClose = _props2.onClose,
          customProps = _objectWithoutProperties(_props2, ['children', 'title', 'level', 'sectionHeaderAttrs', 'isAnimated', 'isInitiallyOpen', 'isTransparent', 'onOpen', 'onClose']);

      var sectionHeaderProps = _extends({}, sectionHeaderAttrs);
      sectionHeaderProps.onClick = this.wrapOnClick(sectionHeaderAttrs.onClick);

      return _react2.default.createElement(
        'div',
        customProps,
        _react2.default.createElement(_terraSectionHeader2.default, _extends({}, sectionHeaderProps, {
          'aria-expanded': this.state.isOpen,
          isOpen: this.state.isOpen,
          level: level,
          title: title,
          isTransparent: isTransparent
        })),
        _react2.default.createElement(
          _terraToggle2.default,
          { isAnimated: isAnimated, isOpen: this.state.isOpen },
          children
        )
      );
    }
  }]);

  return ToggleSectionHeader;
}(_react2.default.Component);

ToggleSectionHeader.propTypes = propTypes;
ToggleSectionHeader.defaultProps = defaultProps;

exports.default = ToggleSectionHeader;