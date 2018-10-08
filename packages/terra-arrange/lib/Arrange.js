'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignmentTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _ArrangeModule = require('./Arrange.module.scss');

var _ArrangeModule2 = _interopRequireDefault(_ArrangeModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AlignmentTypes = {
  CENTER: 'center',
  BOTTOM: 'bottom',
  STRETCH: 'stretch'
};

var cx = _bind2.default.bind(_ArrangeModule2.default);

var propTypes = {
  /**
   * The content to display in the body of the fitStart.
   */
  fitStart: _propTypes2.default.element,
  /**
   * The content to display in the body of the fill.
   */
  fill: _propTypes2.default.element.isRequired,
  /**
   * The content to display in the body of the fitEnd.
   */
  fitEnd: _propTypes2.default.element,
  /**
   * The vertical orientation of all three containers. It will override the aligment of alignFitStart, alignFill and alignFitEnd if given. One of: `center`, `bottom`, `stretch`.
   */
  align: _propTypes2.default.oneOf(['center', 'bottom', 'stretch']),
  /**
   * The vertical orientation of fitStart. One of: `center`, `bottom`, `stretch`.
   */
  alignFitStart: _propTypes2.default.oneOf(['center', 'bottom', 'stretch']),
  /**
   * The vertical orientation of fill. One of: `center`, `bottom`, `stretch`.
   */
  alignFitEnd: _propTypes2.default.oneOf(['center', 'bottom', 'stretch']),
  /**
   * The vertical orientation of fitEnd. One of: `center`, `bottom`, `stretch`.
   */
  alignFill: _propTypes2.default.oneOf(['center', 'bottom', 'stretch']),
  /**
   * The attributes to be set on the fitStart wrapper element
   */
  // eslint-disable-next-line react/forbid-prop-types
  fitStartAttributes: _propTypes2.default.object,
  /**
   * The attributes to be set on the fill wrapper element
   */
  // eslint-disable-next-line react/forbid-prop-types
  fillAttributes: _propTypes2.default.object,
  /**
   * The attributes to be set on the fitEnd wrapper element
   */
  // eslint-disable-next-line react/forbid-prop-types
  fitEndAttributes: _propTypes2.default.object
};

var Arrange = function Arrange(_ref) {
  var fitStart = _ref.fitStart,
      fill = _ref.fill,
      fitEnd = _ref.fitEnd,
      align = _ref.align,
      alignFitStart = _ref.alignFitStart,
      alignFill = _ref.alignFill,
      alignFitEnd = _ref.alignFitEnd,
      fitStartAttributes = _ref.fitStartAttributes,
      fillAttributes = _ref.fillAttributes,
      fitEndAttributes = _ref.fitEndAttributes,
      customProps = _objectWithoutProperties(_ref, ['fitStart', 'fill', 'fitEnd', 'align', 'alignFitStart', 'alignFill', 'alignFitEnd', 'fitStartAttributes', 'fillAttributes', 'fitEndAttributes']);

  var fitStartProps = _extends({}, fitStartAttributes);
  var fillProps = _extends({}, fillAttributes);
  var fitEndProps = _extends({}, fitEndAttributes);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: cx('arrange', customProps.className) }),
    _react2.default.createElement(
      'div',
      _extends({}, fitStartProps, { className: cx('fit', align || alignFitStart, fitStartProps.className) }),
      fitStart
    ),
    _react2.default.createElement(
      'div',
      _extends({}, fillProps, { className: cx('fill', align || alignFill, fillProps.className) }),
      fill
    ),
    _react2.default.createElement(
      'div',
      _extends({}, fitEndProps, { className: cx('fit', align || alignFitEnd, fitEndProps.className) }),
      fitEnd
    )
  );
};

Arrange.propTypes = propTypes;

exports.default = Arrange;
exports.AlignmentTypes = AlignmentTypes;