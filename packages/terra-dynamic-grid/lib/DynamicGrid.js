'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphrodite = require('aphrodite');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

var _styles = require('./styles');

var _Region = require('./Region');

var _Region2 = _interopRequireDefault(_Region);

var _DynamicGridModule = require('./DynamicGrid.module.scss');

var _DynamicGridModule2 = _interopRequireDefault(_DynamicGridModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var templateShape = {
  /**
  * The column definitions of the grid. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns.
  * For IE support, verify syntax is supported here https://msdn.microsoft.com/en-us/library/hh772246(v=vs.85).aspx.
  */
  'grid-template-columns': _propTypes2.default.string,
  /**
  * The row definitions of the grid. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows.
  * For IE support, verify syntax is supported here https://msdn.microsoft.com/en-us/library/hh772258(v=vs.85).aspx.
  */
  'grid-template-rows': _propTypes2.default.string,
  /**
  * The gap to place between the columns and rows. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap.
  */
  'grid-gap': _propTypes2.default.string,
  /**
  * Additional CSS properties to apply to the grid.
  */
  // eslint-disable-next-line react/forbid-prop-types
  style: _propTypes2.default.object
};

var propTypes = {
  /**
  * The child Region components that make up the grid.
  */
  children: _propTypes2.default.node,

  /*
  * The default grid layout template to use.
  */
  defaultTemplate: _propTypes2.default.shape(templateShape),

  /*
  *  The template to be used at tiny breakpoints
  */
  tiny: _propTypes2.default.shape(templateShape),

  /*
  *  The template to be used at small breakpoints
  */
  small: _propTypes2.default.shape(templateShape),

  /*
  *  The template to be used at medium breakpoints
  */
  medium: _propTypes2.default.shape(templateShape),

  /*
  *  The template to be used at large breakpoints
  */
  large: _propTypes2.default.shape(templateShape),

  /*
  *  The template to be used at huge breakpoints
  */
  huge: _propTypes2.default.shape(templateShape)
};

var defaultProps = {
  defaultTemplate: {},
  tiny: {},
  small: {},
  medium: {},
  large: {},
  huge: {}
};

var DynamicGrid = function DynamicGrid(_ref) {
  var defaultTemplate = _ref.defaultTemplate,
      tiny = _ref.tiny,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      huge = _ref.huge,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['defaultTemplate', 'tiny', 'small', 'medium', 'large', 'huge', 'children']);

  var media = function media(breakpoint, props) {
    return Object.keys(props).length ? _defineProperty({}, '@media screen and (min-width: ' + breakpoint + ')', (0, _styles.grid)(props)) : {};
  };

  var stylesheet = _aphrodite.StyleSheet.create({
    grid: _extends({}, (0, _styles.grid)(defaultTemplate), media(_DynamicGridModule2.default.tiny, tiny), media(_DynamicGridModule2.default.small, small), media(_DynamicGridModule2.default.medium, medium), media(_DynamicGridModule2.default.large, large), media(_DynamicGridModule2.default.huge, huge))
  });

  var gridClasses = (0, _classnames2.default)(customProps.className, (0, _aphrodite.css)(stylesheet.grid));
  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: gridClasses }),
    children
  );
};

DynamicGrid.propTypes = propTypes;
DynamicGrid.defaultProps = defaultProps;
DynamicGrid.Region = _Region2.default;

exports.default = DynamicGrid;