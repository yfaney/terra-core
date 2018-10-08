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

var _reactPortal = require('react-portal');

require('terra-base/lib/baseStyles');

var _ModalContent = require('./_ModalContent');

var _ModalContent2 = _interopRequireDefault(_ModalContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
   * If set to true, the modal will close when the esc key is pressed.
   */
  closeOnEsc: _propTypes2.default.bool,
  /**
   * If set to true, the modal will close when a mouseclick is triggered outside the modal.
   */
  closeOnOutsideClick: _propTypes2.default.bool,
  /**
   * If set to true, the modal will trap the focus and prevents any popup within the modal from gaining focus.
   */
  isFocused: _propTypes2.default.bool,
  /**
   * If set to true, the modal will be fullscreen on all breakpoint sizes.
   */
  isFullscreen: _propTypes2.default.bool,
  /**
   * If set to true, the modal will rendered as opened.
   */
  isOpen: _propTypes2.default.bool.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: _propTypes2.default.func.isRequired,
  /**
   * Role attribute on the modal dialog.
   */
  role: _propTypes2.default.string,
  /**
   * Z-Index layer to apply to the ModalContent and ModalOverlay. Valid values are the standard modal layer: '6000', and the max layer: '8000'.
   */
  zIndex: _propTypes2.default.oneOf(zIndexes)
};

var defaultProps = {
  classNameModal: null,
  classNameOverlay: null,
  closeOnEsc: true,
  closeOnOutsideClick: true,
  isFocused: true,
  isFullscreen: false,
  role: 'document',
  zIndex: '6000'
};

var KEYCODES = {
  ESCAPE: 27
};

var AbstractModal = function (_React$Component) {
  _inherits(AbstractModal, _React$Component);

  function AbstractModal() {
    _classCallCheck(this, AbstractModal);

    var _this = _possibleConstructorReturn(this, (AbstractModal.__proto__ || Object.getPrototypeOf(AbstractModal)).call(this));

    _this.handleKeydown = _this.handleKeydown.bind(_this);
    return _this;
  }

  _createClass(AbstractModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeydown);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // When the Modal no longer in focus, it should no longer listen to the keydown event to handle the Escape key.
      // Otherwise, the Modal would also get closed when the intention for pressing the Escape key is to close a popup inside the modal.
      if (!nextProps.isFocused && this.props.isFocused) {
        document.removeEventListener('keydown', this.handleKeydown);
      } else if (nextProps.isFocused && !this.props.isFocused) {
        document.addEventListener('keydown', this.handleKeydown);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeydown);
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(e) {
      if (e.keyCode === KEYCODES.ESCAPE && this.props.isOpen && this.props.closeOnEsc && this.props.isFocused) {
        this.props.onRequestClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          ariaLabel = _props.ariaLabel,
          children = _props.children,
          classNameModal = _props.classNameModal,
          classNameOverlay = _props.classNameOverlay,
          closeOnEsc = _props.closeOnEsc,
          closeOnOutsideClick = _props.closeOnOutsideClick,
          isFocused = _props.isFocused,
          isFullscreen = _props.isFullscreen,
          isOpen = _props.isOpen,
          role = _props.role,
          onRequestClose = _props.onRequestClose,
          zIndex = _props.zIndex,
          customProps = _objectWithoutProperties(_props, ['ariaLabel', 'children', 'classNameModal', 'classNameOverlay', 'closeOnEsc', 'closeOnOutsideClick', 'isFocused', 'isFullscreen', 'isOpen', 'role', 'onRequestClose', 'zIndex']);

      if (!isOpen) {
        return null;
      }

      return _react2.default.createElement(
        _reactPortal.Portal,
        {
          isOpened: isOpen
        },
        _react2.default.createElement(
          _ModalContent2.default,
          _extends({}, customProps, {
            closeOnOutsideClick: closeOnOutsideClick,
            ariaLabel: ariaLabel,
            classNameModal: classNameModal,
            classNameOverlay: classNameOverlay,
            role: role,
            isFocused: isFocused,
            isFullscreen: isFullscreen,
            onRequestClose: onRequestClose,
            zIndex: zIndex
          }),
          children
        )
      );
    }
  }]);

  return AbstractModal;
}(_react2.default.Component);

AbstractModal.propTypes = propTypes;
AbstractModal.defaultProps = defaultProps;

exports.default = AbstractModal;