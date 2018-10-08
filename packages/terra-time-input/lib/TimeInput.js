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

var _terraFormInput = require('terra-form-input');

var _terraFormInput2 = _interopRequireDefault(_terraFormInput);

var _terraButtonGroup = require('terra-button-group');

var _terraButtonGroup2 = _interopRequireDefault(_terraButtonGroup);

var _TimeUtil = require('./TimeUtil');

var _TimeUtil2 = _interopRequireDefault(_TimeUtil);

var _TimeInputModule = require('./TimeInput.module.scss');

var _TimeInputModule2 = _interopRequireDefault(_TimeInputModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_TimeInputModule2.default);

var propTypes = {
  /**
   * Whether the time input should be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Custom input attributes that apply to both the hour and minute inputs.
   */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttributes: _propTypes2.default.object,
  /**
   * Custom input attributes to apply to the hour input
   */
  // eslint-disable-next-line react/forbid-prop-types
  hourAttributes: _propTypes2.default.object,
  /**
   * Custom input attributes to apply to the minutes input
   */
  // eslint-disable-next-line react/forbid-prop-types
  minuteAttributes: _propTypes2.default.object,
  /**
   * Name of the time input. The name should be unique.
   */
  name: _propTypes2.default.string.isRequired,
  /**
   * A callback function to execute when either the hour or minute loses focus.
   */
  onBlur: _propTypes2.default.func,
  /**
   * A callback function to execute when either the hour or minute has been changed.
   * The first parameter is the event. The second parameter is the changed time value.
   */
  onChange: _propTypes2.default.func,
  /**
   * An ISO 8601 string representation of the time value in the input.
   */
  value: _propTypes2.default.string,
  /**
   * Type of time input to initialize. Must be '24-hour' or '12-hour'
   */
  variant: _propTypes2.default.oneOf([_TimeUtil2.default.FORMAT_12_HOUR, _TimeUtil2.default.FORMAT_24_HOUR])
};

var defaultProps = {
  disabled: false,
  inputAttributes: {},
  minuteAttributes: {},
  hourAttributes: {},
  onBlur: null,
  onChange: null,
  value: undefined,
  variant: _TimeUtil2.default.FORMAT_24_HOUR
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  }
};

