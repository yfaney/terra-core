'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _RadioModule = require('./Radio.module.scss');

var _RadioModule2 = _interopRequireDefault(_RadioModule);

var _RadioUtil = require('./_RadioUtil');

var _RadioUtil2 = _interopRequireDefault(_RadioUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_RadioModule2.default);

var propTypes = {
  /**
    * Whether or not the radio button is checked. Use this to generate a controlled radio button.
    */
  checked: _propTypes2.default.bool,
  /**
    * The checked property of the Input element. Use this to generate an uncontrolled radio button.
    */
  defaultChecked: _propTypes2.default.bool,
  /**
    * The id of the radio button.
    */
  id: _propTypes2.default.string,
  /**
    * Additional attributes for the input object.
    */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttrs: _propTypes2.default.object,
  /**
    * Whether the radio button is disabled.
    */
  disabled: _propTypes2.default.bool,
  /**
    * Whether the radio button is inline.
    */
  isInline: _propTypes2.default.bool,
  /**
    * Whether the label is hidden.
    */
  isLabelHidden: _propTypes2.default.bool,
  /**
    * Text of the label.
    */
  labelText: _propTypes2.default.node.isRequired,
  /**
    * Additional attributes for the text object.
    */
  // eslint-disable-next-line react/forbid-prop-types
  labelTextAttrs: _propTypes2.default.object,
  /**
    * Name attribute of the input.
    */
  name: _propTypes2.default.string,
  /**
   * Function to trigger when focus is lost from the radio button.
   */
  onBlur: _propTypes2.default.func,
  /**
    * Function to trigger when user clicks on the radio button. Provide a function to create a controlled input.
    */
  onChange: _propTypes2.default.func,
  /**
   *  Function to trigger when user focuses on the radio button.
   */
  onFocus: _propTypes2.default.func,
  /**
    * The value of the input element.
    */
  value: _propTypes2.default.string
};

var defaultProps = {
  checked: undefined,
  defaultChecked: undefined,
  id: undefined,
  inputAttrs: {},
  disabled: false,
  isInline: false,
  isLabelHidden: false,
  labelTextAttrs: {},
  name: null,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  value: undefined
};

var Radio = function Radio(_ref) {
  var checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      inputAttrs = _ref.inputAttrs,
      id = _ref.id,
      disabled = _ref.disabled,
      isInline = _ref.isInline,
      isLabelHidden = _ref.isLabelHidden,
      labelText = _ref.labelText,
      labelTextAttrs = _ref.labelTextAttrs,
      name = _ref.name,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      value = _ref.value,
      customProps = _objectWithoutProperties(_ref, ['checked', 'defaultChecked', 'inputAttrs', 'id', 'disabled', 'isInline', 'isLabelHidden', 'labelText', 'labelTextAttrs', 'name', 'onBlur', 'onChange', 'onFocus', 'value']);

  var controlInputAttrs = _extends({}, inputAttrs);

  if (checked !== undefined) {
    controlInputAttrs.checked = checked;
  } else {
    controlInputAttrs.defaultChecked = defaultChecked;
  }

  var radioClasses = cx(['radio', { 'is-inline': isInline }, customProps.className]);

  var labelClasses = cx(['label', { 'is-disabled': disabled }, { 'is-hidden': isLabelHidden }, { 'is-mobile': _RadioUtil2.default.isConsideredMobileDevice() }, labelTextAttrs.className]);

  var inputClasses = cx(['native-input', inputAttrs.className]);

  var labelTextClasses = cx(['label-text']);

  var outerRingClasses = cx(['outer-ring', { 'is-mobile': _RadioUtil2.default.isConsideredMobileDevice() }]);

  var innerRingClasses = cx(['inner-ring']);

  var labelTextContainer = null;
  if (isLabelHidden) {
    controlInputAttrs['aria-label'] = labelText;
    labelTextContainer = _react2.default.createElement('span', _extends({}, labelTextAttrs, { className: labelTextClasses }));
  } else {
    labelTextContainer = _react2.default.createElement(
      'span',
      _extends({}, labelTextAttrs, { className: labelTextClasses }),
      labelText
    );
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: radioClasses }),
    _react2.default.createElement(
      'label',
      { htmlFor: id, className: labelClasses },
      _react2.default.createElement('input', _extends({}, controlInputAttrs, {
        type: 'radio',
        id: id,
        disabled: disabled,
        name: name,
        value: value,
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur,
        className: inputClasses
      })),
      _react2.default.createElement(
        'span',
        { className: outerRingClasses },
        _react2.default.createElement('span', { className: innerRingClasses })
      ),
      labelTextContainer
    )
  );
};

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

exports.default = Radio;