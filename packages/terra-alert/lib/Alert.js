'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraResponsiveElement = require('terra-responsive-element');

var _terraResponsiveElement2 = _interopRequireDefault(_terraResponsiveElement);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _IconAlert = require('terra-icon/lib/icon/IconAlert');

var _IconAlert2 = _interopRequireDefault(_IconAlert);

var _IconError = require('terra-icon/lib/icon/IconError');

var _IconError2 = _interopRequireDefault(_IconError);

var _IconWarning = require('terra-icon/lib/icon/IconWarning');

var _IconWarning2 = _interopRequireDefault(_IconWarning);

var _IconInformation = require('terra-icon/lib/icon/IconInformation');

var _IconInformation2 = _interopRequireDefault(_IconInformation);

var _IconSuccess = require('terra-icon/lib/icon/IconSuccess');

var _IconSuccess2 = _interopRequireDefault(_IconSuccess);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _AlertModule = require('./Alert.module.scss');

var _AlertModule2 = _interopRequireDefault(_AlertModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_AlertModule2.default);

var AlertTypes = {
  ALERT: 'alert',
  ERROR: 'error',
  WARNING: 'warning',
  ADVISORY: 'advisory',
  INFO: 'info',
  SUCCESS: 'success',
  CUSTOM: 'custom'
};

var propTypes = {
  /**
   * An action element to be added to the action section of the alert.
   */
  action: _propTypes2.default.element,
  /**
   * Child Nodes providing the message content for the alert. Can contain text and HTML.
   */
  children: _propTypes2.default.node,
  /**
   * The icon to be used for an alert of type custom. This will not be used for any other alert types.
   */
  customIcon: _propTypes2.default.element,
  /**
   * The status bar color to be used for an alert of type custom.
   */
  customStatusColor: _propTypes2.default.string,
  /**
   * Callback function triggered when Dismiss button is clicked. The presence of this prop will cause the Dismiss button to be included on the alert.
   */
  onDismiss: _propTypes2.default.func,
  /**
   * The title for the alert which will be bolded.
   */
  title: _propTypes2.default.string,
  /**
   * The type of alert to be rendered. One of `alert`, `error`, `warning`, `advisory`,
   * `info`, `success`, `custom`.
   */
  type: _propTypes2.default.oneOf([AlertTypes.ALERT, AlertTypes.ERROR, AlertTypes.WARNING, AlertTypes.ADVISORY, AlertTypes.INFO, AlertTypes.SUCCESS, AlertTypes.CUSTOM])
};

var defaultProps = {
  action: null,
  children: '',
  customIcon: null,
  customStatusColor: '',
  onDismiss: null,
  title: '',
  type: AlertTypes.ALERT
};

var getAlertIcon = function getAlertIcon(type, customIcon) {
  switch (type) {
    case AlertTypes.ALERT:
      return _react2.default.createElement(
        'span',
        { className: cx('icon') },
        _react2.default.createElement(_IconAlert2.default, null)
      );
    case AlertTypes.ERROR:
      return _react2.default.createElement(
        'span',
        { className: cx('icon') },
        _react2.default.createElement(_IconError2.default, null)
      );
    case AlertTypes.WARNING:
      return _react2.default.createElement(
        'span',
        { className: cx('icon') },
        _react2.default.createElement(_IconWarning2.default, null)
      );
    case AlertTypes.ADVISORY:
      return null;
    case AlertTypes.INFO:
      return _react2.default.createElement(
        'span',
        { className: cx('icon') },
        _react2.default.createElement(_IconInformation2.default, null)
      );
    case AlertTypes.SUCCESS:
      return _react2.default.createElement(
        'span',
        { className: cx('icon') },
        _react2.default.createElement(_IconSuccess2.default, null)
      );
    case AlertTypes.CUSTOM:
      return _react2.default.createElement(
        'span',
        { className: cx('icon') },
        customIcon
      );
    default:
      return null;
  }
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  }
};

var Alert = function Alert(_ref, _ref2) {
  var intl = _ref2.intl;

  var type = _ref.type,
      children = _ref.children,
      title = _ref.title,
      customIcon = _ref.customIcon,
      customStatusColor = _ref.customStatusColor,
      onDismiss = _ref.onDismiss,
      action = _ref.action,
      customProps = _objectWithoutProperties(_ref, ['type', 'children', 'title', 'customIcon', 'customStatusColor', 'onDismiss', 'action']);

  var defaultTitle = type === AlertTypes.CUSTOM ? '' : intl.formatMessage({ id: 'Terra.alert.' + type });
  var attributes = _extends({}, customProps);
  var narrowAlertClassNames = cx(['alert-base', type, 'narrow', attributes.className]);
  var wideAlertClassNames = cx(['alert-base', type, 'wide', attributes.className]);

  var actionsSection = '';
  var dismissButton = '';
  var outerDivStyle = {};
  var alertSectionClassName = cx('section');
  var actionsClassName = cx('actions');
  var bodyClassNameForNarrowParent = cx(['body', 'body-std']);

  if (type === AlertTypes.CUSTOM) {
    // For custom alert, there is no color assigned to the box-shadow style since it is to be specified
    // in the customStatusColor prop.  The box-shadow style is defined in CSS in order to get the
    // bidirectionality via the mixin.  As per the W3C spec if the box-shadow does not have the color
    // defined, it will use the prevailing color style, so setting that here. But then we need to set
    // the color style for the alert content so that it doesn't pick up the custom status color. We
    // will allow the icon to pick up the color style so that Terra icons will match the color of the
    // status bar.
    outerDivStyle.color = customStatusColor;
    alertSectionClassName = cx(['section', 'section-custom']);
    actionsClassName = cx(['actions', 'actions-custom']);
  }

  if (onDismiss) {
    dismissButton = _react2.default.createElement(_terraButton2.default, { text: intl.formatMessage({ id: 'Terra.alert.dismiss' }), onClick: onDismiss });
  }
  if (onDismiss || action) {
    bodyClassNameForNarrowParent = cx(['body', 'body-narrow']);
    actionsSection = _react2.default.createElement(
      'div',
      { className: actionsClassName },
      action,
      dismissButton
    );
  }

  var alertMessageContent = _react2.default.createElement(
    'p',
    { className: alertSectionClassName },
    (title || defaultTitle) && _react2.default.createElement(
      'strong',
      { className: cx('title') },
      title || defaultTitle
    ),
    children
  );

  return _react2.default.createElement(_terraResponsiveElement2.default, {
    responsiveTo: 'parent',
    defaultElement: _react2.default.createElement(
      'div',
      _extends({}, attributes, { className: narrowAlertClassNames, style: outerDivStyle }),
      _react2.default.createElement(
        'div',
        { className: bodyClassNameForNarrowParent },
        getAlertIcon(type, customIcon),
        alertMessageContent
      ),
      actionsSection
    ),
    tiny: _react2.default.createElement(
      'div',
      _extends({}, attributes, { className: wideAlertClassNames, style: outerDivStyle }),
      _react2.default.createElement(
        'div',
        { className: cx(['body', 'body-std']) },
        getAlertIcon(type, customIcon),
        alertMessageContent
      ),
      actionsSection
    )
  });
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
Alert.contextTypes = contextTypes;
Alert.Opts = {};
Alert.Opts.Types = AlertTypes;

exports.default = Alert;