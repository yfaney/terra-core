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

var _IconChevronRight = require('terra-icon/lib/icon/IconChevronRight');

var _IconChevronRight2 = _interopRequireDefault(_IconChevronRight);

var _terraToggle = require('terra-toggle');

var _terraToggle2 = _interopRequireDefault(_terraToggle);

require('terra-base/lib/baseStyles');

var _ToggleButtonModule = require('./ToggleButton.module.scss');

var _ToggleButtonModule2 = _interopRequireDefault(_ToggleButtonModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_ToggleButtonModule2.default);

var propTypes = {
  /**
   * Content in the body of the toggle-button component that will be expanded or toggle-buttond
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Sets the text inside of the button when the toggle-button component is closed
   */
  closedButtonText: _propTypes2.default.string.isRequired,
  /**
   * Used to set props and HTML attributes on the toggle-button button
   */
  // eslint-disable-next-line react/forbid-prop-types
  buttonAttrs: _propTypes2.default.object,
  /**
   * Icon displayed next to text content within the toggle-button button
   */
  icon: _propTypes2.default.element,
  /**
   * Sets the toggle-button to be animated when it is opened or closed
   */
  isAnimated: _propTypes2.default.bool,
  /**
   * Used to turn on animation on toggle-button button icon
   */
  isIconAnimated: _propTypes2.default.bool,
  /**
   * Sets the toggle-button to only display and icon. Uses closedButtonText prop as an aria-label on the button.
   */
  isIconOnly: _propTypes2.default.bool,
  /**
   * Sets the toggle-button initial state to open
   */
  isInitiallyOpen: _propTypes2.default.bool,
  /**
   * Callback function triggered when toggle-button is closed
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback function triggered when toggle-button is opened
   */
  onOpen: _propTypes2.default.func,
  /**
   * Sets the text inside of the button when the toggle-button component is open
   */
  openedButtonText: _propTypes2.default.string
};

var defaultProps = {
  isAnimated: false,
  isIconAnimated: false,
  isIconOnly: false,
  isInitiallyOpen: false,
  icon: _react2.default.createElement(_IconChevronRight2.default, null)
};

var ToggleButton = function (_React$Component) {
  _inherits(ToggleButton, _React$Component);

  function ToggleButton(props) {
    _classCallCheck(this, ToggleButton);

    var _this = _possibleConstructorReturn(this, (ToggleButton.__proto__ || Object.getPrototypeOf(ToggleButton)).call(this, props));

    _this.state = {
      isOpen: props.isInitiallyOpen
    };

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    return _this;
  }

  _createClass(ToggleButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isInitiallyOpen === this.props.isInitiallyOpen) {
        return;
      }

      this.setState({ isOpen: nextProps.isInitiallyOpen });
    }
  }, {
    key: 'handleOnClick',
    value: function handleOnClick(e) {
      e.preventDefault();

      // Fire event from toggle handlers
      if (!this.state.isOpen && this.props.onOpen) {
        this.props.onOpen();
      } else if (this.state.isOpen && this.props.onClose) {
        this.props.onClose();
      }

      this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          buttonAttrs = _props.buttonAttrs,
          children = _props.children,
          closedButtonText = _props.closedButtonText,
          icon = _props.icon,
          isAnimated = _props.isAnimated,
          isIconAnimated = _props.isIconAnimated,
          isIconOnly = _props.isIconOnly,
          isInitiallyOpen = _props.isInitiallyOpen,
          onClose = _props.onClose,
          onOpen = _props.onOpen,
          openedButtonText = _props.openedButtonText,
          customProps = _objectWithoutProperties(_props, ['buttonAttrs', 'children', 'closedButtonText', 'icon', 'isAnimated', 'isIconAnimated', 'isIconOnly', 'isInitiallyOpen', 'onClose', 'onOpen', 'openedButtonText']);
      // Set openHeaderText to the same value as closedHeaderText if its not already set


      var normalizedOpenButtonText = openedButtonText || closedButtonText;
      var buttonText = !this.state.isOpen ? closedButtonText : normalizedOpenButtonText;
      var text = isIconOnly ? closedButtonText : buttonText;
      var toggleButtonClass = cx(['button', { 'is-open': this.state.isOpen }, { 'is-icon-animated': isIconAnimated }, customProps.className]);

      var button = _react2.default.createElement(_terraButton2.default, _extends({}, buttonAttrs, {
        isIconOnly: isIconOnly,
        icon: _react2.default.createElement(
          'span',
          { className: cx('icon') },
          icon
        ),
        'aria-expanded': this.state.isOpen,
        text: text,
        onClick: this.handleOnClick
      }));

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: toggleButtonClass }),
        button,
        _react2.default.createElement(
          _terraToggle2.default,
          { isOpen: this.state.isOpen, isAnimated: this.props.isAnimated },
          this.props.children
        )
      );
    }
  }]);

  return ToggleButton;
}(_react2.default.Component);

ToggleButton.propTypes = propTypes;
ToggleButton.defaultProps = defaultProps;

exports.default = ToggleButton;