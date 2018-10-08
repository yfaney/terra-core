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

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

require('terra-base/lib/baseStyles');

var _terraResponsiveElement = require('terra-responsive-element');

var _terraResponsiveElement2 = _interopRequireDefault(_terraResponsiveElement);

var _PopperContainer = require('./_PopperContainer');

var _PopperContainer2 = _interopRequireDefault(_PopperContainer);

var _DateInput = require('./DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

var _DateUtil = require('./DateUtil');

var _DateUtil2 = _interopRequireDefault(_DateUtil);

var _DatePickerModule = require('./DatePicker.module.scss');

var _DatePickerModule2 = _interopRequireDefault(_DatePickerModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * Whether the date input should be disabled.
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
   * An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled.
   */
  includeDates: _propTypes2.default.arrayOf(_propTypes2.default.string),
  /**
   * Custom input attributes to apply to the date input. Use the name prop to set the name for the input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttributes: _propTypes2.default.object,
  /**
   * An ISO 8601 string representation of the maximum date that can be selected.
   */
  maxDate: _propTypes2.default.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected.
   */
  minDate: _propTypes2.default.string,
  /**
   * Name of the date input. The name should be unique.
   */
  name: _propTypes2.default.string.isRequired,
  /**
   * A callback function to execute when a valid date is selected or entered.
   * The first parameter is the event. The second parameter is the changed date value.
   */
  onChange: _propTypes2.default.func,
  /**
   * A callback function to execute when a change is made in the date input.
   * The first parameter is the event. The second parameter is the changed date value.
   */
  onChangeRaw: _propTypes2.default.func,
  /**
   * A callback function to execute when clicking outside of the picker to dismiss it.
   */
  onClickOutside: _propTypes2.default.func,
  /**
   * A callback function to execute when a date is selected from within the picker.
   */
  onSelect: _propTypes2.default.func,
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: _propTypes2.default.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: _propTypes2.default.func,
  /**
   * An ISO 8601 string representation of the initial value to show in the date input.
   * This prop name is derived from react-datepicker but is analogous to value in a form input field.
   */
  selectedDate: _propTypes2.default.string
};

var defaultProps = {
  disabled: false,
  excludeDates: undefined,
  filterDate: undefined,
  includeDates: undefined,
  inputAttributes: undefined,
  maxDate: undefined,
  minDate: undefined,
  onChange: undefined,
  onChangeRaw: undefined,
  onClickOutside: undefined,
  onSelect: undefined,
  releaseFocus: undefined,
  requestFocus: undefined,
  selectedDate: undefined
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  }
};

