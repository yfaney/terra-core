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

var OpenToggle = function (_React$Component) {
  _inherits(OpenToggle, _React$Component);

  function OpenToggle() {
    _classCallCheck(this, OpenToggle);

    var _this = _possibleConstructorReturn(this, (OpenToggle.__proto__ || Object.getPrototypeOf(OpenToggle)).call(this));

    _this.state = { isOpen: true };

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    return _this;
  }

  _createClass(OpenToggle, [{
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
          'Open Toggle'
        ),
        _react2.default.createElement(
          _Toggle2.default,
          { id: 'toggle', isOpen: isOpen },
          _react2.default.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          )
        )
      );
    }
  }]);

  return OpenToggle;
}(_react2.default.Component);

exports.default = OpenToggle;