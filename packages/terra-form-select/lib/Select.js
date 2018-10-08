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

var _constants = require('./_constants');

var _Menu = require('./_Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Frame = require('./_Frame');

var _Frame2 = _interopRequireDefault(_Frame);

var _Option = require('./_Option');

var _Option2 = _interopRequireDefault(_Option);

var _OptGroup = require('./_OptGroup');

var _OptGroup2 = _interopRequireDefault(_OptGroup);

var _Tag = require('./_Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _SelectUtil = require('./_SelectUtil');

var _SelectUtil2 = _interopRequireDefault(_SelectUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The dropdown menu options.
   */
  children: _propTypes2.default.node,
  /**
   * The default selected value.
   */
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.array]),
  /**
   * Whether the select is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Additional attributes to spread onto the dropdown. ( Style, ClassNames, etc.. )
   */
  // eslint-disable-next-line react/forbid-prop-types
  dropdownAttrs: _propTypes2.default.object,
  /**
   * Whether the select is in an invalid state.
   */
  isInvalid: _propTypes2.default.bool,
  /**
   * The max height of the dropdown.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * Content to display when no results are found.
   */
  noResultContent: _propTypes2.default.node,
  /**
   * Callback function triggered when the select loses focus. function(event)
   */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function triggered when the value changes. function(value)
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function triggered when the select is clicked. function(event)
   */
  onClick: _propTypes2.default.func,
  /**
   * Callback function triggered when an option is deselected. function(value)
   */
  onDeselect: _propTypes2.default.func,
  /**
   * Callback function triggered when the select receives focus. function(event)
   */
  onFocus: _propTypes2.default.func,
  /**
   * Callback function triggered when the search criteria changes. function(searchValue)
   */
  onSearch: _propTypes2.default.func,
  /**
   * Callback function triggered when an option is selected. function(value)
   */
  onSelect: _propTypes2.default.func,
  /**
   * Callback function invoked for each option on search change. function(searchValue, option)
   */
  optionFilter: _propTypes2.default.func,
  /**
   * Placeholder text.
   */
  placeholder: _propTypes2.default.string,
  /**
   * The selected value.
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.array]),
  /**
   * The behavior of the select. One of `default`, `combobox`, `multiple`, `tag`, or `search`.
   */
  variant: _propTypes2.default.oneOf([_constants.Variants.COMBOBOX, _constants.Variants.DEFAULT, _constants.Variants.MULTIPLE, _constants.Variants.SEARCH, _constants.Variants.TAG])
};

var defaultProps = {
  children: undefined,
  defaultValue: undefined,
  disabled: false,
  dropdownAttrs: undefined,
  isInvalid: false,
  noResultContent: undefined,
  onChange: undefined,
  onDeselect: undefined,
  onSearch: undefined,
  onSelect: undefined,
  optionFilter: undefined,
  placeholder: undefined,
  value: undefined,
  variant: 'default'
};

var contextTypes = {
  /* eslint-disable consistent-return */
  intl: function intl(context) {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  }
};

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.state = {
      tags: [],
      value: _SelectUtil2.default.defaultValue(props)
    };

    _this.display = _this.display.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleDeselect = _this.handleDeselect.bind(_this);
    _this.handleSelect = _this.handleSelect.bind(_this);
    return _this;
  }

  /**
   * Returns the appropriate variant display
   */


  _createClass(Select, [{
    key: 'display',
    value: function display() {
      var _this2 = this;

      var selectValue = _SelectUtil2.default.value(this.props, this.state);

      switch (this.props.variant) {
        case _constants.Variants.TAG:
        case _constants.Variants.MULTIPLE:
          return selectValue.map(function (tag) {
            return _react2.default.createElement(
              _Tag2.default,
              { value: tag, key: tag, onDeselect: _this2.handleDeselect },
              _SelectUtil2.default.valueDisplay(_this2.props, tag)
            );
          });
        default:
          return _SelectUtil2.default.valueDisplay(this.props, selectValue);
      }
    }

    /**
     * Communicates changes to the value.
     * @param {array|number|string} value - The value resulting from a change.
     */

  }, {
    key: 'handleChange',
    value: function handleChange(value) {
      if (this.props.value === undefined) {
        this.setState({ value: value });
      }

      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }

    /**
     * Communicates the removal of a value from the selected options.
     * @param {number|string} value - The value to be removed.
     */

  }, {
    key: 'handleDeselect',
    value: function handleDeselect(value) {
      this.handleChange(_SelectUtil2.default.deselect(this.props, this.state, value));

      if (this.props.onDeselect) {
        this.props.onDeselect(value);
      }
    }

    /**
     * Communicates the selection of a value.
     * @param {number|string} value - The value of the selected option.
     * @param {ReactNode} option - The selected option.
     */

  }, {
    key: 'handleSelect',
    value: function handleSelect(value, option) {
      this.handleChange(_SelectUtil2.default.select(this.props, this.state, value));

      // Add new tags for uncontrolled components.
      if (this.props.value === undefined && !_SelectUtil2.default.findByValue(this.props, this.state, value)) {
        this.setState(function (prevState) {
          return { tags: [].concat(_toConsumableArray(prevState.tags), [_react2.default.createElement(_Option2.default, { key: value, display: value, value: value })]) };
        });
      }

      if (this.props.onSelect) {
        this.props.onSelect(value, option);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var intl = this.context.intl;

      var _props = this.props,
          children = _props.children,
          defaultValue = _props.defaultValue,
          onChange = _props.onChange,
          placeholder = _props.placeholder,
          value = _props.value,
          otherProps = _objectWithoutProperties(_props, ['children', 'defaultValue', 'onChange', 'placeholder', 'value']);

      var defaultPlaceholder = intl.formatMessage({ id: 'Terra.form.select.defaultDisplay' });
      var selectPlaceholder = placeholder === undefined ? defaultPlaceholder : placeholder;

      return _react2.default.createElement(_Frame2.default, _extends({}, otherProps, {
        value: _SelectUtil2.default.value(this.props, this.state),
        display: this.display(),
        onDeselect: this.handleDeselect,
        onSelect: this.handleSelect,
        placeholder: selectPlaceholder,
        dropdown: function dropdown(dropdownProps) {
          return _react2.default.createElement(
            _Menu2.default,
            dropdownProps,
            _this3.state.tags,
            children
          );
        }
      }));
    }
  }]);

  return Select;
}(_react2.default.Component);

Select.Option = _Option2.default;
Select.OptGroup = _OptGroup2.default;
Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
Select.contextTypes = contextTypes;

exports.default = Select;