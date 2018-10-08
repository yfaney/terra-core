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

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _DialogModule = require('./Dialog.module.scss');

var _DialogModule2 = _interopRequireDefault(_DialogModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_DialogModule2.default);

var propTypes = {
  /**
   * React node to be placed within the header area of the dialog.
   */
  header: _propTypes2.default.node.isRequired,
  /**
   * React node to be placed within the footer area of the dialog.
   * Content exceeding the available space will be hidden.
   */
  footer: _propTypes2.default.node.isRequired,
  /**
   * The children to be placed within the main content area of the dialog.
   */
  children: _propTypes2.default.node,
  /**
   * Callback function for when the close button is clicked. The close button will not display if this is not set.
   * On small viewports a back button will be displayed instead of a close button.
   */
  onClose: _propTypes2.default.func
};

var defaultProps = {
  onClose: null,
  children: null
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  }
};

var Dialog = function Dialog(_ref, _ref2) {
  var intl = _ref2.intl;

  var header = _ref.header,
      footer = _ref.footer,
      onClose = _ref.onClose,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['header', 'footer', 'onClose', 'children']);

  var dialogClassNames = cx(['dialog', customProps.className]);

  var closeText = intl.formatMessage({ id: 'Terra.dialog.close' });
  var closeButton = onClose ? _react2.default.createElement(
    'div',
    { className: cx('dialog-header-close') },
    _react2.default.createElement(_terraButton2.default, { variant: 'utility', text: closeText, onClick: onClose, isIconOnly: true, icon: _react2.default.createElement('span', { className: cx('close-icon') }) })
  ) : null;

  var dialogHeader = _react2.default.createElement(
    'div',
    { className: cx('dialog-header') },
    _react2.default.createElement(
      'div',
      { className: cx('dialog-header-title') },
      header
    ),
    closeButton
  );

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: dialogClassNames }),
    _react2.default.createElement(
      _terraContentContainer2.default,
      { fill: true, header: dialogHeader, footer: _react2.default.createElement(
          'div',
          { className: cx('dialog-footer') },
          footer
        ) },
      _react2.default.createElement(
        'div',
        { className: cx('dialog-body') },
        children
      )
    )
  );
};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
Dialog.contextTypes = contextTypes;

exports.default = Dialog;