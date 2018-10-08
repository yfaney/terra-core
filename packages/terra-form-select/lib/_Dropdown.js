'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraHookshot = require('terra-hookshot');

var _terraHookshot2 = _interopRequireDefault(_terraHookshot);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _DropdownModule = require('./_Dropdown.module.scss');

var _DropdownModule2 = _interopRequireDefault(_DropdownModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_DropdownModule2.default);

var propTypes = {
  /**
   * The content of the dropdown.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Whether the dropdown is presented above the target.
   */
  isAbove: _propTypes2.default.bool,
  /**
   * Whether the dropdown is visible.
   */
  isEnabled: _propTypes2.default.bool,
  /**
   * Callback function triggered when the dropdown resizes.
   */
  onResize: _propTypes2.default.func.isRequired,
  /**
   * Callback function triggered for setting a ref to the dropdown.
   */
  refCallback: _propTypes2.default.func.isRequired,
  /**
   * The attachment target.
   */
  // eslint-disable-next-line react/forbid-prop-types
  target: _propTypes2.default.object.isRequired
};

var defaultProps = {
  isAbove: false
};

var AboveAttachment = {
  vertical: 'bottom',
  horizontal: 'start'
};

var BelowAttachment = {
  vertical: 'top',
  horizontal: 'start'
};

var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
      isAbove = _ref.isAbove,
      isEnabled = _ref.isEnabled,
      onResize = _ref.onResize,
      target = _ref.target,
      refCallback = _ref.refCallback,
      customProps = _objectWithoutProperties(_ref, ['children', 'isAbove', 'isEnabled', 'onResize', 'target', 'refCallback']);

  /**
   * Prevents default events from removing the focus from the target.
   * @param {event} event - The event invoking the callback.
   */
  var preventDefault = function preventDefault(event) {
    event.preventDefault();
  };

  var dropdownClasses = cx(['dropdown', { 'is-above': isAbove }, customProps.className]);

  return _react2.default.createElement(
    _terraHookshot2.default,
    {
      isOpen: true,
      isEnabled: isEnabled,
      targetRef: function targetRef() {
        return target;
      },
      attachmentBehavior: 'none',
      contentAttachment: isAbove ? AboveAttachment : BelowAttachment,
      targetAttachment: isAbove ? BelowAttachment : AboveAttachment
    },
    _react2.default.createElement(
      _terraHookshot2.default.Content,
      _extends({}, customProps, {
        className: dropdownClasses,
        onResize: onResize,
        onMouseDown: preventDefault,
        refCallback: refCallback
      }),
      children
    )
  );
};

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

exports.default = Dropdown;