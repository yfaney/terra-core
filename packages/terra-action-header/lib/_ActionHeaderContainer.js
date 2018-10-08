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

var _ActionHeaderContainerModule = require('./ActionHeaderContainer.module.scss');

var _ActionHeaderContainerModule2 = _interopRequireDefault(_ActionHeaderContainerModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_ActionHeaderContainerModule2.default);

var propTypes = {
  /**
   * Child element to be displayed on the right end of the header.
   * The element passed as children will be decorated with flex attributes.
   */
  children: _propTypes2.default.element,

  /**
   * Content to be displayed at the start of the header, placed before the title.
   */
  startContent: _propTypes2.default.element,

  /**
   * Text to be displayed as the title in the header bar.
   */
  title: _propTypes2.default.string,

  /**
   * Content to be displayed at the end of the header.
   * The element passed as endContent will be wrapped in a div with flex attributes.
   */
  endContent: _propTypes2.default.element,
  /**
   * Sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`.
   */
  level: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6]).isRequired
};

var defaultProps = {
  title: undefined,
  startContent: undefined,
  endContent: undefined
};

var ActionHeaderContainer = function ActionHeaderContainer(_ref) {
  var children = _ref.children,
      title = _ref.title,
      startContent = _ref.startContent,
      endContent = _ref.endContent,
      level = _ref.level,
      customProps = _objectWithoutProperties(_ref, ['children', 'title', 'startContent', 'endContent', 'level']);

  var HeaderElement = 'h' + level;

  var content = _react2.default.Children.map(children, function (child) {
    return _react2.default.cloneElement(child, { className: cx(['flex-collapse', children.props.className]) });
  });

  var titleElement = title ? _react2.default.createElement(
    'div',
    { className: cx('title-container') },
    _react2.default.createElement(
      HeaderElement,
      { className: cx('title') },
      title
    )
  ) : undefined;

  return _react2.default.createElement(
    'header',
    _extends({}, customProps, { className: cx(['flex-header', customProps.className]) }),
    startContent && _react2.default.createElement(
      'div',
      { className: cx('flex-end') },
      startContent
    ),
    _react2.default.createElement(
      'div',
      { className: cx('flex-fill') },
      titleElement
    ),
    content,
    endContent && _react2.default.createElement(
      'div',
      { className: cx('flex-end') },
      endContent
    )
  );
};

ActionHeaderContainer.propTypes = propTypes;
ActionHeaderContainer.defaultProps = defaultProps;

exports.default = ActionHeaderContainer;