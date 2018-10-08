'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Toggle = require('../../../Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnimatedToggle = function (_React$Component) {
  _inherits(AnimatedToggle, _React$Component);

  function AnimatedToggle() {
    _classCallCheck(this, AnimatedToggle);

    var _this = _possibleConstructorReturn(this, (AnimatedToggle.__proto__ || Object.getPrototypeOf(AnimatedToggle)).call(this));

    _this.state = { isOpen: false };

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    return _this;
  }

  _createClass(AnimatedToggle, [{
    key: 'handleOnClick',
    value: function handleOnClick() {
      this.setState(function (prevState) {
        return { isOpen: !prevState.isOpen };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var isOpen = this.state.isOpen;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'trigger-toggle', onClick: this.handleOnClick },
          'Animated Toggle'
        ),
        _react2.default.createElement(
          _Toggle2.default,
          { id: 'toggle', isOpen: isOpen, isAnimated: true },
          _react2.default.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet,',
            _react2.default.createElement(
              'a',
              { id: 'link', href: '#test' },
              'consectetur'
            ),
            ' ',
            'adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'text-input' },
              'Text input'
            ),
            _react2.default.createElement('input', { id: 'text-input', className: 'test', type: 'text' })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'select-field', defaultValue: 'Option 01' },
              'Select field'
            ),
            _react2.default.createElement(
              'select',
              { id: 'select-field' },
              _react2.default.createElement(
                'option',
                null,
                'Option 01'
              ),
              _react2.default.createElement(
                'option',
                null,
                'Option 02'
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'textarea' },
              'Textarea'
            ),
            _react2.default.createElement('textarea', { id: 'textarea', cols: '30', rows: '5', defaultValue: 'Textarea text' })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              { type: 'button', id: 'button' },
              'button'
            )
          )
        )
      );
    }
  }]);

  return AnimatedToggle;
}(_react2.default.Component);

exports.default = AnimatedToggle;