var TimeInput = function (_React$Component) {
  _inherits(TimeInput, _React$Component);

  function TimeInput(props, context) {
    _classCallCheck(this, TimeInput);

    var _this = _possibleConstructorReturn(this, (TimeInput.__proto__ || Object.getPrototypeOf(TimeInput)).call(this, props));

    var value = _this.props.value;


    if (value && !_TimeUtil2.default.validateTime.test(value)) {
      if (process.env !== 'production') {
        // eslint-disable-next-line
        console.warn('An invalid time value, ' + value + ', has been passed to the terra-time-picker.' + 'This value has been ignored and will not be rendered. Time values must be in hh:mm format.');
      }

      value = undefined;
    }

    _this.handleHourChange = _this.handleHourChange.bind(_this);
    _this.handleMinuteChange = _this.handleMinuteChange.bind(_this);
    _this.handleHourInputKeyDown = _this.handleHourInputKeyDown.bind(_this);
    _this.handleMinuteInputKeyDown = _this.handleMinuteInputKeyDown.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleHourFocus = _this.handleHourFocus.bind(_this);
    _this.handleMinuteFocus = _this.handleMinuteFocus.bind(_this);
    _this.handleHourBlur = _this.handleHourBlur.bind(_this);
    _this.handleMinuteBlur = _this.handleMinuteBlur.bind(_this);
    _this.handleMeridiemChange = _this.handleMeridiemChange.bind(_this);
    _this.handleMeridiemInputKeyDown = _this.handleMeridiemInputKeyDown.bind(_this);
    _this.meridiemFocus = _this.meridiemFocus.bind(_this);
    _this.meridiemBlur = _this.meridiemBlur.bind(_this);
    _this.handleMeridiemButtonChange = _this.handleMeridiemButtonChange.bind(_this);

    var hour = _TimeUtil2.default.splitHour(value);
    var meridiem = void 0;

    if (props.variant === _TimeUtil2.default.FORMAT_12_HOUR) {
      if (!context.intl.messages['Terra.timeInput.am'] || !context.intl.messages['Terra.timeInput.pm']) {
        if (process.env !== 'production') {
          // eslint-disable-next-line no-console
          console.warn('This locale only uses 24 hour clock. The ante meridiem and post meridiem will not be displayed');
        }

        _this.anteMeridiem = '';
        _this.postMeridiem = '';
      } else {
        _this.anteMeridiem = context.intl.formatMessage({ id: 'Terra.timeInput.am' });
        _this.postMeridiem = context.intl.formatMessage({ id: 'Terra.timeInput.pm' });
      }

      if (hour) {
        var parsedHour = _TimeUtil2.default.parseTwelveHourTime(hour, _this.anteMeridiem, _this.postMeridiem);
        hour = parsedHour.hourString;
        // eslint-disable-next-line prefer-destructuring
        meridiem = parsedHour.meridiem;
      } else {
        meridiem = _this.anteMeridiem;
      }
    }

    _this.state = {
      hour: hour,
      minute: _TimeUtil2.default.splitMinute(value),
      isFocused: false,
      meridiem: meridiem,
      hourInitialFocused: false,
      minuteInitialFocused: false,
      meridiemFocused: false
    };
    return _this;
  }

  _createClass(TimeInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value === this.props.value && nextProps.variant === this.props.variant) {
        return;
      }

      var hour = _TimeUtil2.default.splitHour(nextProps.value);
      var meridiem = this.state.meridiem;


      if (nextProps.variant === _TimeUtil2.default.FORMAT_12_HOUR) {
        if (!this.context.intl.messages['Terra.timeInput.am'] || !this.context.intl.messages['Terra.timeInput.pm']) {
          if (process.env !== 'production') {
            // eslint-disable-next-line no-console
            console.warn('This locale only uses 24 hour clock. The ante meridiem and post meridiem will not be displayed');
          }

          this.anteMeridiem = '';
          this.postMeridiem = '';
        } else {
          this.anteMeridiem = this.context.intl.formatMessage({ id: 'Terra.timeInput.am' });
          this.postMeridiem = this.context.intl.formatMessage({ id: 'Terra.timeInput.pm' });
        }

        if (hour) {
          var parsedHour = _TimeUtil2.default.parseTwelveHourTime(hour, this.anteMeridiem, this.postMeridiem);
          hour = parsedHour.hourString;
          // eslint-disable-next-line prefer-destructuring
          meridiem = parsedHour.meridiem;
        }
      }

      this.setState({
        hour: hour,
        minute: _TimeUtil2.default.splitMinute(nextProps.value),
        meridiem: meridiem
      });
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      if (this.onInputFocus) {
        this.onInputFocus(event);
      }

      this.setState({ isFocused: true });
    }
  }, {
    key: 'handleMinuteFocus',
    value: function handleMinuteFocus(event) {
      this.handleFocus(event);
      this.setState({ minuteInitialFocused: true });
      this.minuteInput.setSelectionRange(0, this.minuteInput.value.length);
    }
  }, {
    key: 'handleHourFocus',
    value: function handleHourFocus(event) {
      this.handleFocus(event);
      this.setState({ hourInitialFocused: true });
      this.hourInput.setSelectionRange(0, this.hourInput.value.length);
    }
  }, {
    key: 'handleHourBlur',
    value: function handleHourBlur(event) {
      this.handleBlur(event, _TimeUtil2.default.inputType.HOUR);
      this.setState({ hourInitialFocused: false });
    }
  }, {
    key: 'handleMinuteBlur',
    value: function handleMinuteBlur(event) {
      this.handleBlur(event, _TimeUtil2.default.inputType.MINUTE);
      this.setState({ minuteInitialFocused: false });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event, type) {
      this.setState({ isFocused: false });

      var stateValue = event.target.value;

      // Prepend a 0 to the value when losing focus and the value is single digit.
      if (stateValue.length === 1) {
        if (this.props.variant === _TimeUtil2.default.FORMAT_12_HOUR && type === _TimeUtil2.default.inputType.HOUR && stateValue === '0') {
          stateValue = '12';
        } else {
          stateValue = '0'.concat(stateValue);
        }

        this.handleValueChange(event, type, stateValue, this.state.meridiem);
      }

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    }
  }, {
    key: 'handleHourChange',
    value: function handleHourChange(event) {
      if (!_TimeUtil2.default.validNumericInput(event.target.value)) {
        return;
      }

      var inputValue = event.target.value;
      var stateValue = this.state.hour;
      var maxValue = this.props.variant === _TimeUtil2.default.FORMAT_12_HOUR ? 12 : 23;

      // Ignore the entry if the value did not change or it is invalid.
      // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have to
      // check the length of inputValue to make sure that it is less then 2.
      if (inputValue === stateValue || inputValue.length > 2 || Number(inputValue) > maxValue) {
        return;
      }

      // If the change made was not a deletion of a digit, then prepend '0' if the input value is a
      // single digit value between 3 and 9 for a 24 hour time, or 2 and 9 for a 12 hour clock
      if (inputValue.length >= stateValue.length) {
        var digitsToPrependZero = ['3', '4', '5', '6', '7', '8', '9'];

        if (this.props.variant === _TimeUtil2.default.FORMAT_12_HOUR) {
          digitsToPrependZero.push('2');
        }

        if (digitsToPrependZero.indexOf(inputValue) > -1) {
          inputValue = '0'.concat(inputValue);
        }
      }

      if (inputValue === '00' && this.props.variant === _TimeUtil2.default.FORMAT_12_HOUR) {
        inputValue = '12';
      }

      // // Move focus to the minute input if the hour input has a valid and complete entry.
      if (inputValue.length === 2) {
        this.minuteInput.focus();
      }

      this.handleValueChange(event, _TimeUtil2.default.inputType.HOUR, inputValue, this.state.meridiem);
    }
  }, {
    key: 'handleMinuteChange',
    value: function handleMinuteChange(event) {
      if (!_TimeUtil2.default.validNumericInput(event.target.value)) {
        return;
      }

      var inputValue = event.target.value;
      var stateValue = this.state.minute;
      var maxValue = 59;

      // Ignore the entry if the value did not change or it is invalid.
      // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have
      // to check the length of inputValue to make sure that it is less then 2.
      if (inputValue === stateValue || inputValue.length > 2 || Number(inputValue) > maxValue) {
        return;
      }

      // If the change made was not a deletion of a digit, then prepend '0'
      // if the input value is a single digit value between 6 and 9.
      if (inputValue.length >= stateValue.length) {
        var digitsToPrependZero = ['6', '7', '8', '9'];
        if (digitsToPrependZero.indexOf(inputValue) > -1) {
          inputValue = '0'.concat(inputValue);
        }
      }

      // Move focus to the merdiem for 12 hours times if the minute input has a valid and complete entry.
      if (this.props.variant === _TimeUtil2.default.FORMAT_12_HOUR && inputValue.length === 2 && this.meridiemInput) {
        this.meridiemInput.focus();
      }

      this.handleValueChange(event, _TimeUtil2.default.inputType.MINUTE, inputValue, this.state.meridiem);
    }
  }, {
    key: 'handleMeridiemChange',
    value: function handleMeridiemChange(event) {
      this.setState({
        meridiem: event.target.value
      });

      this.handleValueChange(event, _TimeUtil2.default.inputType.HOUR, this.state.hour.toString(), event.target.value);
    }
  }, {
    key: 'meridiemFocus',
    value: function meridiemFocus() {
      this.setState({
        isFocused: true,
        meridiemFocused: true
      });

      this.meridiemInput.focus();
    }
  }, {
    key: 'meridiemBlur',
    value: function meridiemBlur() {
      this.setState({
        isFocused: false,
        meridiemFocused: false
      });
    }

    /**
     * Takes a key input from the hour input, and processes it based on the value of the keycode.
     * If the key is an up or down arrow, it increments/decrements the hour. If the right arrow
     * is pressed, it shifts focus to the minute input.
     * @param {Object} event Event object generated from the event delegation.
     */

  }, {
    key: 'handleHourInputKeyDown',
    value: function handleHourInputKeyDown(event) {
      var stateValue = this.state.hour;
      var meridiem = this.state.meridiem;

      var previousStateValue = stateValue;

      if (event.keyCode === _TimeUtil2.default.keyCodes.ARROWUP) {
        stateValue = _TimeUtil2.default.incrementHour(stateValue, this.props.variant);

        // Hitting 12 when incrementing up changes the meridiem
        if (this.props.variant === _TimeUtil2.default.FORMAT_12_HOUR && stateValue === '12') {
          if (meridiem === this.postMeridiem || !previousStateValue) {
            meridiem = this.anteMeridiem;
          } else {
            meridiem = this.postMeridiem;
          }
        }
      }

      if (event.keyCode === _TimeUtil2.default.keyCodes.ARROWDOWN) {
        stateValue = _TimeUtil2.default.decrementHour(stateValue, this.props.variant);

        // Hitting 11 when incrementing down changes the meridiem
        if (this.props.variant === _TimeUtil2.default.FORMAT_12_HOUR && stateValue === '11') {
          meridiem = meridiem === this.postMeridiem ? this.anteMeridiem : this.postMeridiem;
        }
      }

      if (stateValue !== previousStateValue) {
        this.handleValueChange(event, _TimeUtil2.default.inputType.HOUR, stateValue, meridiem);
      }

      if (event.keyCode === _TimeUtil2.default.keyCodes.ARROWRIGHT) {
        this.focusMinute(event);
      }
    }
  }, {
    key: 'focusMinute',
    value: function focusMinute(event) {
      // If the hour is empty or the cursor is after the value, move focus to the minute input when the right arrow is pressed.
      if (this.state.hour.length === 0 || this.state.hour.length === this.hourInput.selectionEnd) {
        this.minuteInput.focus();
        this.minuteInput.setSelectionRange(0, 0);
        event.preventDefault();
      }
    }

    /**
     * Takes a key input from the minute input, and processes it based on the value of the keycode.
     * If the key is an up or down arrow, it increments/decrements the minute. If the left arrow
     * is pressed, it shifts focus to the hour input. If the right arrow is pressed, it shifts
     * focus to the merdiem input.
     * @param {Object} event Event object generated from the event delegation.
     */

  }, {
    key: 'handleMinuteInputKeyDown',
    value: function handleMinuteInputKeyDown(event) {
      var stateValue = this.state.minute;
      var previousStateValue = stateValue;

      if (event.keyCode === _TimeUtil2.default.keyCodes.ARROWUP) {
        stateValue = _TimeUtil2.default.incrementMinute(stateValue);
      }

      if (event.keyCode === _TimeUtil2.default.keyCodes.ARROWDOWN) {
        stateValue = _TimeUtil2.default.decrementMinute(stateValue);
      }

      if (previousStateValue !== stateValue) {
        this.handleValueChange(event, _TimeUtil2.default.inputType.MINUTE, stateValue, this.state.meridiem);
      }

      if (event.keyCode === _TimeUtil2.default.keyCodes.ARROWLEFT || event.keyCode === _TimeUtil2.default.keyCodes.DELETE || event.keyCode === _TimeUtil2.default.keyCodes.BACKSPACE) {
        this.focusHour(event);
      }

      if (event.keyCode === _TimeUtil2.default.keyCodes.ARROWRIGHT) {
        this.focusMeridiem(event);
      }
    }
  }, {
    key: 'focusHour',
    value: function focusHour(event) {
      // If the cursor is at the left most position in the minute input, is empty or the cursor is before the value,
      // move focus to the hour input

      if (this.minuteInput.selectionEnd === 0) {
        this.hourInput.focus();
        if (this.state.hour) {
          this.hourInput.setSelectionRange(this.state.hour.length, this.state.hour.length);
          event.preventDefault();
        }
      }
    }
  }, {
    key: 'focusMeridiem',
    value: function focusMeridiem(event) {
      // If the minute is empty or the cursor is after the value, move focus to the meridiem.
      if ((this.state.minute.length === 0 || this.state.minute.length === this.minuteInput.selectionEnd) && this.meridiemInput) {
        this.meridiemInput.focus();
        event.preventDefault();
      }
    }
  }, {
    key: 'handleValueChange',
    value: function handleValueChange(event, type, timeValue, meridiem) {
      if (type === _TimeUtil2.default.inputType.HOUR) {
        this.setState({
          hour: timeValue,
          meridiem: meridiem,
          hourInitialFocused: false
        });
      } else {
        this.setState({
          minute: timeValue,
          minuteInitialFocused: false
        });
      }

      // Input values of length 1 indicate incomplete time, which means we cannot get a
      // reliable time so onChange isn't triggered.
      if (this.props.onChange && timeValue.length !== 1) {
        var hour = type === _TimeUtil2.default.inputType.HOUR ? timeValue : this.state.hour;
        var minute = type === _TimeUtil2.default.inputType.MINUTE ? timeValue : this.state.minute;

        if (hour === '' && minute === '') {
          this.props.onChange(event, '');
        } else {
          this.props.onChange(event, this.formatHour(hour, meridiem).concat(':', minute));
        }
      }
    }
  }, {
    key: 'formatHour',
    value: function formatHour(hour, meridiem) {
      if (!hour) {
        return hour;
      }

      var tempHour = parseInt(hour, 10);

      if (this.props.variant === _TimeUtil2.default.FORMAT_12_HOUR) {
        if (meridiem === this.postMeridiem && tempHour < 12) {
          tempHour += 12;
        } else if (meridiem === this.anteMeridiem && tempHour === 12) {
          tempHour = 0;
        }
      }

      var hourString = tempHour.toString();

      if (hourString.length < 2) {
        hourString = '0'.concat(hourString);
      }

      return hourString;
    }
  }, {
    key: 'handleMeridiemInputKeyDown',
    value: function handleMeridiemInputKeyDown(event) {
      if (event.keyCode === _TimeUtil2.default.keyCodes.ARROWLEFT || event.keyCode === _TimeUtil2.default.keyCodes.DELETE || event.keyCode === _TimeUtil2.default.keyCodes.BACKSPACE) {
        this.minuteInput.focus();
        event.preventDefault();
      }
    }
  }, {
    key: 'mobileInput',
    value: function mobileInput() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          inputAttributes = _props.inputAttributes,
          minuteAttributes = _props.minuteAttributes,
          hourAttributes = _props.hourAttributes,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          name = _props.name,
          value = _props.value,
          variant = _props.variant,
          customProps = _objectWithoutProperties(_props, ['disabled', 'inputAttributes', 'minuteAttributes', 'hourAttributes', 'onBlur', 'onChange', 'name', 'value', 'variant']);

      var instanceHoursAttrs = _extends({}, hourAttributes);
      var instanceMinuteAttrs = _extends({}, minuteAttributes);

      // Using the state of hour and minute create a time in UTC represented in ISO 8601 format.
      var timeValue = '';

      if (this.state.hour.length > 0 || this.state.minute.length > 0) {
        var hour = parseInt(this.state.hour, 10);

        if (this.props.variant === _TimeUtil2.default.FORMAT_12_HOUR && this.state.meridiem === this.postMeridiem && hour > 12) {
          hour += 12;
        }

        timeValue = 'T'.concat(hour, ':', this.state.minute);
      }

      if (!instanceHoursAttrs.id) {
        instanceHoursAttrs.id = 'terra-time-hour-'.concat(name);
      }

      if (!instanceMinuteAttrs.id) {
        instanceMinuteAttrs.id = 'terra-time-minute-'.concat(name);
      }

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: cx(['mobile-time-picker', customProps.className]) }),
        _react2.default.createElement('input', {
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
          type: 'hidden',
          name: name,
          value: timeValue
        }),
        _react2.default.createElement(
          'div',
          { className: cx('time-input-group') },
          _react2.default.createElement(_terraFormInput2.default, _extends({}, inputAttributes, instanceHoursAttrs, {
            refCallback: function refCallback(inputRef) {
              _this2.hourInput = inputRef;
            },
            className: cx('time-input-hour'),
            value: this.state.hour,
            name: 'terra-time-hour-'.concat(name),
            placeholder: this.context.intl.formatMessage({ id: 'Terra.timeInput.hh' }),
            maxLength: '2',
            onChange: this.handleHourChange,
            onKeyDown: this.handleHourInputKeyDown,
            onFocus: this.handleFocus,
            onBlur: this.handleHourBlur,
            size: '2',
            pattern: '\\d*',
            disabled: disabled
          })),
          _react2.default.createElement(
            'label',
            { htmlFor: instanceHoursAttrs.id, className: cx('mobile-input-label') },
            this.context.intl.formatMessage({ id: 'Terra.timeInput.hours' })
          )
        ),
        _react2.default.createElement(
          'span',
          { className: cx('time-spacer') },
          ':'
        ),
        _react2.default.createElement(
          'div',
          { className: cx('time-input-group') },
          _react2.default.createElement(_terraFormInput2.default, _extends({}, inputAttributes, instanceMinuteAttrs, {
            refCallback: function refCallback(inputRef) {
              _this2.minuteInput = inputRef;
            },
            className: cx('time-input-minute'),
            value: this.state.minute,
            name: 'terra-time-minute-'.concat(name),
            placeholder: this.context.intl.formatMessage({ id: 'Terra.timeInput.mm' }),
            maxLength: '2',
            onChange: this.handleMinuteChange,
            onKeyDown: this.handleMinuteInputKeyDown,
            onFocus: this.handleFocus,
            onBlur: this.handleMinuteBlur,
            size: '2',
            pattern: '\\d*',
            disabled: disabled
          })),
          _react2.default.createElement(
            'label',
            { htmlFor: instanceMinuteAttrs.id, className: cx('mobile-input-label') },
            this.context.intl.formatMessage({ id: 'Terra.timeInput.minutes' })
          )
        ),
        this.props.variant === _TimeUtil2.default.FORMAT_12_HOUR && _react2.default.createElement(
          _terraButtonGroup2.default,
          { selectedKeys: [this.state.meridiem], onChange: this.handleMeridiemButtonChange, className: cx('meridiem-button-group') },
          _react2.default.createElement(_terraButtonGroup2.default.Button, {
            key: this.anteMeridiem,
            className: cx('meridiem-button'),
            text: this.anteMeridiem,
            isDisabled: disabled
          }),
          _react2.default.createElement(_terraButtonGroup2.default.Button, {
            key: this.postMeridiem,
            className: cx('meridiem-button'),
            text: this.postMeridiem,
            isDisabled: disabled
          })
        )
      );
    }
  }, {
    key: 'handleMeridiemButtonChange',
    value: function handleMeridiemButtonChange(event, selectedKey) {
      this.handleValueChange(event, _TimeUtil2.default.inputType.HOUR, this.state.hour.toString(), selectedKey);
    }
  }, {
    key: 'desktopInput',
    value: function desktopInput() {
      var _this3 = this;

      var _props2 = this.props,
          disabled = _props2.disabled,
          inputAttributes = _props2.inputAttributes,
          minuteAttributes = _props2.minuteAttributes,
          hourAttributes = _props2.hourAttributes,
          onBlur = _props2.onBlur,
          onChange = _props2.onChange,
          name = _props2.name,
          value = _props2.value,
          variant = _props2.variant,
          customProps = _objectWithoutProperties(_props2, ['disabled', 'inputAttributes', 'minuteAttributes', 'hourAttributes', 'onBlur', 'onChange', 'name', 'value', 'variant']);

      this.onInputFocus = customProps.onInputFocus;
      delete customProps.onInputFocus;

      var timeInputClassNames = cx([{ disabled: disabled }, 'time-input', { 'is-focused': this.state.isFocused }, customProps.className]);

      // Using the state of hour and minute create a time in UTC represented in ISO 8601 format.
      var timeValue = '';

      if (this.state.hour.length > 0 || this.state.minute.length > 0) {
        var hour = parseInt(this.state.hour, 10);

        if (this.props.variant === _TimeUtil2.default.FORMAT_12_HOUR && this.state.meridiem === this.postMeridiem) {
          hour += 12;
        }

        timeValue = 'T'.concat(hour, ':', this.state.minute);
      }

      /* eslint-disable jsx-a11y/no-static-element-interactions */
      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: timeInputClassNames }),
        _react2.default.createElement('input', {
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
          type: 'hidden',
          name: name,
          value: timeValue
        }),
        _react2.default.createElement(_terraFormInput2.default, _extends({}, inputAttributes, minuteAttributes, {
          'aria-label': this.context.intl.formatMessage({ id: 'Terra.timeInput.hours' }),
          refCallback: function refCallback(inputRef) {
            _this3.hourInput = inputRef;
          },
          className: cx('time-input-hour', 'desktop', { 'initial-focus': this.state.hourInitialFocused }),
          type: 'text',
          value: this.state.hour,
          name: 'terra-time-hour-'.concat(name),
          placeholder: this.context.intl.formatMessage({ id: 'Terra.timeInput.hh' }),
          maxLength: '2',
          onChange: this.handleHourChange,
          onKeyDown: this.handleHourInputKeyDown,
          onFocus: this.handleHourFocus,
          onBlur: this.handleHourBlur,
          size: '2',
          pattern: '\\d*',
          disabled: disabled
        })),
        _react2.default.createElement(
          'span',
          { className: cx('time-spacer') },
          ':'
        ),
        _react2.default.createElement(_terraFormInput2.default, _extends({}, inputAttributes, minuteAttributes, {
          refCallback: function refCallback(inputRef) {
            _this3.minuteInput = inputRef;
          },
          'aria-label': this.context.intl.formatMessage({ id: 'Terra.timeInput.minutes' }),
          className: cx('time-input-minute', 'desktop', { 'initial-focus': this.state.minuteInitialFocused }),
          type: 'text',
          value: this.state.minute,
          name: 'terra-time-minute-'.concat(name),
          placeholder: this.context.intl.formatMessage({ id: 'Terra.timeInput.mm' }),
          maxLength: '2',
          onChange: this.handleMinuteChange,
          onKeyDown: this.handleMinuteInputKeyDown,
          onFocus: this.handleMinuteFocus,
          onBlur: this.handleMinuteBlur,
          size: '2',
          pattern: '\\d*',
          disabled: disabled
        })),
        this.props.variant === _TimeUtil2.default.FORMAT_12_HOUR && [_react2.default.createElement(_terraFormInput2.default, _extends({}, inputAttributes, {
          className: cx(['meridiem-display', { focused: this.state.meridiemFocused }]),
          onFocus: this.meridiemFocus,
          key: 'meridiem_display',
          tabIndex: '-1',
          value: this.state.meridiem,
          size: this.state.meridiem.length || 1,
          readOnly: true,
          disabled: disabled
        })), _react2.default.createElement(
          'div',
          {
            style: { position: 'relative' },
            key: 'meridiem_select_box'
          },
          _react2.default.createElement(
            'select',
            {
              ref: function ref(input) {
                _this3.meridiemInput = input;
              },
              onBlur: this.meridiemBlur,
              onFocus: this.meridiemFocus,
              name: 'terra-time-meridiem-'.concat(name),
              value: this.state.meridiem,
              className: cx('time-input-meridiem'),
              onChange: this.handleMeridiemChange,
              onKeyDown: this.handleMeridiemInputKeyDown,
              size: '2'
            },
            _react2.default.createElement(
              'option',
              { key: 'anteMeridiem', value: this.anteMeridiem },
              this.anteMeridiem
            ),
            _react2.default.createElement(
              'option',
              { key: 'postMeridiem', value: this.postMeridiem },
              this.postMeridiem
            )
          )
        )]
      );
      /* eslint-enable jsx-a11y/no-static-element-interactions */
    }
  }, {
    key: 'render',
    value: function render() {
      if (_TimeUtil2.default.isConsideredMobileDevice()) {
        return this.mobileInput();
      }

      return this.desktopInput();
    }
  }]);

  return TimeInput;
}(_react2.default.Component);

TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;
TimeInput.contextTypes = contextTypes;

exports.default = TimeInput;