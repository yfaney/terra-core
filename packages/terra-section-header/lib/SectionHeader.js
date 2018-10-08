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

require('terra-base/lib/baseStyles');

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _SectionHeaderModule = require('./SectionHeader.module.scss');

var _SectionHeaderModule2 = _interopRequireDefault(_SectionHeaderModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_SectionHeaderModule2.default);

var KEYCODES = {
  ENTER: 13,
  SPACE: 32
};

var propTypes = {
  /**
   * Text to be displayed on the SectionHeader.
   */
  title: _propTypes2.default.string.isRequired,
  /**
   * Callback function triggered when the accordion icon is clicked.
   */
  onClick: _propTypes2.default.func,
  /**
   * Whether the accordion icon should be displayed in its 'open' or 'closed' position.
   */
  isOpen: _propTypes2.default.bool,
  /**
   * Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`. Default `level=2`.
   */
  level: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6]),
  /**
   * Sets the background of the section header to transparent.
   */
  isTransparent: _propTypes2.default.bool
};

var defaultProps = {
  onClick: undefined,
  isOpen: false,
  isTransparent: false,
  level: 2
};

var isRecognizedKeyPress = function isRecognizedKeyPress(event) {
  return event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE;
};

var SectionHeader = function (_React$Component) {
  _inherits(SectionHeader, _React$Component);

  function SectionHeader(props) {
    _classCallCheck(this, SectionHeader);

    var _this = _possibleConstructorReturn(this, (SectionHeader.__proto__ || Object.getPrototypeOf(SectionHeader)).call(this, props));

    _this.state = { isActive: false };
    _this.wrapOnKeyDown = _this.wrapOnKeyDown.bind(_this);
    _this.wrapOnKeyUp = _this.wrapOnKeyUp.bind(_this);
    return _this;
  }

  _createClass(SectionHeader, [{
    key: 'wrapOnKeyDown',
    value: function wrapOnKeyDown(onKeyDown) {
      var _this2 = this;

      return function (event) {
        if (isRecognizedKeyPress(event) && !_this2.state.isActive) {
          _this2.setState({ isActive: true });

          // Call the same function the user provides for a click event
          if (_this2.props.onClick) {
            _this2.props.onClick(event);
          }
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
        if (isRecognizedKeyPress(event) && _this3.state.isActive) {
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
          title = _props.title,
          onClick = _props.onClick,
          isOpen = _props.isOpen,
          isTransparent = _props.isTransparent,
          level = _props.level,
          customProps = _objectWithoutProperties(_props, ['title', 'onClick', 'isOpen', 'isTransparent', 'level']);

      if (process.env.NODE_ENV !== 'production' && !onClick && isOpen) {
        // eslint-disable-next-line no-console
        console.warn('\'isOpen\' are intended to be used only when \'onClick\' is provided.');
      }

      var attributes = _extends({}, customProps);

      if (onClick) {
        attributes.tabIndex = '0';
        attributes.onKeyDown = this.wrapOnKeyDown(attributes.onKeyDown);
        attributes.onKeyUp = this.wrapOnKeyUp(attributes.onKeyUp);
        attributes.role = 'button';
      }

      var iconClassNames = cx(['accordion-icon', { 'is-open': onClick && isOpen }]);

      var accordionIcon = _react2.default.createElement(
        'div',
        { className: cx('accordion-icon-wrapper') },
        _react2.default.createElement('span', { className: iconClassNames })
      );

      var sectionHeaderClassNames = cx(['section-header', { 'is-interactable': onClick }, { 'is-active': this.state.isActive }, { 'is-transparent': isTransparent }, customProps.className]);

      var Element = 'h' + level;

      // allows us to set an onClick on the div
      // We set key events and role conditionally set if onClick is set
      // eslint doesn't know about this and so it marks this as a lint error
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      return _react2.default.createElement(
        'div',
        _extends({}, attributes, { onClick: onClick, className: sectionHeaderClassNames }),
        _react2.default.createElement(_terraArrange2.default, {
          fitStart: onClick && accordionIcon,
          fill: _react2.default.createElement(
            Element,
            { className: cx('title') },
            title
          )
        })
      );
      /* eslint-enable jsx-a11y/no-static-element-interactions */
    }
  }]);

  return SectionHeader;
}(_react2.default.Component);

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

exports.default = SectionHeader;