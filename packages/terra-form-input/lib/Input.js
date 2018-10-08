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

var _InputModule = require('./Input.module.scss');

var _InputModule2 = _interopRequireDefault(_InputModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // added to allow this component to be class based for the input ref callback below
/* eslint-disable react/prefer-stateless-function */


var cx = _bind2.default.bind(_InputModule2.default);

var propTypes = {
  /**
   * The defaultValue of the input field. Use this to create an uncontrolled input.
   */
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Whether the input is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Whether the input is invalid.
   */
  isInvalid: _propTypes2.default.bool,
  /**
   * Function to trigger when the input loses focus.
   */
  onBlur: _propTypes2.default.func,
  /**
   * Function to trigger when user changes the input value. Provide a function to create a controlled input.
   */
  onChange: _propTypes2.default.func,
  /**
   * Function to trigger when the input gains focus.
   */
  onFocus: _propTypes2.default.func,
  /**
   * Content to be displayed as the name.
   */
  name: _propTypes2.default.string,
  /**
   * Callback ref to pass into the input dom element.
   */
  refCallback: _propTypes2.default.func,
  /**
   * Whether the input is required.
   */
  required: _propTypes2.default.bool,
  /**
   * The value of the input field. Use this to create a controlled input.
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

var defaultProps = {
  defaultValue: undefined,
  disabled: false,
  isInvalid: false,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  name: null,
  required: false,
  refCallback: undefined,
  value: undefined
};

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          disabled = _props.disabled,
          isInvalid = _props.isInvalid,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          onFocus = _props.onFocus,
          name = _props.name,
          refCallback = _props.refCallback,
          required = _props.required,
          value = _props.value,
          customProps = _objectWithoutProperties(_props, ['defaultValue', 'disabled', 'isInvalid', 'onBlur', 'onChange', 'onFocus', 'name', 'refCallback', 'required', 'value']);

      var attributes = _extends({}, customProps);
      var formInputClassNames = cx(['form-input', { 'form-error': isInvalid }, attributes.className]);

      if (required) {
        attributes['aria-required'] = 'true';
      }

      if (value !== undefined) {
        attributes.value = value;
      } else {
        attributes.defaultValue = defaultValue;
      }

      return _react2.default.createElement('input', _extends({}, attributes, {
        ref: function ref(inputRef) {
          if (refCallback) refCallback(inputRef);
        },
        name: name,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        disabled: disabled,
        required: required,
        className: formInputClassNames
      }));
    }
  }]);

  return Input;
}(_react2.default.Component);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

exports.default = Input;