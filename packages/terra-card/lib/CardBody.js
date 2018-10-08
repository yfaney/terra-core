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

var _CardBodyModule = require('./CardBody.module.scss');

var _CardBodyModule2 = _interopRequireDefault(_CardBodyModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_CardBodyModule2.default);

var propTypes = {
  /**
   * Child Nodes
   */
  children: _propTypes2.default.node,
  /**
   * Provides themeable padding vertical
   */
  hasPaddingVertical: _propTypes2.default.bool,
  /**
   * Provides themeable padding horizontal
   */
  hasPaddingHorizontal: _propTypes2.default.bool,
  /**
  * Sets the content of the card to be centered
  */
  isContentCentered: _propTypes2.default.bool
};

var defaultProps = {
  hasPaddingHorizontal: true,
  hasPaddingVertical: true,
  isContentCentered: false
};

var CardBody = function CardBody(_ref) {
  var children = _ref.children,
      hasPaddingVertical = _ref.hasPaddingVertical,
      hasPaddingHorizontal = _ref.hasPaddingHorizontal,
      isContentCentered = _ref.isContentCentered,
      customProps = _objectWithoutProperties(_ref, ['children', 'hasPaddingVertical', 'hasPaddingHorizontal', 'isContentCentered']);

  var cardBodyClasses = cx([{ 'vertical-padding': hasPaddingVertical }, { 'horizontal-padding': hasPaddingHorizontal }, { 'center-content': isContentCentered }, customProps.className]);
  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: cardBodyClasses }),
    children
  );
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;
exports.default = CardBody;