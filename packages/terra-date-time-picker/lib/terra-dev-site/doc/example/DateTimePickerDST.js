'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DateTimePicker = require('terra-date-time-picker/lib/DateTimePicker');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var propTypes = {
  /**
   * The current entered date time. Use for the selected date message.
   */
  value: _propTypes2.default.node
};

var defaultProps = {
  value: ''
};

var DateTimePickerExample = function (_React$Component) {
  _inherits(DateTimePickerExample, _React$Component);

  function DateTimePickerExample(props) {
    _classCallCheck(this, DateTimePickerExample);

    var _this = _possibleConstructorReturn(this, (DateTimePickerExample.__proto__ || Object.getPrototypeOf(DateTimePickerExample)).call(this, props));

    _this.state = { dateTime: _this.props.value };
    _this.handleDateTimeChange = _this.handleDateTimeChange.bind(_this);
    return _this;
  }

  _createClass(DateTimePickerExample, [{
    key: 'handleDateTimeChange',
    value: function handleDateTimeChange(event, dateTime) {
      this.setState({ dateTime: dateTime });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Selected ISO Date Time:',
          this.state.dateTime
        ),
        _react2.default.createElement(_DateTimePicker2.default, _extends({
          name: 'date-time-picker-example',
          onChange: this.handleDateTimeChange
        }, this.props))
      );
    }
  }]);

  return DateTimePickerExample;
}(_react2.default.Component);

DateTimePickerExample.propTypes = propTypes;
DateTimePickerExample.defualtProps = defaultProps;

var DateTimePickerExampleDST = function DateTimePickerExampleDST() {
  return _react2.default.createElement(DateTimePickerExample, {
    value: (0, _moment2.default)().format()
  });
};

exports.default = DateTimePickerExampleDST;