'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = require('aphrodite');

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _DynamicGridModule = require('./DynamicGrid.module.scss');

var _DynamicGridModule2 = _interopRequireDefault(_DynamicGridModule);

var _RegionModule = require('./Region.module.scss');

var _RegionModule2 = _interopRequireDefault(_RegionModule);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_RegionModule2.default);

var positionShape = {
  /**
  * The starting column line for the region. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start.
  */
  'grid-column-start': _propTypes2.default.number,
  /**
  * The ending column line for the region. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end.
  */
  'grid-column-end': _propTypes2.default.number,
  /**
  * The starting row line for the region. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start.
  */
  'grid-row-start': _propTypes2.default.number,
  /**
  * The ending row line for the region. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end.
  */
  'grid-row-end': _propTypes2.default.number,

  /**
  * Additional CSS properties to apply to the region.
  */
  // eslint-disable-next-line react/forbid-prop-types
  style: _propTypes2.default.object
};

var propTypes = {
  /**
   * The children of the region.
   */
  children: _propTypes2.default.node,

  /*
  * The default position to use.
  */
  defaultPosition: _propTypes2.default.shape(positionShape),

  /*
  *  The template to be used at tiny breakpoints
  */
  tiny: _propTypes2.default.shape(positionShape),

  /*
  *  The template to be used at small breakpoints
  */
  small: _propTypes2.default.shape(positionShape),

  /*
  *  The template to be used at medium breakpoints
  */
  medium: _propTypes2.default.shape(positionShape),

  /*
  *  The template to be used at large breakpoints
  */
  large: _propTypes2.default.shape(positionShape),

  /*
  *  The template to be used at huge breakpoints
  */
  huge: _propTypes2.default.shape(positionShape)
};

var defaultProps = {
  defaultPosition: {},
  tiny: {},
  small: {},
  medium: {},
  large: {},
  huge: {}
};

var Region = function Region(_ref) {
  var children = _ref.children,
      defaultPosition = _ref.defaultPosition,
      tiny = _ref.tiny,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      huge = _ref.huge,
      customProps = _objectWithoutProperties(_ref, ['children', 'defaultPosition', 'tiny', 'small', 'medium', 'large', 'huge']);

  var media = function media(breakpoint, props) {
    return Object.keys(props).length ? _defineProperty({}, '@media screen and (min-width: ' + breakpoint + ')', (0, _styles.region)(props)) : {};
  };

  var stylesheet = _aphrodite.StyleSheet.create({
    region: _extends({}, (0, _styles.region)(defaultPosition), media(_DynamicGridModule2.default.tiny, tiny), media(_DynamicGridModule2.default.small, small), media(_DynamicGridModule2.default.medium, medium), media(_DynamicGridModule2.default.large, large), media(_DynamicGridModule2.default.huge, huge))
  });

  var regionClasses = (0, _bind2.default)(customProps.className, (0, _aphrodite.css)(stylesheet.region));
  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: regionClasses }),
    _react2.default.createElement(
      'div',
      { className: cx('region-child-container') },
      children
    )
  );
};

Region.propTypes = propTypes;
Region.defaultProps = defaultProps;

exports.default = Region;