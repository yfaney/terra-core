'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('../../../../lib/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePickerOnChange = function (_React$Component) {
  _inherits(DatePickerOnChange, _React$Component);

  function DatePickerOnChange(props) {
    _classCallCheck(this, DatePickerOnChange);

    var _this = _possibleConstructorReturn(this, (DatePickerOnChange.__proto__ || Object.getPrototypeOf(DatePickerOnChange)).call(this, props));

    _this.state = { date: '' };
    _this.handleDateChange = _this.handleDateChange.bind(_this);
    return _this;
  }

  _createClass(DatePickerOnChange, [{
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
          'h3',
          null,
          'Selected Date:',
          _react2.default.createElement(
            'span',
            { id: 'selected-date' },
            this.state.date
          )
        ),
        _react2.default.createElement(_DatePicker2.default, {
          name: 'date-input-onchange',
          onChange: this.handleDateChange
        })
      );
    }
  }]);

  return DatePickerOnChange;
}(_react2.default.Component);

exports.default = DatePickerOnChange;