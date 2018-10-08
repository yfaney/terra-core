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

var _CheckboxFieldModule = require('./CheckboxField.module.scss');

var _CheckboxFieldModule2 = _interopRequireDefault(_CheckboxFieldModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_CheckboxFieldModule2.default);

var propTypes = {
  /**
   * The form control elements the Field contains.
   */
  children: _propTypes2.default.node,
  /**
   * Error message for when the input is invalid. This will only be displayed if isInvalid is true.
   */
  error: _propTypes2.default.node,
  /**
   * Help element to display with the checkboxes.
   */
  help: _propTypes2.default.node,
  /**
   * Whether or not to hide the required indicator on the legend.
   */
  hideRequired: _propTypes2.default.bool,
  /**
   * Whether or not the field is an inline field.
   */
  isInline: _propTypes2.default.bool,
  /**
   * Whether or not the field is invalid.
   */
  isInvalid: _propTypes2.default.bool,
  /**
   * Whether or not the legend is visible. Use this props to hide a legend while still creating it on the DOM for accessibility.
   */
  isLegendHidden: _propTypes2.default.bool,
  /**
   * The legend of the form control children.
   */
  legend: _propTypes2.default.node.isRequired,
  /**
   * Attributes to attach to the legend.
   */
  // eslint-disable-next-line react/forbid-prop-types
  legendAttrs: _propTypes2.default.object,
  /**
   * Whether or not the field is required.
   */
  required: _propTypes2.default.bool,
  /**
   * Whether or not to append the 'optional' legend to a non-required field legend.
   */
  showOptional: _propTypes2.default.bool
};

var defaultProps = {
  children: null,
  error: null,
  help: null,
  hideRequired: false,
  isInline: false,
  isInvalid: false,
  isLegendHidden: false,
  legendAttrs: {},
  required: false,
  showOptional: false
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  }
};

var CheckboxField = function CheckboxField(props, _ref) {
  var intl = _ref.intl;

  var children = props.children,
      error = props.error,
      help = props.help,
      hideRequired = props.hideRequired,
      isInvalid = props.isInvalid,
      isInline = props.isInline,
      isLegendHidden = props.isLegendHidden,
      legend = props.legend,
      legendAttrs = props.legendAttrs,
      required = props.required,
      showOptional = props.showOptional,
      customProps = _objectWithoutProperties(props, ['children', 'error', 'help', 'hideRequired', 'isInvalid', 'isInline', 'isLegendHidden', 'legend', 'legendAttrs', 'required', 'showOptional']);

  var checkboxFieldClasses = cx(['checkbox-field', { 'is-inline': isInline }, customProps.className]);

  var legendClassNames = cx(['legend', legendAttrs.className]);

  var legendGroup = _react2.default.createElement(
    'legend',
    { className: cx(['legend-group', { 'legend-group-hidden': isLegendHidden }]) },
    _react2.default.createElement(
      'div',
      _extends({}, legendAttrs, { className: legendClassNames }),
      isInvalid && _react2.default.createElement('span', { className: cx('error-icon') }),
      required && (isInvalid || !hideRequired) && _react2.default.createElement(
        'span',
        { className: cx('required') },
        '*'
      ),
      legend,
      required && !isInvalid && hideRequired && _react2.default.createElement(
        'span',
        { className: cx('required-hidden') },
        '*'
      ),
      showOptional && !required && _react2.default.createElement(
        'span',
        { className: cx('optional') },
        intl.formatMessage({ id: 'Terra.form.field.optional' })
      )
    ),
    !isInvalid && _react2.default.createElement('span', { className: cx('error-icon-hidden') })
  );

  return _react2.default.createElement(
    'fieldset',
    _extends({}, customProps, { className: checkboxFieldClasses }),
    legendGroup,
    children,
    isInvalid && error && _react2.default.createElement(
      'div',
      { className: cx('error-text') },
      error
    ),
    help && _react2.default.createElement(
      'div',
      { className: cx('help-text') },
      help
    )
  );
};

CheckboxField.propTypes = propTypes;
CheckboxField.defaultProps = defaultProps;
CheckboxField.contextTypes = contextTypes;

exports.default = CheckboxField;