'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _terraDatePicker = require('terra-date-picker');

var _terraDatePicker2 = _interopRequireDefault(_terraDatePicker);

var _terraTimeInput = require('terra-time-input');

var _terraTimeInput2 = _interopRequireDefault(_terraTimeInput);

var _DateUtil = require('terra-date-picker/lib/DateUtil');

var _DateUtil2 = _interopRequireDefault(_DateUtil);

var _DateTimePickerModule = require('./DateTimePicker.module.scss');

var _DateTimePickerModule2 = _interopRequireDefault(_DateTimePickerModule);

var _DateTimeUtils = require('./DateTimeUtils');

var _DateTimeUtils2 = _interopRequireDefault(_DateTimeUtils);

var _TimeClarification = require('./_TimeClarification');

var _TimeClarification2 = _interopRequireDefault(_TimeClarification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_DateTimePickerModule2.default);

var propTypes = {
  /**
   * Custom input attributes to apply to the date input. Use the name prop to set the name for the date input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  // eslint-disable-next-line react/forbid-prop-types
  dateInputAttributes: _propTypes2.default.object,
  /**
   * Whether the date and time inputs should be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * An array of ISO 8601 string representation of the dates to disable in the picker.
   */
  excludeDates: _propTypes2.default.arrayOf(_propTypes2.default.string),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled.
   * A return value of true will be enabled and false will be disabled.
   */
  filterDate: _propTypes2.default.func,
  /**
   * An array of ISO 8601 string representation of the dates to enable in the picker.
   * All Other dates will be disabled.
   */
  includeDates: _propTypes2.default.arrayOf(_propTypes2.default.string),
  /**
   * An ISO 8601 string representation of the maximum date time.
   */
  maxDateTime: _propTypes2.default.string,
  /**
   * An ISO 8601 string representation of the minimum date time.
   */
  minDateTime: _propTypes2.default.string,
  /**
   * Name of the date input. The name should be unique.
   */
  name: _propTypes2.default.string.isRequired,
  /**
   * A callback function to execute when a valid date is selected or entered.
   * The first parameter is the event. The second parameter is the changed input value.
   */
  onChange: _propTypes2.default.func,
  /**
   * A callback function to execute when a change is made in the date or time input.
   * The first parameter is the event. The second parameter is the changed input value.
   */
  onChangeRaw: _propTypes2.default.func,
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: _propTypes2.default.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: _propTypes2.default.func,
  /**
   * Custom input attributes to apply to the time input. Use the name prop to set the name for the time input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  // eslint-disable-next-line react/forbid-prop-types
  timeInputAttributes: _propTypes2.default.object,
  /**
   * An ISO 8601 string representation of the initial value to show in the date and time inputs.
   */
  value: _propTypes2.default.string
};

var defaultProps = {
  dateInputAttributes: undefined,
  disabled: false,
  excludeDates: undefined,
  filterDate: undefined,
  includeDates: undefined,
  maxDateTime: undefined,
  minDateTime: undefined,
  onChange: undefined,
  onChangeRaw: undefined,
  releaseFocus: undefined,
  requestFocus: undefined,
  timeInputAttributes: undefined,
  value: undefined
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  }
};

var keyCodes = {
  ARROWDOWN: 40
};

