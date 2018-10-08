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

var _OptionModule = require('./_Option.module.scss');

var _OptionModule2 = _interopRequireDefault(_OptionModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_OptionModule2.default);

/* Disabling validation for controlled props. These props will always be overwritten. */
/* eslint react/prop-types: [2, { ignore: [isActive, isSelected, isCheckable, isAddOption] }] */
/* isActive {boolean} - True if the component is active. */
/* isAddOption {boolean} - True if the option is a new custom text entry. */
/* isCheckable {boolean} - True if the component is checkable. */
/* isSelected {boolean} - True if the component is selected. */
var propTypes = {
  /**
   * Whether the option is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The display text of the option.
   */
  display: _propTypes2.default.string,
  /**
   * The value of the option.
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
};

var defaultProps = {
  disabled: false,
  display: undefined
};

var Option = function Option(_ref) {
  var disabled = _ref.disabled,
      display = _ref.display,
      value = _ref.value,
      isActive = _ref.isActive,
      isSelected = _ref.isSelected,
      isCheckable = _ref.isCheckable,
      isAddOption = _ref.isAddOption,
      customProps = _objectWithoutProperties(_ref, ['disabled', 'display', 'value', 'isActive', 'isSelected', 'isCheckable', 'isAddOption']);

  var optionClassNames = cx(['option', { 'is-active': isActive }, { 'is-checkable': isCheckable && !isAddOption }, { 'is-default': !isCheckable && !isAddOption }, { 'is-disabled': disabled }, { 'is-selected': isSelected }, { 'is-add-option': isAddOption }, customProps.className]);

  return _react2.default.createElement(
    'li',
    _extends({}, customProps, {
      role: 'option',
      disabled: disabled,
      className: optionClassNames,
      'aria-selected': isSelected,
      'aria-disabled': disabled
    }),
    (isCheckable || isAddOption) && _react2.default.createElement('span', { className: cx('icon') }),
    _react2.default.createElement(
      'span',
      { className: cx('display') },
      display
    )
  );
};

Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
Option.isOption = true;

exports.default = Option;