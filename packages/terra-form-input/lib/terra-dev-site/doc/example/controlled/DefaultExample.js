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


var DefaultExample = function (_React$Component) {
  _inherits(DefaultExample, _React$Component);

  function DefaultExample(props) {
    _classCallCheck(this, DefaultExample);

    var _this = _possibleConstructorReturn(this, (DefaultExample.__proto__ || Object.getPrototypeOf(DefaultExample)).call(this, props));

    _this.state = { input: 'Default Input' };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(DefaultExample, [{
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
          'Default'
        ),
        _react2.default.createElement(_terraFormInput2.default, {
          name: 'default input',
          value: this.state.input,
          onChange: this.handleChange
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

  return DefaultExample;
}(_react2.default.Component);

exports.default = DefaultExample;