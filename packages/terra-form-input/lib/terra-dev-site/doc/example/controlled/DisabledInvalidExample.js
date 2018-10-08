'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraFormInput = require('terra-form-input');

var _terraFormInput2 = _interopRequireDefault(_terraFormInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var DisabledInvalidExample = function (_React$Component) {
  _inherits(DisabledInvalidExample, _React$Component);

  function DisabledInvalidExample(props) {
    _classCallCheck(this, DisabledInvalidExample);

    var _this = _possibleConstructorReturn(this, (DisabledInvalidExample.__proto__ || Object.getPrototypeOf(DisabledInvalidExample)).call(this, props));

    _this.state = { input: 'Disabled Error Example input' };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(DisabledInvalidExample, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ input: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          null,
          'Disabled'
        ),
        _react2.default.createElement(_terraFormInput2.default, {
          disabled: true,
          value: this.state.input,
          name: 'disabled input',
          onChange: this.handleChange,
          isInvalid: true
        }),
        _react2.default.createElement(
          'p',
          null,
          'Input Provided:',
          this.state.input
        )
      );
    }
  }]);

  return DisabledInvalidExample;
}(_react2.default.Component);

exports.default = DisabledInvalidExample;