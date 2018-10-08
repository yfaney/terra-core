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

var _StatusModule = require('./Status.module.scss');

var _StatusModule2 = _interopRequireDefault(_StatusModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_StatusModule2.default);

var propTypes = {
  /**
   * Child node. Component to display next to the status indicator.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * The color of the status indicator. Accepts a CSS color value.
   */
  color: _propTypes2.default.string
};

var Status = function Status(_ref) {
  var color = _ref.color,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['color', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { style: { borderColor: color }, className: cx('status', customProps.className) }),
    children
  );
};

Status.propTypes = propTypes;

exports.default = Status;