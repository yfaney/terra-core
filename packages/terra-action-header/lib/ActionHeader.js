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

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraButtonGroup = require('terra-button-group');

var _terraButtonGroup2 = _interopRequireDefault(_terraButtonGroup);

require('terra-base/lib/baseStyles');

var _ActionHeaderContainer = require('./_ActionHeaderContainer');

var _ActionHeaderContainer2 = _interopRequireDefault(_ActionHeaderContainer);

var _ActionHeaderModule = require('./ActionHeader.module.scss');

var _ActionHeaderModule2 = _interopRequireDefault(_ActionHeaderModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_ActionHeaderModule2.default);

var propTypes = {
  /**
   * Text to be displayed as the title in the header bar.
   */
  title: _propTypes2.default.string,
  /**
   * Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`. Default `level=1`.
   */
  level: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6]),
  /**
   * Callback function for when the close button is clicked.
   * On small viewports, this will be triggered by a back button if onBack is not set.
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback function for when the back button is clicked. The back button will not display if this is not set.
   */
  onBack: _propTypes2.default.func,
  /**
   * Callback function for when the expand button is clicked.
   * The expand button will not display if this is not set or on small viewports.
   * Only the expand button will be rendered if onMaximize and onMinimize are set.
   */
  onMaximize: _propTypes2.default.func,
  /**
   * Callback function for when the minimize button is clicked.
   * The minimize button will not display if this is not set or on small viewports.
   * Only the expand button will be rendered if both onMaximize and onMinimize are set.
   */
  onMinimize: _propTypes2.default.func,
  /**
   * Callback function for when the next button is clicked. The previous-next button group will display if either this or onPrevious is set but the button for the one not set will be disabled.
   */
  onNext: _propTypes2.default.func,
  /**
   * Callback function for when the previous button is clicked. The previous-next button group will display if either this or onNext is set but the button for the one not set will be disabled.
   */
  onPrevious: _propTypes2.default.func,
  /**
   * Child element to be displayed on the right end of the header.
   */
  children: _propTypes2.default.element
};

var defaultProps = {
  title: undefined,
  level: 1,
  onClose: undefined,
  onBack: undefined,
  onMaximize: undefined,
  onMinimize: undefined,
  onNext: undefined,
  onPrevious: undefined,
  children: undefined
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  }
};

var ActionHeader = function ActionHeader(_ref, _ref2) {
  var intl = _ref2.intl;

  var title = _ref.title,
      level = _ref.level,
      onClose = _ref.onClose,
      onBack = _ref.onBack,
      onMaximize = _ref.onMaximize,
      onMinimize = _ref.onMinimize,
      onPrevious = _ref.onPrevious,
      onNext = _ref.onNext,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['title', 'level', 'onClose', 'onBack', 'onMaximize', 'onMinimize', 'onPrevious', 'onNext', 'children']);

  var backText = intl.formatMessage({ id: 'Terra.actionHeader.back' });
  var closeText = intl.formatMessage({ id: 'Terra.actionHeader.close' });
  var minimizeText = intl.formatMessage({ id: 'Terra.actionHeader.minimize' });
  var maximizeText = intl.formatMessage({ id: 'Terra.actionHeader.maximize' });
  var previousText = intl.formatMessage({ id: 'Terra.actionHeader.previous' });
  var nextText = intl.formatMessage({ id: 'Terra.actionHeader.next' });

  var closeButton = onClose ? _react2.default.createElement(_terraButton2.default, { className: cx('header-close-button'), isIconOnly: true, icon: _react2.default.createElement('span', { className: cx(['header-icon', 'close']) }), text: closeText, onClick: onClose }) : null;
  var backButton = onBack ? _react2.default.createElement(_terraButton2.default, { className: cx('header-back-button'), isIconOnly: true, icon: _react2.default.createElement('span', { className: cx(['header-icon', 'back']) }), text: backText, onClick: onBack }) : null;

  var expandButton = void 0;
  if (!backButton) {
    if (onMaximize) {
      expandButton = _react2.default.createElement(_terraButton2.default, { isIconOnly: true, icon: _react2.default.createElement('span', { className: cx(['header-icon', 'maximize']) }), text: maximizeText, onClick: onMaximize });
    } else if (onMinimize) {
      expandButton = _react2.default.createElement(_terraButton2.default, { isIconOnly: true, icon: _react2.default.createElement('span', { className: cx(['header-icon', 'minimize']) }), text: minimizeText, onClick: onMinimize });
    }
  }

  var previousNextButtonGroup = onPrevious || onNext ? _react2.default.createElement(
    _terraButtonGroup2.default,
    null,
    _react2.default.createElement(_terraButtonGroup2.default.Button, {
      icon: _react2.default.createElement('span', { className: cx(['header-icon', 'previous']) }),
      text: previousText,
      onClick: onPrevious,
      key: 'ActionHeaderPrevious',
      isDisabled: onPrevious === undefined
    }),
    _react2.default.createElement(_terraButtonGroup2.default.Button, {
      icon: _react2.default.createElement('span', { className: cx(['header-icon', 'next']) }),
      text: nextText,
      onClick: onNext,
      key: 'ActionHeaderNext',
      isDisabled: onNext === undefined
    })
  ) : null;

  var leftButtons = backButton || expandButton || previousNextButtonGroup ? _react2.default.createElement(
    'div',
    { className: cx('left-buttons') },
    backButton,
    expandButton,
    previousNextButtonGroup
  ) : null;

  var rightButtons = closeButton ? _react2.default.createElement(
    'div',
    { className: cx('right-buttons') },
    closeButton
  ) : null;

  return _react2.default.createElement(
    _ActionHeaderContainer2.default,
    _extends({}, customProps, {
      startContent: leftButtons,
      title: title,
      endContent: rightButtons,
      level: level
    }),
    children
  );
};

ActionHeader.propTypes = propTypes;
ActionHeader.defaultProps = defaultProps;
ActionHeader.contextTypes = contextTypes;

exports.default = ActionHeader;