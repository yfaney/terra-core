'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _focusTrapReact = require('focus-trap-react');

var _focusTrapReact2 = _interopRequireDefault(_focusTrapReact);

require('terra-base/lib/baseStyles');

var _ModalOverlay = require('./_ModalOverlay');

var _ModalOverlay2 = _interopRequireDefault(_ModalOverlay);

var _AbstractModalModule = require('./AbstractModal.module.scss');

var _AbstractModalModule2 = _interopRequireDefault(_AbstractModalModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_AbstractModalModule2.default);

var zIndexes = ['6000', '7000', '8000', '9000'];

var propTypes = {
  /**
   * String that labels the modal for screen readers.
   */
  ariaLabel: _propTypes2.default.string.isRequired,
  /**
   * Content inside the modal dialog.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * CSS classnames that are appended to the modal.
   */
  classNameModal: _propTypes2.default.string,
  /**
   * CSS classnames that are appended to the overlay.
   */
  classNameOverlay: _propTypes2.default.string,
  /**
   * If set to true, the modal will close when a mouseclick is triggered outside the modal.
   */
  closeOnOutsideClick: _propTypes2.default.bool,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: _propTypes2.default.func.isRequired,
  /**
   * If set to true, the modal will trap the focus and prevents any popup within the modal from gaining focus.
   */
  isFocused: _propTypes2.default.bool,
  /**
   * If set to true, the modal will be fullscreen on all breakpoint sizes.
   */
  isFullscreen: _propTypes2.default.bool,
  /**
   * If set to true, the modal dialog with have overflow-y set to scroll.
   */
  isScrollable: _propTypes2.default.bool,
  /**
   * Role attribute on the modal dialog.
   */
  role: _propTypes2.default.string,
  /**
   * Z-Index layer to apply to the ModalContent and ModalOverlay.
   */
  zIndex: _propTypes2.default.oneOf(zIndexes)
};

var defaultProps = {
  classNameModal: null,
  classNameOverlay: null,
  closeOnOutsideClick: true,
  isFocused: true,
  isFullscreen: false,
  isScrollable: false,
  role: 'dialog',
  zIndex: '6000'
};

/* eslint-disable react/prefer-stateless-function */

var ModalContent = function (_React$Component) {
  _inherits(ModalContent, _React$Component);

  function ModalContent() {
    _classCallCheck(this, ModalContent);

    return _possibleConstructorReturn(this, (ModalContent.__proto__ || Object.getPrototypeOf(ModalContent)).apply(this, arguments));
  }

  _createClass(ModalContent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          ariaLabel = _props.ariaLabel,
          children = _props.children,
          classNameModal = _props.classNameModal,
          classNameOverlay = _props.classNameOverlay,
          closeOnOutsideClick = _props.closeOnOutsideClick,
          onRequestClose = _props.onRequestClose,
          role = _props.role,
          isFocused = _props.isFocused,
          isFullscreen = _props.isFullscreen,
          isScrollable = _props.isScrollable,
          zIndex = _props.zIndex,
          customProps = _objectWithoutProperties(_props, ['ariaLabel', 'children', 'classNameModal', 'classNameOverlay', 'closeOnOutsideClick', 'onRequestClose', 'role', 'isFocused', 'isFullscreen', 'isScrollable', 'zIndex']);

      var zIndexLayer = '6000';
      if (zIndexes.indexOf(zIndex) >= 0) {
        zIndexLayer = zIndex;
      }

      var modalClassName = cx(['abstract-modal', { 'is-fullscreen': isFullscreen }, 'layer-' + zIndexLayer, classNameModal]);

      // Delete the closePortal prop that comes from react-portal.
      delete customProps.closePortal;

      return _react2.default.createElement(
        _focusTrapReact2.default,
        {
          paused: !isFocused
        },
        _react2.default.createElement(_ModalOverlay2.default, {
          onClick: closeOnOutsideClick ? onRequestClose : null,
          className: classNameOverlay,
          zIndex: zIndex
        }),
        _react2.default.createElement(
          'div',
          _extends({
            tabIndex: '0',
            'aria-label': ariaLabel,
            className: modalClassName,
            role: role
          }, customProps),
          children
        )
      );
    }
  }]);

  return ModalContent;
}(_react2.default.Component);

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

exports.default = ModalContent;