var DateTimePicker = function (_React$Component) {
  _inherits(DateTimePicker, _React$Component);

  function DateTimePicker(props) {
    _classCallCheck(this, DateTimePicker);

    var _this = _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call(this, props));

    _this.state = {
      dateTime: _DateTimeUtils2.default.createSafeDate(props.value),
      isAmbiguousTime: false,
      isTimeClarificationOpen: false
    };

    // The dateValue and timeValue variables represent the actual value in the date input and time input respectively.
    // They are used to keep track of the currently entered value to determine whether or not the entry is valid.
    // Unlike dateValue and timeValue, this.state.dateTime is the internal moment object representing both the date and time as one entity
    // It is used for date/time minuipulation and used to calculate the missing/ambiguous hour.
    // The dateValue and timeValue are tracked outside of the react state to limit the number of renderings that occur.
    _this.dateValue = '';
    _this.timeValue = '';
    _this.isDefaultDateTimeAcceptable = true;

    _this.handleDateChange = _this.handleDateChange.bind(_this);
    _this.handleDateChangeRaw = _this.handleDateChangeRaw.bind(_this);
    _this.handleTimeChange = _this.handleTimeChange.bind(_this);
    _this.handleOnSelect = _this.handleOnSelect.bind(_this);
    _this.handleOnDateBlur = _this.handleOnDateBlur.bind(_this);
    _this.handleOnTimeBlur = _this.handleOnTimeBlur.bind(_this);
    _this.handleDaylightSavingButtonClick = _this.handleDaylightSavingButtonClick.bind(_this);
    _this.handleStandardTimeButtonClick = _this.handleStandardTimeButtonClick.bind(_this);
    _this.handleOnDateInputFocus = _this.handleOnDateInputFocus.bind(_this);
    _this.handleOnTimeInputFocus = _this.handleOnTimeInputFocus.bind(_this);
    _this.handleOnCalendarButtonClick = _this.handleOnCalendarButtonClick.bind(_this);
    _this.handleOffsetButtonClick = _this.handleOffsetButtonClick.bind(_this);
    _this.handleOnRequestClose = _this.handleOnRequestClose.bind(_this);
    return _this;
  }

  _createClass(DateTimePicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var dateFormat = _DateUtil2.default.getFormatByLocale(this.context.intl.locale);

      this.dateValue = _DateTimeUtils2.default.formatMomentDateTime(this.state.dateTime, dateFormat);
      this.timeValue = _DateTimeUtils2.default.hasTime(this.props.value) ? _DateTimeUtils2.default.formatISODateTime(this.props.value, 'HH:mm') : '';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.isDefaultDateAcceptable = this.validateDefaultDate();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value === this.props.value) {
        return;
      }

      this.setState({
        dateTime: _DateTimeUtils2.default.createSafeDate(nextProps.value)
      });
    }
  }, {
    key: 'handleOnSelect',
    value: function handleOnSelect(event, selectedDate) {
      var dateFormat = _DateUtil2.default.getFormatByLocale(this.context.intl.locale);
      this.dateValue = _DateTimeUtils2.default.formatISODateTime(selectedDate, dateFormat);
      var previousDateTime = this.state.dateTime ? this.state.dateTime.clone() : null;
      var updatedDateTime = _DateTimeUtils2.default.syncDateTime(previousDateTime, selectedDate, this.timeValue);

      if (!previousDateTime || previousDateTime.format() !== updatedDateTime.format()) {
        this.checkAmbiguousTime(updatedDateTime);
      }
    }
  }, {
    key: 'handleOnDateBlur',
    value: function handleOnDateBlur(event) {
      var dateFormat = _DateUtil2.default.getFormatByLocale(this.context.intl.locale);
      var isDateTimeValid = _DateTimeUtils2.default.isValidDateTime(event.target.value, this.timeValue, dateFormat);
      var enteredDateTime = isDateTimeValid ? this.state.dateTime : null;

      this.checkAmbiguousTime(enteredDateTime);
    }
  }, {
    key: 'handleOnTimeBlur',
    value: function handleOnTimeBlur() {
      var dateFormat = _DateUtil2.default.getFormatByLocale(this.context.intl.locale);
      var isDateTimeValid = _DateTimeUtils2.default.isValidDateTime(this.dateValue, this.timeValue, dateFormat);
      var updatedDateTime = void 0;

      if (isDateTimeValid) {
        updatedDateTime = _DateTimeUtils2.default.updateTime(this.state.dateTime, this.timeValue);
      }

      this.checkAmbiguousTime(updatedDateTime);
    }
  }, {
    key: 'checkAmbiguousTime',
    value: function checkAmbiguousTime(dateTime) {
      // To prevent multiple time clarification dialogs from rendering, ensure that it is not open before checking for the ambiguous hour.
      // One situation is when using the right arrow key to move focus from the hour input to the minute input, it will invoke onBlur and check for ambiguous hour.
      // If the hour is ambiguous, the dialog would display and steal focus from the minute input, which again will invoke onBlur and check for ambiguous hour.
      if (this.state.isTimeClarificationOpen) {
        return;
      }

      var isDateTimeAmbiguous = false;
      var isOldTimeAmbiguous = this.state.isAmbiguousTime;
      if (dateTime && dateTime.isValid()) {
        var tempDateTime = dateTime.clone();
        isDateTimeAmbiguous = _DateTimeUtils2.default.checkAmbiguousTime(tempDateTime);
      }

      this.setState({
        isAmbiguousTime: isDateTimeAmbiguous,
        isTimeClarificationOpen: isDateTimeAmbiguous && !isOldTimeAmbiguous
      });
    }
  }, {
    key: 'handleDateChange',
    value: function handleDateChange(event, date) {
      if (event.type === 'change') {
        this.dateValue = event.target.value;
      }

      var updatedDateTime = void 0;
      var formattedDate = _DateTimeUtils2.default.formatISODateTime(date, 'YYYY-MM-DD');

      if (_DateTimeUtils2.default.isValidDate(formattedDate, 'YYYY-MM-DD')) {
        var previousDateTime = this.state.dateTime ? this.state.dateTime.clone() : null;
        updatedDateTime = _DateTimeUtils2.default.syncDateTime(previousDateTime, date, this.timeValue);

        if (_DateTimeUtils2.default.isValidTime(this.timeValue)) {
          this.timeValue = _DateTimeUtils2.default.formatISODateTime(updatedDateTime.format(), 'HH:mm');
        }
      }

      this.handleChange(event, updatedDateTime);
    }
  }, {
    key: 'handleDateChangeRaw',
    value: function handleDateChangeRaw(event, date) {
      this.dateValue = event.target.value;
      this.handleChangeRaw(event, date);
    }
  }, {
    key: 'handleTimeChange',
    value: function handleTimeChange(event, time) {
      this.timeValue = time;
      var dateFormat = _DateUtil2.default.getFormatByLocale(this.context.intl.locale);
      var validDate = _DateTimeUtils2.default.isValidDate(this.dateValue, dateFormat);
      var validTime = _DateTimeUtils2.default.isValidTime(this.timeValue);
      var previousDateTime = this.state.dateTime ? this.state.dateTime.clone() : null;

      // If both date and time are valid, check if the time is the missing hour and invoke onChange.
      // If the date is valid but time is invalid, the time in the dateTime state needs to be cleared and render.
      if (validDate && validTime) {
        var updatedDateTime = _DateTimeUtils2.default.updateTime(previousDateTime, time);

        if (event.keyCode === keyCodes.ARROWDOWN && previousDateTime && updatedDateTime && previousDateTime.format() === updatedDateTime.format()) {
          updatedDateTime.subtract(1, 'hours');
        }

        this.timeValue = _DateTimeUtils2.default.formatISODateTime(updatedDateTime.format(), 'HH:mm');
        this.handleChangeRaw(event, this.timeValue);
        this.handleChange(event, updatedDateTime);
      } else {
        // If the date is valid but the time is not, the time part in the dateTime state needs to be cleared to reflect the change.
        if (validDate && !validTime) {
          var _updatedDateTime = _DateTimeUtils2.default.updateTime(previousDateTime, '00:00');

          this.setState({
            dateTime: _updatedDateTime
          });
        }

        this.handleChangeRaw(event, time);
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event, newDateTime) {
      this.setState({
        dateTime: newDateTime
      });

      if (this.props.onChange) {
        this.props.onChange(event, newDateTime && newDateTime.isValid() ? newDateTime.format() : '');
      }
    }
  }, {
    key: 'handleChangeRaw',
    value: function handleChangeRaw(event, value) {
      if (this.props.onChangeRaw) {
        this.props.onChangeRaw(event, value);
      }
    }
  }, {
    key: 'handleOnDateInputFocus',
    value: function handleOnDateInputFocus(event) {
      this.handleOnInputFocus(event);
    }
  }, {
    key: 'handleOnTimeInputFocus',
    value: function handleOnTimeInputFocus(event) {
      this.handleOnInputFocus(event);
    }
  }, {
    key: 'handleOnInputFocus',
    value: function handleOnInputFocus(event) {
      if (!this.isDefaultDateAcceptable) {
        this.dateValue = '';
        this.timeValue = '';
        this.handleChange(event, null);
        this.isDefaultDateAcceptable = true;
      }
    }
  }, {
    key: 'handleOnCalendarButtonClick',
    value: function handleOnCalendarButtonClick(event) {
      if (!this.isDefaultDateAcceptable && !this.validateDefaultDate()) {
        this.dateValue = '';
        this.timeValue = '';
        this.handleChange(event, null);
      } else {
        this.isDefaultDateAcceptable = true;
      }
    }
  }, {
    key: 'validateDefaultDate',
    value: function validateDefaultDate() {
      var isAcceptable = true;

      if (_DateUtil2.default.isDateOutOfRange(this.state.dateTime, _DateUtil2.default.createSafeDate(this.props.minDateTime), _DateUtil2.default.createSafeDate(this.props.maxDateTime))) {
        isAcceptable = false;
      }

      if (_DateUtil2.default.isDateExcluded(this.state.dateTime, this.props.excludeDates)) {
        isAcceptable = false;
      }

      return isAcceptable;
    }
  }, {
    key: 'handleDaylightSavingButtonClick',
    value: function handleDaylightSavingButtonClick(event) {
      this.setState({ isTimeClarificationOpen: false });
      var newDateTime = this.state.dateTime.clone();

      if (!newDateTime.isDST()) {
        newDateTime.subtract(1, 'hour');
        this.handleChange(event, newDateTime);
      }
    }
  }, {
    key: 'handleStandardTimeButtonClick',
    value: function handleStandardTimeButtonClick(event) {
      this.setState({ isTimeClarificationOpen: false });
      var newDateTime = this.state.dateTime.clone();

      if (newDateTime.isDST()) {
        newDateTime.add(1, 'hour');
        this.handleChange(event, newDateTime);
      }
    }
  }, {
    key: 'handleOffsetButtonClick',
    value: function handleOffsetButtonClick() {
      this.setState(function (prevState) {
        return { isTimeClarificationOpen: !prevState.isTimeClarificationOpen };
      });
    }
  }, {
    key: 'handleOnRequestClose',
    value: function handleOnRequestClose() {
      this.setState({ isTimeClarificationOpen: false });
    }
  }, {
    key: 'renderTimeClarification',
    value: function renderTimeClarification() {
      return _react2.default.createElement(_TimeClarification2.default, {
        disabled: this.props.disabled,
        isOpen: this.state.isTimeClarificationOpen,
        isOffsetButtonHidden: !this.state.isAmbiguousTime,
        onDaylightSavingButtonClick: this.handleDaylightSavingButtonClick,
        onStandardTimeButtonClick: this.handleStandardTimeButtonClick,
        onOffsetButtonClick: this.handleOffsetButtonClick,
        onRequestClose: this.handleOnRequestClose,
        releaseFocus: this.props.releaseFocus,
        requestFocus: this.props.requestFocus
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dateInputAttributes = _props.dateInputAttributes,
          disabled = _props.disabled,
          excludeDates = _props.excludeDates,
          filterDate = _props.filterDate,
          includeDates = _props.includeDates,
          onChange = _props.onChange,
          onChangeRaw = _props.onChangeRaw,
          maxDateTime = _props.maxDateTime,
          minDateTime = _props.minDateTime,
          name = _props.name,
          requestFocus = _props.requestFocus,
          releaseFocus = _props.releaseFocus,
          timeInputAttributes = _props.timeInputAttributes,
          value = _props.value,
          customProps = _objectWithoutProperties(_props, ['dateInputAttributes', 'disabled', 'excludeDates', 'filterDate', 'includeDates', 'onChange', 'onChangeRaw', 'maxDateTime', 'minDateTime', 'name', 'requestFocus', 'releaseFocus', 'timeInputAttributes', 'value']);

      var dateTime = this.state.dateTime ? this.state.dateTime.clone() : null;
      var dateValue = _DateTimeUtils2.default.formatMomentDateTime(dateTime, 'YYYY-MM-DD');

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: cx('date-time-picker') }),
        _react2.default.createElement('input', {
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
          'data-terra-date-time-input-hidden': true,
          type: 'hidden',
          name: name,
          value: dateTime && dateTime.isValid() ? dateTime.format() : ''
        }),
        _react2.default.createElement(_terraDatePicker2.default, {
          onCalendarButtonClick: this.handleOnCalendarButtonClick,
          onChange: this.handleDateChange,
          onChangeRaw: this.handleDateChangeRaw,
          onSelect: this.handleOnSelect,
          onClickOutside: this.handleOnClickOutside,
          onBlur: this.handleOnDateBlur,
          onInputFocus: this.handleOnDateInputFocus,
          excludeDates: excludeDates,
          filterDate: filterDate,
          includeDates: includeDates,
          inputAttributes: dateInputAttributes,
          maxDate: maxDateTime,
          minDate: minDateTime,
          selectedDate: dateValue,
          name: 'input',
          releaseFocus: releaseFocus,
          requestFocus: requestFocus,
          disabled: disabled
        }),
        _react2.default.createElement(
          'div',
          { className: cx('time-facade') },
          _react2.default.createElement(_terraTimeInput2.default, {
            onBlur: this.handleOnTimeBlur,
            onChange: this.handleTimeChange,
            onInputFocus: this.handleOnTimeInputFocus,
            inputAttributes: timeInputAttributes,
            name: 'input',
            value: this.timeValue,
            disabled: disabled
          }),
          this.state.isAmbiguousTime ? this.renderTimeClarification() : null
        )
      );
    }
  }]);

  return DateTimePicker;
}(_react2.default.Component);

DateTimePicker.propTypes = propTypes;
DateTimePicker.defaultProps = defaultProps;
DateTimePicker.contextTypes = contextTypes;

exports.default = DateTimePicker;