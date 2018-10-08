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

var _IconError = require('terra-icon/lib/icon/IconError');

var _IconError2 = _interopRequireDefault(_IconError);

require('terra-base/lib/baseStyles');

var _FieldModule = require('./Field.module.scss');

var _FieldModule2 = _interopRequireDefault(_FieldModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_FieldModule2.default);

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
   * The htmlFor attribute on the field label.
   */
  htmlFor: _propTypes2.default.string,
  /**
   * Whether or not the field is invalid.
   */
  isInvalid: _propTypes2.default.bool,
  /**
   * Whether or not the field is an inline field.
   */
  isInline: _propTypes2.default.bool,
  /**
   * Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.
   */
  isLabelHidden: _propTypes2.default.bool,
  /**
   * The label of the form control children.
   */
  label: _propTypes2.default.node.isRequired,
  /**
   * Attributes to attach to the label.
   */
  // eslint-disable-next-line react/forbid-prop-types
  labelAttrs: _propTypes2.default.object,
  /**
   * Whether or not the field is required.
   */
  required: _propTypes2.default.bool,
  /**
   * Whether or not to append the 'optional' label to a non-required field label.
   */
  showOptional: _propTypes2.default.bool
};

var defaultProps = {
  children: null,
  error: null,
  errorIcon: _react2.default.createElement(_IconError2.default, null),
  help: null,
  hideRequired: false,
  htmlFor: undefined,
  isInvalid: false,
  isInline: false,
  isLabelHidden: false,
  labelAttrs: {},
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

var Field = function Field(props, _ref) {
  var intl = _ref.intl;

  var children = props.children,
      error = props.error,
      errorIcon = props.errorIcon,
      help = props.help,
      hideRequired = props.hideRequired,
      htmlFor = props.htmlFor,
      isInvalid = props.isInvalid,
      isInline = props.isInline,
      isLabelHidden = props.isLabelHidden,
      label = props.label,
      labelAttrs = props.labelAttrs,
      required = props.required,
      showOptional = props.showOptional,
      customProps = _objectWithoutProperties(props, ['children', 'error', 'errorIcon', 'help', 'hideRequired', 'htmlFor', 'isInvalid', 'isInline', 'isLabelHidden', 'label', 'labelAttrs', 'required', 'showOptional']);

  var fieldClasses = cx(['field', { 'field-inline': isInline }, customProps.className]);

  var labelClassNames = cx(['label', labelAttrs.className]);

  var labelGroup = _react2.default.createElement(
    'div',
    { className: cx(['label-group', { 'label-group-hidden': isLabelHidden }]) },
    isInvalid && _react2.default.createElement(
      'div',
      { className: cx('error-icon') },
      errorIcon
    ),
    _react2.default.createElement(
      'label',
      _extends({ htmlFor: htmlFor }, labelAttrs, { className: labelClassNames }),
      required && (isInvalid || !hideRequired) && _react2.default.createElement(
        'div',
        { className: cx('required') },
        '*'
      ),
      label,
      required && !isInvalid && hideRequired && _react2.default.createElement(
        'div',
        { className: cx('required-hidden') },
        '*'
      ),
      showOptional && !required && _react2.default.createElement(
        'div',
        { className: cx('optional') },
        intl.formatMessage({ id: 'Terra.form.field.optional' })
      )
    ),
    !isInvalid && _react2.default.createElement(
      'div',
      { className: cx('error-icon-hidden') },
      errorIcon
    )
  );

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: fieldClasses }),
    labelGroup,
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

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;
Field.contextTypes = contextTypes;

exports.default = Field;