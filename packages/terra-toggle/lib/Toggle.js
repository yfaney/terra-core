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

var _reactAnimateHeight = require('react-animate-height');

var _reactAnimateHeight2 = _interopRequireDefault(_reactAnimateHeight);

require('terra-base/lib/baseStyles');

var _ToggleModule = require('./Toggle.module.scss');

var _ToggleModule2 = _interopRequireDefault(_ToggleModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_ToggleModule2.default);

var propTypes = {
  /**
   * Content in the body of the toggle component that will be expanded or collapsed
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * When set, will animate the toggle component as it is expanded or collapsed
   */
  isAnimated: _propTypes2.default.bool,
  /**
   * Used to expand or collapse toggle content
   */
  isOpen: _propTypes2.default.bool
};

var defaultProps = {
  isAnimated: false,
  isOpen: false
};

var Toggle = function Toggle(_ref) {
  var isAnimated = _ref.isAnimated,
      isOpen = _ref.isOpen,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['isAnimated', 'isOpen', 'children']);

  var height = isOpen ? 'auto' : '0';
  var body = void 0;

  if (isAnimated) {
    body = _react2.default.createElement(
      _reactAnimateHeight2.default,
      { duration: 250, height: height },
      children
    );
  } else {
    body = isOpen && children;
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, {
      className: cx('toggle', customProps.className),
      'aria-hidden': !isOpen
    }),
    body
  );
};

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

exports.default = Toggle;