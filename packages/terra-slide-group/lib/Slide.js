'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('terra-base/lib/baseStyles');

var _SlideModule = require('./Slide.module.scss');

var _SlideModule2 = _interopRequireDefault(_SlideModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * If true, the Slide is marked as hidden using accessiblity attributes.
   */
  isHidden: _propTypes2.default.bool,

  /**
   * The components to display inside the Slide.
   */
  children: _propTypes2.default.node
};

var defaultProps = {
  isHidden: false
};

var Slide = function Slide(props) {
  return _react2.default.createElement(
    'div',
    { className: _SlideModule2.default.slide, 'aria-hidden': props.isHidden || null },
    _react2.default.createElement('div', { className: _SlideModule2.default['slide-shadow'] }),
    props.children
  );
};

Slide.propTypes = propTypes;
Slide.defaultProps = defaultProps;

exports.default = Slide;