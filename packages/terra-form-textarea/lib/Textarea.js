'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextareaSize = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _TextareaModule = require('./Textarea.module.scss');

var _TextareaModule2 = _interopRequireDefault(_TextareaModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_TextareaModule2.default);

var isMobileDevice = function isMobileDevice() {
  return window.matchMedia('(max-width: 1024px)').matches && ('ontouchstart' in window
  // eslint-disable-next-line no-undef
  || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
};

var TextareaSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  FULL: 'full'
};

var TEXTAREA_ROW_SIZES = {
  small: 2,
  medium: 5,
  large: 10
};

var propTypes = {
  /**
   * The defaultValue of the textarea. Use this to create an uncontrolled textarea.
   */
  defaultValue: _propTypes2.default.string,
  /**
   * Whether the textarea is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Whether the textarea can be auto-resized vertically.
   */
  isAutoResizable: _propTypes2.default.bool,
  /**
   * Whether the form is invalid
   */
  isInvalid: _propTypes2.default.bool,
  /**
   * Name of the input.
   */
  name: _propTypes2.default.string,
  /**
   * Function to trigger when user changes the textarea value. Provide a function to create a controlled input.
   */
  onChange: _propTypes2.default.func,
  /**
   * Function to trigger when user focuses on this textarea.
   */
  onFocus: _propTypes2.default.func,
  /**
   * Whether the input is required or not.
   */
  required: _propTypes2.default.bool,
  /**
   * Value to set for the rows attribute of the textarea. This takes presidence over size when
   * setting the height of the textarea.
   */
  rows: _propTypes2.default.number,
  /**
   * The size of the textarea. Sizes the textarea by setting the rows attribute to the number corresponding
   * to this value.
   */
  size: _propTypes2.default.oneOf(['small', 'medium', 'large', 'full']),
  /**
   * The value of the textarea. Use this to create a controlled textarea.
   */
  value: _propTypes2.default.string,
  /**
   * Function callback for the ref of the textarea. Useful for advanced
   * functionality such as managing focus, selection, or animations.
   */
  refCallback: _propTypes2.default.func
};

var defaultProps = {
  defaultValue: undefined,
  disabled: false,
  name: null,
  isAutoResizable: false,
  isInvalid: false,
  onChange: undefined,
  required: false,
  rows: null,
  size: 'small',
  value: undefined,
  refCallback: undefined
};

var Textarea = function (_React$Component) {
  _inherits(Textarea, _React$Component);

  function Textarea(props) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

    _this.isMobileDevice = isMobileDevice();
    _this.onChange = _this.onChange.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    return _this;
  }

  _createClass(Textarea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var lineHeight = Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight, 0));
      this.textarea.currentLineHeight = lineHeight;
      this.setBaseHeights();

      if (this.props.isAutoResizable && !this.isMobileDevice) {
        this.resizeTextarea();
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus(event) {
      if (this.props.isAutoResizable && !this.isMobileDevice) {
        var lineHeight = Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight, 0));

        if (this.textarea.currentLineHeight !== lineHeight) {
          this.textarea.currentLineHeight = lineHeight;
          this.setBaseHeights();
        }
      }

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      if (this.props.isAutoResizable && !this.isMobileDevice) {
        this.resizeTextarea();
      }

      if (this.props.onChange) {
        this.props.onChange(event);
      }
    }
  }, {
    key: 'setBaseHeights',
    value: function setBaseHeights() {
      // To Properly resize the textarea vertically, we need to record the initial height
      // to help with the resizing calculation.
      var savedValue = this.textarea.value;
      this.textarea.value = '';
      this.textarea.baseScrollHeight = this.textarea.scrollHeight;

      // For terra textareas, we want the gripper to not have the ability to resize the textarea to
      // be a tiny square. Setting the minHeight restricts the area the gripper can be shrunk too
      this.textarea.style.minHeight = this.textarea.scrollHeight + 'px';
      this.textarea.value = savedValue;
    }
  }, {
    key: 'resizeTextarea',
    value: function resizeTextarea() {
      var minRows = this.props.rows || TEXTAREA_ROW_SIZES[this.props.size];
      this.textarea.rows = minRows;
      var rows = Math.ceil((this.textarea.scrollHeight - this.textarea.baseScrollHeight) / this.textarea.currentLineHeight);
      this.textarea.rows = minRows + rows;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          required = _props.required,
          onChange = _props.onChange,
          onFocus = _props.onFocus,
          isAutoResizable = _props.isAutoResizable,
          isInvalid = _props.isInvalid,
          value = _props.value,
          defaultValue = _props.defaultValue,
          rows = _props.rows,
          size = _props.size,
          refCallback = _props.refCallback,
          customProps = _objectWithoutProperties(_props, ['name', 'required', 'onChange', 'onFocus', 'isAutoResizable', 'isInvalid', 'value', 'defaultValue', 'rows', 'size', 'refCallback']);

      var additionalTextareaProps = _extends({}, customProps);

      var textareaClasses = cx(['textarea', { 'form-error': isInvalid }, { 'full-size': size === 'full' }, { resizable: isAutoResizable && !this.isMobileDevice }, additionalTextareaProps.className]);

      if (required) {
        additionalTextareaProps['aria-required'] = 'true';
      }

      var textareaRows = rows || TEXTAREA_ROW_SIZES[size];

      if (value !== undefined) {
        additionalTextareaProps.value = value;
      } else {
        additionalTextareaProps.defaultValue = defaultValue;
      }

      return _react2.default.createElement('textarea', _extends({}, additionalTextareaProps, {
        ref: function ref(textarea) {
          _this2.textarea = textarea;
          if (refCallback) refCallback(textarea);
        },
        name: name,
        onFocus: this.onFocus,
        onChange: this.onChange,
        required: required,
        rows: textareaRows,
        className: textareaClasses
      }));
    }
  }]);

  return Textarea;
}(_react2.default.Component);

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

exports.default = Textarea;
exports.TextareaSize = TextareaSize;