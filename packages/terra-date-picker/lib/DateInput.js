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

require('terra-base/lib/baseStyles');

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _IconCalendar = require('terra-icon/lib/icon/IconCalendar');

var _IconCalendar2 = _interopRequireDefault(_IconCalendar);

var _terraFormInput = require('terra-form-input');

var _terraFormInput2 = _interopRequireDefault(_terraFormInput);

var _DateUtil = require('./DateUtil');

var _DateUtil2 = _interopRequireDefault(_DateUtil);

var _DatePickerModule = require('./DatePicker.module.scss');

var _DatePickerModule2 = _interopRequireDefault(_DatePickerModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = _react2.default.createElement(_IconCalendar2.default, null);

var propTypes = {
  /**
   * Custom input attributes to apply to the date input.
   */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttributes: _propTypes2.default.object,
  /**
   * Name of the date input.
   */
  name: _propTypes2.default.string,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: _propTypes2.default.func,
  /**
   * The onInputClick callback function from react-datepicker to show the picker when clicked.
   */
  onClick: _propTypes2.default.func,
  /**
   * The onInputKeyDown callback function from react-datepicker to handle keyboard navigation.
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * The placeholder text to display in the date input.
   */
  placeholder: _propTypes2.default.string,
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: _propTypes2.default.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: _propTypes2.default.func,
  /**
   * The selected or entered date value to display in the date input.
   */
  value: _propTypes2.default.string
};

var defaultProps = {
  inputAttributes: undefined,
  name: undefined,
  onChange: undefined,
  onClick: undefined,
  onKeyDown: undefined,
  placeholder: undefined,
  releaseFocus: undefined,
  requestFocus: undefined,
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

// eslint-disable-next-line react/prefer-stateless-function

var DatePickerInput = function (_React$Component) {
  _inherits(DatePickerInput, _React$Component);

  function DatePickerInput(props) {
    _classCallCheck(this, DatePickerInput);

    var _this = _possibleConstructorReturn(this, (DatePickerInput.__proto__ || Object.getPrototypeOf(DatePickerInput)).call(this, props));

    _this.handleOnButtonClick = _this.handleOnButtonClick.bind(_this);
    _this.handleOnKeyDown = _this.handleOnKeyDown.bind(_this);
    return _this;
  }

  _createClass(DatePickerInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.shouldShowPicker && !prevProps.shouldShowPicker && this.props.onClick) {
        this.props.onClick();
      }
    }
  }, {
    key: 'handleOnButtonClick',
    value: function handleOnButtonClick(event) {
      // The picker is about to display so request focus from the containing component (e.g. modal) if it has the focus trapped.
      if (this.props.requestFocus) {
        this.props.requestFocus();
      }

      var attributes = _extends({}, this.props.inputAttributes);

      if (!attributes.readOnly && this.onCalendarButtonClick && this.props.onClick) {
        this.onCalendarButtonClick(event, this.props.onClick);
      }
    }
  }, {
    key: 'handleOnKeyDown',
    value: function handleOnKeyDown(event) {
      // The picker will be dismissed if one of these keys is pressed and the focus will be released so release the focus to the containing component.
      if (this.props.releaseFocus && (event.key === 'Enter' || event.key === 'Escape' || event.key === 'Tab')) {
        this.props.releaseFocus();

        if (event.key === 'Tab') {
          event.preventDefault();
        }
      }

      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          inputAttributes = _props.inputAttributes,
          name = _props.name,
          onChange = _props.onChange,
          onClick = _props.onClick,
          onKeyDown = _props.onKeyDown,
          placeholder = _props.placeholder,
          releaseFocus = _props.releaseFocus,
          requestFocus = _props.requestFocus,
          value = _props.value,
          customProps = _objectWithoutProperties(_props, ['inputAttributes', 'name', 'onChange', 'onClick', 'onKeyDown', 'placeholder', 'releaseFocus', 'requestFocus', 'value']);

      this.onCalendarButtonClick = customProps.onCalendarButtonClick;
      this.onInputFocus = customProps.onInputFocus;
      this.shouldShowPicker = customProps.shouldShowPicker;

      delete customProps.onCalendarButtonClick;
      delete customProps.onInputFocus;
      delete customProps.shouldShowPicker;

      var additionalInputProps = _extends({}, customProps, inputAttributes);

      // react-datepicker by default will show the picker when the input has focus.
      // Since we want to show the picker only when the calendar button is clicked, we need to delete the onFocus handle that is passed in by react-datepicker.
      delete additionalInputProps.onFocus;

      var dateValue = _DateUtil2.default.convertToISO8601(value, _DateUtil2.default.getFormatByLocale(this.context.intl.locale));
      var buttonText = this.context.intl.formatMessage({ id: 'Terra.datePicker.openCalendar' });

      return _react2.default.createElement(
        'div',
        { className: _DatePickerModule2.default['custom-input'] },
        _react2.default.createElement('input', {
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
          'data-terra-date-input-hidden': true,
          type: 'hidden',
          name: name,
          value: dateValue
        }),
        _react2.default.createElement(_terraFormInput2.default, _extends({}, additionalInputProps, {
          className: _DatePickerModule2.default.input,
          type: 'text',
          name: 'terra-date-'.concat(name),
          value: value,
          onChange: onChange,
          placeholder: placeholder,
          onFocus: this.onInputFocus
        })),
        _react2.default.createElement(_terraButton2.default, {
          className: _DatePickerModule2.default.button,
          text: buttonText,
          onClick: this.handleOnButtonClick,
          onKeyDown: this.handleOnKeyDown,
          icon: Icon,
          isIconOnly: true,
          isCompact: true,
          isDisabled: additionalInputProps.disabled
        })
      );
    }
  }]);

  return DatePickerInput;
}(_react2.default.Component);

DatePickerInput.propTypes = propTypes;
DatePickerInput.defaultProps = defaultProps;
DatePickerInput.contextTypes = contextTypes;

exports.default = DatePickerInput;