var DatePicker = function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this.state = {
      selectedDate: _DateUtil2.default.createSafeDate(props.selectedDate)
    };

    _this.isDefaultDateAcceptable = false;
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleChangeRaw = _this.handleChangeRaw.bind(_this);
    _this.handleOnSelect = _this.handleOnSelect.bind(_this);
    _this.handleOnClickOutside = _this.handleOnClickOutside.bind(_this);
    _this.handleOnInputFocus = _this.handleOnInputFocus.bind(_this);
    _this.handleOnCalendarButtonClick = _this.handleOnCalendarButtonClick.bind(_this);
    return _this;
  }

  _createClass(DatePicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.isDefaultDateAcceptable = this.validateDefaultDate();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selectedDate === this.props.selectedDate) {
        return;
      }

      this.setState({
        selectedDate: _DateUtil2.default.createSafeDate(nextProps.selectedDate)
      });
    }
  }, {
    key: 'handleOnSelect',
    value: function handleOnSelect(selectedDate, event) {
      // onSelect should only be invoked when selecting a date from the picker.
      // react-datepicker has an issue where onSelect is invoked both when selecting a date from the picker
      // as well as manually entering a valid date or clearing the date,
      // Until a fix is made, we need to return if the event type is 'change' indicating that onSelect was
      // invoked from a manual change. See https://github.com/Hacker0x01/react-datepicker/issues/990
      if (event.type === 'change' || !selectedDate || !selectedDate.isValid()) {
        return;
      }

      this.isDefaultDateAcceptable = true;
      this.releaseFocus();

      if (this.props.onSelect) {
        this.props.onSelect(event, selectedDate.format());
      }
    }
  }, {
    key: 'handleOnClickOutside',
    value: function handleOnClickOutside(event) {
      this.releaseFocus();

      if (this.props.onClickOutside) {
        this.props.onClickOutside(event);
      }
    }
  }, {
    key: 'releaseFocus',
    value: function releaseFocus() {
      // The picker will be dismissed and the focus will be released so that the containing component (e.g. modal) can regain focus.
      if (this.props.releaseFocus) {
        this.props.releaseFocus();
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(date, event) {
      this.setState({
        selectedDate: date
      });

      if (this.props.onChange) {
        this.props.onChange(event, date && date.isValid() ? date.format() : '');
      }
    }
  }, {
    key: 'handleChangeRaw',
    value: function handleChangeRaw(event) {
      if (this.props.onChangeRaw) {
        this.props.onChangeRaw(event, event.target.value);
      }
    }
  }, {
    key: 'handleOnInputFocus',
    value: function handleOnInputFocus(event) {
      if (this.onInputFocus) {
        this.onInputFocus(event);
      }

      if (!this.isDefaultDateAcceptable) {
        this.handleChange(null, event);
        this.isDefaultDateAcceptable = true;
      }
    }
  }, {
    key: 'handleOnCalendarButtonClick',
    value: function handleOnCalendarButtonClick(event, onClick) {
      if (this.onCalendarButtonClick) {
        this.onCalendarButtonClick(event);
      }

      if (!this.isDefaultDateAcceptable && !this.validateDefaultDate()) {
        this.handleChange(null, event);
      } else if (onClick) {
        // This onClick function is the onInputClick function coming from https://github.com/Hacker0x01/react-datepicker/blob/master/src/index.jsx#L326.
        // It does not take any parameter so there is not a need to pass in the event.
        onClick();
        this.isDefaultDateAcceptable = true;
      }
    }
  }, {
    key: 'validateDefaultDate',
    value: function validateDefaultDate() {
      var isAcceptable = true;

      if (_DateUtil2.default.isDateOutOfRange(this.state.selectedDate, _DateUtil2.default.createSafeDate(this.props.minDate), _DateUtil2.default.createSafeDate(this.props.maxDate))) {
        isAcceptable = false;
      }

      if (_DateUtil2.default.isDateExcluded(this.state.selectedDate, this.props.excludeDates)) {
        isAcceptable = false;
      }

      return isAcceptable;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          inputAttributes = _props.inputAttributes,
          excludeDates = _props.excludeDates,
          filterDate = _props.filterDate,
          includeDates = _props.includeDates,
          maxDate = _props.maxDate,
          minDate = _props.minDate,
          name = _props.name,
          onChange = _props.onChange,
          onChangeRaw = _props.onChangeRaw,
          onClickOutside = _props.onClickOutside,
          onSelect = _props.onSelect,
          requestFocus = _props.requestFocus,
          releaseFocus = _props.releaseFocus,
          selectedDate = _props.selectedDate,
          customProps = _objectWithoutProperties(_props, ['inputAttributes', 'excludeDates', 'filterDate', 'includeDates', 'maxDate', 'minDate', 'name', 'onChange', 'onChangeRaw', 'onClickOutside', 'onSelect', 'requestFocus', 'releaseFocus', 'selectedDate']);

      this.onCalendarButtonClick = customProps.onCalendarButtonClick;
      this.onInputFocus = customProps.onInputFocus;

      delete customProps.onCalendarButtonClick;
      delete customProps.onInputFocus;

      var intl = this.context.intl;

      var todayString = intl.formatMessage({ id: 'Terra.datePicker.today' });
      var dateFormat = _DateUtil2.default.getFormatByLocale(intl.locale);
      var placeholderText = intl.formatMessage({ id: 'Terra.datePicker.dateFormat' });
      var exludeMomentDates = _DateUtil2.default.filterInvalidDates(excludeDates);
      var includeMomentDates = _DateUtil2.default.filterInvalidDates(includeDates);
      var maxMomentDate = _DateUtil2.default.createSafeDate(maxDate);
      var minMomentDate = _DateUtil2.default.createSafeDate(minDate);

      var portalPicker = _react2.default.createElement(_reactDatepicker2.default, _extends({}, customProps, {
        selected: this.state.selectedDate,
        onChange: this.handleChange,
        onChangeRaw: this.handleChangeRaw,
        onClickOutside: this.handleOnClickOutside,
        onSelect: this.handleOnSelect,
        customInput: _react2.default.createElement(_DateInput2.default, {
          onInputFocus: this.handleOnInputFocus,
          onCalendarButtonClick: this.handleOnCalendarButtonClick,
          inputAttributes: inputAttributes,
          releaseFocus: releaseFocus,
          requestFocus: requestFocus,
          shouldShowPicker: !this.isDefaultDateAcceptable && this.state.selectedDate === null
        }),
        excludeDates: exludeMomentDates,
        filterDate: filterDate,
        includeDates: includeMomentDates,
        maxDate: maxMomentDate,
        minDate: minMomentDate,
        todayButton: todayString,
        withPortal: true,
        dateFormatCalendar: ' ',
        dateFormat: dateFormat,
        fixedHeight: true,
        locale: intl.locale,
        placeholderText: placeholderText,
        dropdownMode: 'select',
        showMonthDropdown: true,
        showYearDropdown: true,
        name: name
      }));

      var popupPicker = _react2.default.createElement(_reactDatepicker2.default, _extends({}, customProps, {
        selected: this.state.selectedDate,
        onChange: this.handleChange,
        onChangeRaw: this.handleChangeRaw,
        onClickOutside: this.handleOnClickOutside,
        onSelect: this.handleOnSelect,
        customInput: _react2.default.createElement(_DateInput2.default, {
          onInputFocus: this.handleOnInputFocus,
          onCalendarButtonClick: this.handleOnCalendarButtonClick,
          inputAttributes: inputAttributes,
          releaseFocus: releaseFocus,
          requestFocus: requestFocus,
          shouldShowPicker: !this.isDefaultDateAcceptable && this.state.selectedDate === null
        }),
        excludeDates: exludeMomentDates,
        filterDate: filterDate,
        includeDates: includeMomentDates,
        maxDate: maxMomentDate,
        minDate: minMomentDate,
        todayButton: todayString,
        dateFormatCalendar: ' ',
        dateFormat: dateFormat,
        fixedHeight: true,
        locale: intl.locale,
        placeholderText: placeholderText,
        popperContainer: _PopperContainer2.default,
        popperPlacement: 'bottom',
        popperModifiers: {
          keepTogether: {
            enabled: true
          }
        },
        popoverAttachment: 'top center',
        popoverTargetAttachment: 'bottom center',
        dropdownMode: 'select',
        showMonthDropdown: true,
        showYearDropdown: true,
        name: name
      }));

      return _react2.default.createElement(
        'div',
        { className: _DatePickerModule2.default['date-picker'] },
        _react2.default.createElement(_terraResponsiveElement2.default, {
          responsiveTo: 'window',
          defaultElement: portalPicker,
          small: popupPicker
        })
      );
    }
  }]);

  return DatePicker;
}(_react2.default.Component);

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;
DatePicker.contextTypes = contextTypes;

exports.default = DatePicker;