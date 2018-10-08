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

var _TabsModule = require('./Tabs.module.scss');

var _TabsModule2 = _interopRequireDefault(_TabsModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_TabsModule2.default);

var propTypes = {
  /**
   * Icon to be displayed on the tab.
   */
  icon: _propTypes2.default.element,

  /**
   * Text to be displayed on the tab.
   */
  label: _propTypes2.default.string.isRequired,

  /**
   * A custom display for the tab. Component will fallback to label text when collapsed into the menu.
   */
  customDisplay: _propTypes2.default.node,

  /**
   * Content to be displayed when the tab is selected.
   */
  children: _propTypes2.default.node,

  /**
   * Indicates if the pane should be disabled.
   */
  isDisabled: _propTypes2.default.bool,

  /**
   * Indicates if the pane label should only display the icon. When tab collapses into menu the label text will be used.
   */
  isIconOnly: _propTypes2.default.bool
};

var defaultProps = {
  isDisabled: false,
  isIconOnly: false
};

var TabPane = function TabPane(_ref) {
  var icon = _ref.icon,
      label = _ref.label,
      customDisplay = _ref.customDisplay,
      children = _ref.children,
      isDisabled = _ref.isDisabled,
      isIconOnly = _ref.isIconOnly,
      customProps = _objectWithoutProperties(_ref, ['icon', 'label', 'customDisplay', 'children', 'isDisabled', 'isIconOnly']);

  var attributes = _extends({}, customProps);
  var paneClassNames = cx(['tab', { 'is-disabled': isDisabled }, { 'is-icon-only': isIconOnly }, { 'is-text-only': !icon }, attributes.className]);

  if (isIconOnly) {
    attributes['aria-label'] = label;
  }

  return _react2.default.createElement(
    'div',
    _extends({}, attributes, { role: 'tab', className: paneClassNames }),
    customDisplay,
    customDisplay ? null : icon,
    customDisplay || isIconOnly ? null : _react2.default.createElement(
      'span',
      { className: cx('label') },
      label
    )
  );
};

TabPane.propTypes = propTypes;
TabPane.defaultProps = defaultProps;

exports.default = TabPane;