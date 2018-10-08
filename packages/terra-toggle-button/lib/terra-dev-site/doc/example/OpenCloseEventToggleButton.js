'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ToggleButton = require('terra-toggle-button/lib/ToggleButton');

var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var OpenCloseEventToggleButton = function (_React$Component) {
  _inherits(OpenCloseEventToggleButton, _React$Component);

  function OpenCloseEventToggleButton(props) {
    _classCallCheck(this, OpenCloseEventToggleButton);

    var _this = _possibleConstructorReturn(this, (OpenCloseEventToggleButton.__proto__ || Object.getPrototypeOf(OpenCloseEventToggleButton)).call(this, props));

    _this.state = {
      timesOpened: 0,
      timesClosed: 0
    };

    _this.handleOnOpen = _this.handleOnOpen.bind(_this);
    _this.handleOnClose = _this.handleOnClose.bind(_this);
    return _this;
  }

  _createClass(OpenCloseEventToggleButton, [{
    key: 'handleOnOpen',
    value: function handleOnOpen() {
      this.setState(function (prevState) {
        return { timesOpened: prevState.timesOpened + 1 };
      });
    }
  }, {
    key: 'handleOnClose',
    value: function handleOnClose() {
      this.setState(function (prevState) {
        return { timesClosed: prevState.timesClosed + 1 };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { id: 'on-open-event' },
          _react2.default.createElement(
            'p',
            null,
            'Times Opened:',
            _react2.default.createElement(
              'span',
              { style: { display: 'inline-block' } },
              this.state.timesOpened
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Times Closed:',
            _react2.default.createElement(
              'span',
              { style: { display: 'inline-block' } },
              this.state.timesClosed
            )
          )
        ),
        _react2.default.createElement(
          _ToggleButton2.default,
          { closedButtonText: 'ToggleButton', onOpen: this.handleOnOpen, onClose: this.handleOnClose },
          _react2.default.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          )
        )
      );
    }
  }]);

  return OpenCloseEventToggleButton;
}(_react2.default.Component);

exports.default = OpenCloseEventToggleButton;