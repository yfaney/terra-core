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

var _FieldsetModule = require('./Fieldset.module.scss');

var _FieldsetModule2 = _interopRequireDefault(_FieldsetModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable react/jsx-boolean-value, jsx-a11y/label-has-for */


var cx = _bind2.default.bind(_FieldsetModule2.default);

var propTypes = {
  /**
   * Children the Field contains.
   */
  children: _propTypes2.default.node,
  /**
   * Help element to display with other elements.
   */
  help: _propTypes2.default.node,
  /**
   * Legend for the input group.
   */
  legend: _propTypes2.default.string,
  /**
   * Attributes to attach to the legend.
   */
  // eslint-disable-next-line react/forbid-prop-types
  legendAttrs: _propTypes2.default.object,
  /**
   * Determines whether the fieldset is required.
   */
  required: _propTypes2.default.bool
};

var defaultProps = {
  legendAttrs: {},
  required: false
};

var Fieldset = function Fieldset(_ref) {
  var children = _ref.children,
      help = _ref.help,
      legend = _ref.legend,
      legendAttrs = _ref.legendAttrs,
      required = _ref.required,
      customProps = _objectWithoutProperties(_ref, ['children', 'help', 'legend', 'legendAttrs', 'required']);

  var fieldsetClasses = cx(['fieldset', { 'fieldset-required': required }, customProps.className]);

  var legendClasses = cx(['legend', legendAttrs.className]);

  return _react2.default.createElement(
    'fieldset',
    _extends({}, customProps, { className: fieldsetClasses }),
    legend && _react2.default.createElement(
      'legend',
      _extends({}, legendAttrs, { className: legendClasses }),
      legend
    ),
    help && _react2.default.createElement(
      'small',
      { className: cx('help-text'), tabIndex: '-1' },
      help
    ),
    _react2.default.createElement(
      'div',
      { className: cx('fieldset-children') },
      children
    )
  );
};

Fieldset.propTypes = propTypes;
Fieldset.defaultProps = defaultProps;

exports.default = Fieldset;