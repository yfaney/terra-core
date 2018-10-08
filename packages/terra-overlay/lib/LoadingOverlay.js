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

var _IconSpinner = require('terra-icon/lib/icon/IconSpinner');

var _IconSpinner2 = _interopRequireDefault(_IconSpinner);

require('terra-base/lib/baseStyles');

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _OverlayModule = require('./Overlay.module.scss');

var _OverlayModule2 = _interopRequireDefault(_OverlayModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_OverlayModule2.default);

var BackgroundStyles = _Overlay2.default.Opts.BackgroundStyles;


var propTypes = {
  /**
  * The message to be displayed within the overlay.
  */
  message: _propTypes2.default.string,
  /**
  * Indicates if the icon spinner should be animated.
  */
  isAnimated: _propTypes2.default.bool,
  /**
  * The visual theme to be applied to the overlay background. Accepts 'light', 'dark', and 'clear' or BackgroundStyles.LIGHT, BackgroundStyles.DARK, and BackgroundStyles.CLEAR.
  */
  backgroundStyle: _propTypes2.default.oneOf(['light', 'dark', 'clear', BackgroundStyles]),
  /**
  * Indicates if the overlay is open.
  */
  isOpen: _propTypes2.default.bool,
  /**
  * Indicates if the overlay is relative to the triggering container.
  */
  isRelativeToContainer: _propTypes2.default.bool
};

var defaultProps = {
  isAnimated: false,
  isOpen: false,
  backgroundStyle: BackgroundStyles.LIGHT,
  isRelativeToContainer: false
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  }
  /* eslint-enable consistent-return */
};

var LoadingOverlay = function LoadingOverlay(_ref, _ref2) {
  var intl = _ref2.intl;

  var message = _ref.message,
      isAnimated = _ref.isAnimated,
      customProps = _objectWithoutProperties(_ref, ['message', 'isAnimated']);

  // eslint-disable-next-line no-param-reassign
  delete customProps.onRequestClose;

  var loadingMessage = message !== undefined ? message : intl.formatMessage({ id: 'Terra.Overlay.loading' });

  return _react2.default.createElement(
    _Overlay2.default,
    _extends({}, customProps, { className: cx('loading-overlay', customProps.className) }),
    _react2.default.createElement(_IconSpinner2.default, { className: cx('icon'), isSpin: isAnimated, height: '36', width: '36' }),
    _react2.default.createElement(
      'div',
      { className: cx('message') },
      loadingMessage
    )
  );
};

var Opts = { BackgroundStyles: BackgroundStyles };

LoadingOverlay.propTypes = propTypes;
LoadingOverlay.defaultProps = defaultProps;
LoadingOverlay.contextTypes = contextTypes;
LoadingOverlay.Opts = Opts;

exports.default = LoadingOverlay;