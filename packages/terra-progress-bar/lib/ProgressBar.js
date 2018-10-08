'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBarHeightSize = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _ProgressBarModule = require('./ProgressBar.module.scss');

var _ProgressBarModule2 = _interopRequireDefault(_ProgressBarModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_ProgressBarModule2.default);

var ProgressBarHeightSize = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge'
};

var propTypes = {
  /**
   * The color of the progress bar. Accepts a CSS color value.
   */
  color: _propTypes2.default.string,
  /**
   * Sets the size of the progress-bar from the following values; `tiny`, `small`, `medium`, `large` and `huge`
   */
  heightSize: _propTypes2.default.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Sets the fill-value of the progress bar with respect to the `max` prop.
   */
  value: _propTypes2.default.number.isRequired,
  /**
   * Sets the maximum possible fill-value.
   */
  max: _propTypes2.default.number,
  /**
   * Boolean check for gradient.
   */
  hasGradient: _propTypes2.default.bool,
  /**
   * Value passed to aria-valuetext for accessibility. You can view more about this attribute
   * at https://www.w3.org/WAI/PF/aria/states_and_properties#aria-valuetext.
   */
  valueText: _propTypes2.default.string
};

var defaultProps = {
  heightSize: 'small',
  max: 100,
  hasGradient: false,
  valueText: undefined
};

var ProgressBar = function ProgressBar(_ref) {
  var heightSize = _ref.heightSize,
      value = _ref.value,
      max = _ref.max,
      hasGradient = _ref.hasGradient,
      valueText = _ref.valueText,
      customProps = _objectWithoutProperties(_ref, ['heightSize', 'value', 'max', 'hasGradient', 'valueText']);

  var classes = cx([{ 'progress-bar-gradient': hasGradient }, 'progress-bar', heightSize, customProps.className]);

  var normalizedValue = value / max * 100;

  return _react2.default.createElement('progress', _extends({}, customProps, {
    style: { color: customProps.color },
    className: classes,
    max: 100,
    value: normalizedValue,
    'aria-valuemax': 100,
    'aria-valuemin': 0,
    'aria-valuenow': normalizedValue,
    'aria-valuetext': valueText,
    tabIndex: '-1'
  }));
};

ProgressBar.propTypes = propTypes;

ProgressBar.defaultProps = defaultProps;

exports.default = ProgressBar;
exports.ProgressBarHeightSize = ProgressBarHeightSize;