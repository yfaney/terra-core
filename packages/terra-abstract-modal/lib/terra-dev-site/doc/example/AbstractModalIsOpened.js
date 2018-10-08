'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractModal = require('terra-abstract-modal/lib/AbstractModal');

var _AbstractModal2 = _interopRequireDefault(_AbstractModal);

var _ExampleAbstractSizeModule = require('./ExampleAbstractSize.module.scss');

var _ExampleAbstractSizeModule2 = _interopRequireDefault(_ExampleAbstractSizeModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var AbstractModalIsOpen = function (_React$Component) {
  _inherits(AbstractModalIsOpen, _React$Component);

  function AbstractModalIsOpen() {
    _classCallCheck(this, AbstractModalIsOpen);

    var _this = _possibleConstructorReturn(this, (AbstractModalIsOpen.__proto__ || Object.getPrototypeOf(AbstractModalIsOpen)).call(this));

    _this.state = {
      isOpen: false
    };

    _this.handleOpenModal = _this.handleOpenModal.bind(_this);
    _this.handleCloseModal = _this.handleCloseModal.bind(_this);
    return _this;
  }

  _createClass(AbstractModalIsOpen, [{
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
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _AbstractModal2.default,
          {
            ariaLabel: 'Default Modal',
            isOpen: this.state.isOpen,
            onRequestClose: this.handleCloseModal,
            classNameModal: _ExampleAbstractSizeModule2.default['fixed-size']
          },
          _react2.default.createElement(
            'div',
            { style: {
                height: '100%', width: '100%', overflow: 'hidden', backgroundColor: 'antiquewhite'
              }
            },
            _react2.default.createElement(
              'h1',
              null,
              'Default Modal'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              'You can close the modal by:'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                '- Pressing the ESC key'
              ),
              _react2.default.createElement(
                'li',
                null,
                '- Clicking on the overlay'
              ),
              _react2.default.createElement(
                'li',
                null,
                '- Clicking on the close button'
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              'On smaller screens, the modal will take up the full screen.'
            ),
            _react2.default.createElement('p', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'button',
              { type: 'button', onClick: this.handleCloseModal },
              'Close Modal'
            )
          )
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: this.handleOpenModal },
          'Open Modal'
        )
      );
    }
  }]);

  return AbstractModalIsOpen;
}(_react2.default.Component);

exports.default = AbstractModalIsOpen;