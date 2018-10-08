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

var _ScrollModule = require('./Scroll.module.scss');

var _ScrollModule2 = _interopRequireDefault(_ScrollModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_ScrollModule2.default);

var propTypes = {
  /**
   * The child content to present in the scrollable region.
   */
  children: _propTypes2.default.node,
  /**
   * Function callback for the ref of the scrollable container.
   */
  refCallback: _propTypes2.default.func
};

var Scroll = function Scroll(_ref) {
  var children = _ref.children,
      refCallback = _ref.refCallback,
      customProps = _objectWithoutProperties(_ref, ['children', 'refCallback']);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: cx(['scroll', customProps.className]), ref: refCallback }),
    children
  );
};

Scroll.propTypes = propTypes;

exports.default = Scroll;