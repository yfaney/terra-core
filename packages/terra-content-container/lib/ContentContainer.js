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

var _terraScroll = require('terra-scroll');

var _terraScroll2 = _interopRequireDefault(_terraScroll);

var _ContentContainerModule = require('./ContentContainer.module.scss');

var _ContentContainerModule2 = _interopRequireDefault(_ContentContainerModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_ContentContainerModule2.default);

var propTypes = {
  /**
   * The header element to be placed within the header area of the container.
   */
  header: _propTypes2.default.node,
  /**
   * The footer element to be placed within the footer area of the container.
   */
  footer: _propTypes2.default.node,
  /**
   * The children to be placed within the main content area of the container.
   */
  children: _propTypes2.default.node,
  /**
   * Whether or not the container should expanded to fill its parent element.
   */
  fill: _propTypes2.default.bool,
  /**
   * Ref callback for the scrollable area of the content container.
   */
  scrollRefCallback: _propTypes2.default.func
};

var defaultProps = {
  header: undefined,
  footer: undefined,
  children: undefined,
  fill: false,
  scrollRefCallback: undefined
};

var ContentContainer = function ContentContainer(_ref) {
  var header = _ref.header,
      footer = _ref.footer,
      children = _ref.children,
      fill = _ref.fill,
      scrollRefCallback = _ref.scrollRefCallback,
      customProps = _objectWithoutProperties(_ref, ['header', 'footer', 'children', 'fill', 'scrollRefCallback']);

  var contentLayoutClassNames = cx(['content-container-' + (fill ? 'fill' : 'static'), customProps.className]);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: contentLayoutClassNames }),
    header && _react2.default.createElement(
      'div',
      { className: cx('header') },
      header
    ),
    _react2.default.createElement(
      'div',
      { className: cx('main') },
      _react2.default.createElement(
        _terraScroll2.default,
        { className: cx('normalizer'), refCallback: scrollRefCallback },
        children
      )
    ),
    footer && _react2.default.createElement(
      'div',
      { className: cx('footer') },
      footer
    )
  );
};

ContentContainer.propTypes = propTypes;
ContentContainer.defaultProps = defaultProps;

exports.default = ContentContainer;