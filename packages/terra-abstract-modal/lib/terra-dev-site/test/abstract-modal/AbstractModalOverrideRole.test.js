'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractModal = require('../../../AbstractModal');

var _AbstractModal2 = _interopRequireDefault(_AbstractModal);

require('./AbstractModalTestStyles.module.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalOverrideRole = function (_React$Component) {
  _inherits(ModalOverrideRole, _React$Component);

  function ModalOverrideRole() {
    _classCallCheck(this, ModalOverrideRole);

    var _this = _possibleConstructorReturn(this, (ModalOverrideRole.__proto__ || Object.getPrototypeOf(ModalOverrideRole)).call(this));

    _this.state = {
      isOpen: true
    };

    _this.handleOpenModal = _this.handleOpenModal.bind(_this);
    _this.handleCloseModal = _this.handleCloseModal.bind(_this);
    return _this;
  }

  _createClass(ModalOverrideRole, [{
    key: 'handleOpenModal',
    value: function handleOpenModal() {
      this.setState({ isOpen: true });
    }
  }, {
    key: 'handleCloseModal',
    value: function handleCloseModal() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var newRole = 'button';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _AbstractModal2.default,
          {
            ariaLabel: 'Terra Modal',
            isOpen: this.state.isOpen,
            onRequestClose: this.handleCloseModal,
            role: newRole,
            classNameModal: 'test-background-class'
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              null,
              'The role is overriden to',
              ' ',
              _react2.default.createElement(
                'b',
                null,
                newRole
              )
            ),
            _react2.default.createElement(
              'button',
              { type: 'button', onClick: this.handleCloseModal },
              'Close Modal'
            )
          )
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'button-open-modal', onClick: this.handleOpenModal },
          'Open isOpen modal'
        )
      );
    }
  }]);

  return ModalOverrideRole;
}(_react2.default.Component);

exports.default = ModalOverrideRole;