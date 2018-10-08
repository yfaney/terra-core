'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TimeInput = require('../../../../TimeInput');

var _TimeInput2 = _interopRequireDefault(_TimeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeInputElement = function (_React$Component) {
  _inherits(TimeInputElement, _React$Component);

  function TimeInputElement(props) {
    _classCallCheck(this, TimeInputElement);

    var _this = _possibleConstructorReturn(this, (TimeInputElement.__proto__ || Object.getPrototypeOf(TimeInputElement)).call(this, props));

    _this.state = { input: '15:23' };
    _this.handleOnChange = _this.handleOnChange.bind(_this);
    return _this;
  }

  _createClass(TimeInputElement, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!window.ontouchstart) {
        this.resetontouchstart = true;
        window.ontouchstart = 'true';
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.resetontouchstart) {
        delete window.ontouchstart;
      }
    }
  }, {
    key: 'handleOnChange',
    value: function handleOnChange(event, input) {
      this.setState({ input: input });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { 'caret-color': 'transparent' } },
        _react2.default.createElement(
          'h3',
          null,
          'Empty Time Input'
        ),
        _react2.default.createElement(_TimeInput2.default, {
          id: 'timeInput',
          name: 'time-input',
          variant: '12-hour'
        }),
        _react2.default.createElement(
          'h3',
          null,
          '(this picker is changeable)'
        ),
        _react2.default.createElement(
          'div',
          { id: 'time-input-value' },
          _react2.default.createElement(
            'h3',
            null,
            'Time Input with value provided - Current Value:',
            this.state.input
          )
        ),
        _react2.default.createElement(_TimeInput2.default, {
          id: 'timeInputValueProvided',
          name: 'time-input-value-provided',
          value: this.state.input,
          onChange: this.handleOnChange,
          variant: '12-hour'
        }),
        _react2.default.createElement(
          'h3',
          null,
          'Time Input with IDs Provided'
        ),
        _react2.default.createElement(_TimeInput2.default, {
          id: 'timeInputIdProvided',
          name: 'time-input-id-provided',
          value: '09:23',
          hourAttributes: { id: 'hours-testing' },
          minuteAttributes: { id: 'minutes-testing' },
          variant: '12-hour'
        }),
        _react2.default.createElement(
          'h3',
          null,
          'Time Input with disabled input'
        ),
        _react2.default.createElement(_TimeInput2.default, {
          id: 'timeInputDisabled',
          name: 'time-input-disabled',
          variant: '12-hour',
          disabled: true
        })
      );
    }
  }]);

  return TimeInputElement;
}(_react2.default.Component);

exports.default = TimeInputElement;