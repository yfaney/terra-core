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

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _constants = require('./_constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The select options.
   */
  children: _propTypes2.default.node,
  /**
   * The field label.
   */
  label: _propTypes2.default.node.isRequired,
  /**
   * The default value of the select.
   */
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.number, _propTypes2.default.string]),
  /**
   * Error message displayed when the select is invalid.
   */
  error: _propTypes2.default.node,
  /**
   * Help message to display with the select.
   */
  help: _propTypes2.default.node,
  /**
   * Whether to hide the required indicator on the label.
   */
  hideRequired: _propTypes2.default.bool,
  /**
   * Whether the field is displayed inline. Displays block by default.
   */
  isInline: _propTypes2.default.bool,
  /**
   * Whether the field is invalid.
   */
  isInvalid: _propTypes2.default.bool,
  /**
   * Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines.
   */
  isLabelHidden: _propTypes2.default.bool,
  /**
   * Additional attributes to spread onto the label.
   */
  // eslint-disable-next-line react/forbid-prop-types
  labelAttrs: _propTypes2.default.object,
  /**
   * Callback function triggered when the select value changes. function(value)
   */
  onChange: _propTypes2.default.func,
  /**
   * Placeholder text.
   */
  placeholder: _propTypes2.default.string,
  /**
   * Whether the field is required.
   */
  required: _propTypes2.default.bool,
  /**
   * Additional attributes to spread onto the select.
   */
  // eslint-disable-next-line react/forbid-prop-types
  selectAttrs: _propTypes2.default.object,
  /**
   * The Select identifier. Links the htmlFor of the field to the select identifier.
   */
  selectId: _propTypes2.default.string.isRequired,
  /**
   * Whether to append the 'optional' label to a non-required field label.
   */
  showOptional: _propTypes2.default.bool,
  /**
   * The value of the select.
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.number, _propTypes2.default.string]),
  /**
   * The select variant. One of `default`, `combobox`, `multiple`, `tag`, or `search`.
   */
  variant: _propTypes2.default.oneOf([_constants.Variants.COMBOBOX, _constants.Variants.DEFAULT, _constants.Variants.MULTIPLE, _constants.Variants.SEARCH, _constants.Variants.TAG])
};

var defaultProps = {
  children: undefined,
  defaultValue: undefined,
  error: undefined,
  help: undefined,
  hideRequired: false,
  isInline: false,
  isInvalid: false,
  isLabelHidden: false,
  labelAttrs: {},
  onChange: undefined,
  placeholder: undefined,
  required: false,
  selectAttrs: {},
  showOptional: false,
  value: undefined,
  variant: 'default'
};

var SelectField = function SelectField(_ref) {
  var children = _ref.children,
      defaultValue = _ref.defaultValue,
      error = _ref.error,
      help = _ref.help,
      hideRequired = _ref.hideRequired,
      isInline = _ref.isInline,
      isInvalid = _ref.isInvalid,
      isLabelHidden = _ref.isLabelHidden,
      label = _ref.label,
      labelAttrs = _ref.labelAttrs,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      required = _ref.required,
      selectAttrs = _ref.selectAttrs,
      selectId = _ref.selectId,
      showOptional = _ref.showOptional,
      value = _ref.value,
      variant = _ref.variant,
      customProps = _objectWithoutProperties(_ref, ['children', 'defaultValue', 'error', 'help', 'hideRequired', 'isInline', 'isInvalid', 'isLabelHidden', 'label', 'labelAttrs', 'onChange', 'placeholder', 'required', 'selectAttrs', 'selectId', 'showOptional', 'value', 'variant']);

  return _react2.default.createElement(
    _terraFormField2.default,
    _extends({}, customProps, {
      label: label,
      labelAttrs: labelAttrs,
      error: error,
      help: help,
      hideRequired: hideRequired,
      required: required,
      showOptional: showOptional,
      isInvalid: isInvalid,
      isInline: isInline,
      isLabelHidden: isLabelHidden,
      htmlFor: selectId
    }),
    _react2.default.createElement(
      _Select2.default,
      _extends({}, selectAttrs, {
        id: selectId,
        isInvalid: isInvalid,
        defaultValue: defaultValue,
        onChange: onChange,
        placeholder: placeholder,
        value: value,
        variant: variant
      }),
      children
    )
  );
};

SelectField.propTypes = propTypes;
SelectField.defaultProps = defaultProps;

SelectField.Option = _Select2.default.Option;
SelectField.OptGroup = _Select2.default.OptGroup;

exports.default = SelectField;