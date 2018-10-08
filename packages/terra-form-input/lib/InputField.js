'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraFormField = require('terra-form-field');

var _terraFormField2 = _interopRequireDefault(_terraFormField);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Id of the input. Populates both the input and the htmlFor prop of the wrapper Field.
   */
  inputId: _propTypes2.default.string.isRequired,
  /**
   * The label of the form control children.
   */
  label: _propTypes2.default.node.isRequired,
  /**
   * The defaultValue of the input field. Use this to create an uncontrolled input.
   */
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Error message for when the input is invalid.
   */
  error: _propTypes2.default.node,
  /**
   * Error Icon to display when the input is invalid.
   */
  errorIcon: _propTypes2.default.element,
  /**
   * Help element to display with the input.
   */
  help: _propTypes2.default.node,
  /**
   * Whether or not to hide the required indicator on the label.
   */
  hideRequired: _propTypes2.default.bool,
  /**
   * Attributes to attach to the input object
   */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttrs: _propTypes2.default.object,
  /**
   * Whether or not the field is an inline field.
   */
  isInline: _propTypes2.default.bool,
  /**
   * Whether or not the field is invalid.
   */
  isInvalid: _propTypes2.default.bool,
  /**
   * Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.
   */
  isLabelHidden: _propTypes2.default.bool,
  /**
   * Attributes to attach to the label.
   */
  // eslint-disable-next-line react/forbid-prop-types
  labelAttrs: _propTypes2.default.object,
  /**
   * Function to trigger when user changes the input value. Provide a function to create a controlled input.
   */
  onChange: _propTypes2.default.func,
  /**
   * Ref callback to pass into the ref attribute of the html input element.
   */
  refCallback: _propTypes2.default.func,
  /**
   * Whether or not the field is required.
   */
  required: _propTypes2.default.bool,
  /**
   * Whether or not to append the 'optional' label to a non-required field label.
   */
  showOptional: _propTypes2.default.bool,
  /**
   * The value of the input field. Use this to create a controlled input.
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

var defaultProps = {
  defaultValue: undefined,
  error: null,
  errorIcon: _terraFormField2.default.defaultProps.errorIcon,
  help: null,
  hideRequired: false,
  inputAttrs: {},
  isInline: false,
  isInvalid: false,
  isLabelHidden: false,
  labelAttrs: {},
  onChange: undefined,
  refCallback: undefined,
  required: false,
  showOptional: false,
  value: undefined
};

var InputField = function InputField(props) {
  var defaultValue = props.defaultValue,
      error = props.error,
      errorIcon = props.errorIcon,
      help = props.help,
      hideRequired = props.hideRequired,
      inputAttrs = props.inputAttrs,
      inputId = props.inputId,
      isInline = props.isInline,
      isInvalid = props.isInvalid,
      isLabelHidden = props.isLabelHidden,
      label = props.label,
      labelAttrs = props.labelAttrs,
      refCallback = props.refCallback,
      required = props.required,
      showOptional = props.showOptional,
      onChange = props.onChange,
      value = props.value,
      customProps = _objectWithoutProperties(props, ['defaultValue', 'error', 'errorIcon', 'help', 'hideRequired', 'inputAttrs', 'inputId', 'isInline', 'isInvalid', 'isLabelHidden', 'label', 'labelAttrs', 'refCallback', 'required', 'showOptional', 'onChange', 'value']);

  return _react2.default.createElement(
    _terraFormField2.default,
    _extends({
      label: label,
      labelAttrs: labelAttrs,
      error: error,
      errorIcon: errorIcon,
      help: help,
      hideRequired: hideRequired,
      required: required,
      showOptional: showOptional,
      isInvalid: isInvalid,
      isInline: isInline,
      isLabelHidden: isLabelHidden,
      htmlFor: inputId
    }, customProps),
    _react2.default.createElement(_Input2.default, _extends({}, inputAttrs, {
      id: inputId,
      onChange: onChange,
      value: value,
      defaultValue: defaultValue,
      refCallback: refCallback
    }))
  );
};

InputField.propTypes = propTypes;
InputField.defaultProps = defaultProps;

exports.default = InputField;