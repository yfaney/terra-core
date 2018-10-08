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

var _OverlayModule = require('./Overlay.module.scss');

var _OverlayModule2 = _interopRequireDefault(_OverlayModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_OverlayModule2.default);

var propTypes = {
  /**
   * The overlay and the elements the overlay should hide when overlay isRelativeToContainer and isOpen.
   */
  children: _propTypes2.default.node
};

var defaultProps = {
  children: null
};

var OverlayContainer = function OverlayContainer(_ref) {
  var children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['children']);

  var OverlayContainerClassNames = cx(['overlay-container', customProps.className]);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: OverlayContainerClassNames, tabIndex: '-1' }),
    children
  );
};

OverlayContainer.propTypes = propTypes;
OverlayContainer.defaultProps = defaultProps;

exports.default = OverlayContainer;