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

var _DatePicker = require('terra-date-picker/lib/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var propTypes = {
  /**
   * The current DatePicker date if selected. Use for the selected date message.
   */
  selectedDate: _propTypes2.default.node
};

var defaultProps = {
  selectedDate: ''
};

var DatePickerExample = function (_React$Component) {
  _inherits(DatePickerExample, _React$Component);

  function DatePickerExample(props) {
    _classCallCheck(this, DatePickerExample);

    var _this = _possibleConstructorReturn(this, (DatePickerExample.__proto__ || Object.getPrototypeOf(DatePickerExample)).call(this, props));

    _this.state = { date: _this.props.selectedDate };
    _this.handleDateChange = _this.handleDateChange.bind(_this);
    return _this;
  }

  _createClass(DatePickerExample, [{
    key: 'handleDateChange',
    value: function handleDateChange(event, date) {
      this.setState({ date: date });
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
          'Selected ISO Date:',
          _react2.default.createElement(
            'span',
            { style: { display: 'inline-block' } },
            this.state.date
          )
        ),
        _react2.default.createElement(_DatePicker2.default, _extends({
          name: 'date-input',
          onChange: this.handleDateChange
        }, this.props))
      );
    }
  }]);

  return DatePickerExample;
}(_react2.default.Component);

DatePickerExample.propTypes = propTypes;
DatePickerExample.defualtProps = defaultProps;

var DatePickerExampleExcludeDates = function DatePickerExampleExcludeDates() {
  return _react2.default.createElement(DatePickerExample, {
    excludeDates: [(0, _moment2.default)().subtract(1, 'days').format(), (0, _moment2.default)().add(1, 'days').format()]
  });
};

exports.default = DatePickerExampleExcludeDates;