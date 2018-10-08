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

var _SpacerModule = require('./Spacer.module.scss');

var _SpacerModule2 = _interopRequireDefault(_SpacerModule);

var _spacerShorthandUtils = require('./_spacerShorthandUtils');

var _spacerConstants = require('./_spacerConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var cx = _bind2.default.bind(_SpacerModule2.default);

/*
  NOTE: this is needed in order to ensure that the types `marginTop`, `marginRight`, `paddingTop`, `paddingRight`, etc. are recognized by terra-props-table
  as defined. Currently, simply putting `Object.values(SpacerSizes)` causes all other `marginX` and `paddingX` props to be recognized as `undefined`
  in the PropsTable.
*/
var arrayOfSpacerSizes = [].concat(_toConsumableArray(Object.values(_spacerConstants.SpacerSizes)));

var propTypes = {
  /**
   * Child Nodes.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Sets margin in a syntax similar to the standard CSS spec https://developer.mozilla.org/en-US/docs/Web/CSS/margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  margin: _spacerShorthandUtils.shorthandValidator,
  /**
   * Sets top margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginTop: _propTypes2.default.oneOf(arrayOfSpacerSizes),
  /**
   * Sets bottom margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginBottom: _propTypes2.default.oneOf(arrayOfSpacerSizes),
  /**
   * Sets left margin One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginLeft: _propTypes2.default.oneOf(arrayOfSpacerSizes),
  /**
   * Sets right margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  marginRight: _propTypes2.default.oneOf(arrayOfSpacerSizes),
  /**
   * Sets padding in a syntax similar to the standard CSS spec https://developer.mozilla.org/en-US/docs/Web/CSS/padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  padding: _spacerShorthandUtils.shorthandValidator,
  /**
   * Sets top padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingTop: _propTypes2.default.oneOf(arrayOfSpacerSizes),
  /**
   * Sets bottom padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingBottom: _propTypes2.default.oneOf(arrayOfSpacerSizes),
  /**
   * Sets left padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingLeft: _propTypes2.default.oneOf(arrayOfSpacerSizes),
  /**
   * Sets right padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
   */
  paddingRight: _propTypes2.default.oneOf(arrayOfSpacerSizes),
  /**
   * Sets the display to be inline-block.
   */
  isInlineBlock: _propTypes2.default.bool
};

var defaultProps = {
  margin: undefined,
  marginTop: _spacerConstants.SpacerSizes.NONE,
  marginBottom: _spacerConstants.SpacerSizes.NONE,
  marginRight: _spacerConstants.SpacerSizes.NONE,
  marginLeft: _spacerConstants.SpacerSizes.NONE,
  padding: undefined,
  paddingTop: _spacerConstants.SpacerSizes.NONE,
  paddingBottom: _spacerConstants.SpacerSizes.NONE,
  paddingLeft: _spacerConstants.SpacerSizes.NONE,
  paddingRight: _spacerConstants.SpacerSizes.NONE,
  isInlineBlock: false
};

var Spacer = function Spacer(_ref) {
  var margin = _ref.margin,
      marginTop = _ref.marginTop,
      marginBottom = _ref.marginBottom,
      marginLeft = _ref.marginLeft,
      marginRight = _ref.marginRight,
      padding = _ref.padding,
      paddingTop = _ref.paddingTop,
      paddingBottom = _ref.paddingBottom,
      paddingLeft = _ref.paddingLeft,
      paddingRight = _ref.paddingRight,
      isInlineBlock = _ref.isInlineBlock,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight', 'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'isInlineBlock', 'children']);

  var marginShorthand = margin ? (0, _spacerShorthandUtils.mapShorthandToObject)('margin', margin) : {};
  var paddingShorthand = padding ? (0, _spacerShorthandUtils.mapShorthandToObject)('padding', padding) : {};

  var marginAttributes = _extends({
    marginTop: marginTop,
    marginRight: marginRight,
    marginBottom: marginBottom,
    marginLeft: marginLeft
  }, marginShorthand);

  var paddingAttributes = _extends({
    paddingTop: paddingTop,
    paddingRight: paddingRight,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft
  }, paddingShorthand);

  var SpacerClassNames = cx(['margin-top-' + _spacerConstants.SpacerClassMappings[marginAttributes.marginTop], 'margin-bottom-' + _spacerConstants.SpacerClassMappings[marginAttributes.marginBottom], 'margin-left-' + _spacerConstants.SpacerClassMappings[marginAttributes.marginLeft], 'margin-right-' + _spacerConstants.SpacerClassMappings[marginAttributes.marginRight], 'padding-top-' + _spacerConstants.SpacerClassMappings[paddingAttributes.paddingTop], 'padding-bottom-' + _spacerConstants.SpacerClassMappings[paddingAttributes.paddingBottom], 'padding-left-' + _spacerConstants.SpacerClassMappings[paddingAttributes.paddingLeft], 'padding-right-' + _spacerConstants.SpacerClassMappings[paddingAttributes.paddingRight], { 'is-inline-block': isInlineBlock }, customProps.className]);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: SpacerClassNames }),
    children
  );
};

var opts = {
  Sizes: _spacerConstants.SpacerSizes
};

Spacer.propTypes = propTypes;
Spacer.defaultProps = defaultProps;
Spacer.Opts = opts;

exports.default = Spacer;