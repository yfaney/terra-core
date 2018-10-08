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

var _constants = require('./_constants');

var _Dropdown = require('./_Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _FrameUtil = require('./_FrameUtil');

var _FrameUtil2 = _interopRequireDefault(_FrameUtil);

var _FrameModule = require('./_Frame.module.scss');

var _FrameModule2 = _interopRequireDefault(_FrameModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_FrameModule2.default);

var propTypes = {
  /**
   * Whether the select is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The select display.
   */
  display: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.array]),
  /**
   * A render callback for dropdown content.
   */
  dropdown: _propTypes2.default.func,
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
   * Content to display when no search results are found.
   */
  noResultContent: _propTypes2.default.node,
  /**
   * Callback function triggered when an option is deselected.
   */
  onDeselect: _propTypes2.default.func,
  /**
   * Callback function triggered when the frame loses focus.
   */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function triggered when the frame gains focus.
   */
  onFocus: _propTypes2.default.func,
  /**
   * Callback function triggered when the search criteria changes.
   */
  onSearch: _propTypes2.default.func,
  /**
   * Callback function triggered when an option is selected.
   */
  onSelect: _propTypes2.default.func,
  /**
   * Callback function for option filtering. function(searchValue, option)
   */
  optionFilter: _propTypes2.default.func,
  /**
   * Placeholder text.
   */
  placeholder: _propTypes2.default.string,
  /**
   * The select value.
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.array]),
  /**
   * The behavior of the select.
   */
  variant: _propTypes2.default.oneOf([_constants.Variants.COMBOBOX, _constants.Variants.DEFAULT, _constants.Variants.MULTIPLE, _constants.Variants.SEARCH, _constants.Variants.TAG])
};

var defaultProps = {
  disabled: false,
  dropdown: undefined,
  dropdownAttrs: undefined,
  isInvalid: false,
  noResultContent: undefined,
  onDeselect: undefined,
  onSearch: undefined,
  onSelect: undefined,
  optionFilter: undefined,
  placeholder: undefined,
  value: undefined,
  variant: _constants.Variants.DEFAULT
};

/* This rule can be removed when eslint-plugin-jsx-a11y is updated to ~> 6.0.0 */
/* eslint-disable jsx-a11y/no-static-element-interactions */

var Frame = function (_React$Component) {
  _inherits(Frame, _React$Component);

  function Frame(props) {
    _classCallCheck(this, Frame);

    var _this = _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, props));

    _this.state = {
      isOpen: false,
      isFocused: false,
      isPositioned: false,
      hasSearchChanged: false,
      searchValue: ''
    };

    _this.setInput = _this.setInput.bind(_this);
    _this.getDisplay = _this.getDisplay.bind(_this);
    _this.openDropdown = _this.openDropdown.bind(_this);
    _this.closeDropdown = _this.closeDropdown.bind(_this);
    _this.toggleDropdown = _this.toggleDropdown.bind(_this);
    _this.positionDropdown = _this.positionDropdown.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleSelect = _this.handleSelect.bind(_this);
    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleInputMouseDown = _this.handleInputMouseDown.bind(_this);
    return _this;
  }

  _createClass(Frame, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(previousProps, previousState) {
      if (_FrameUtil2.default.shouldPositionDropdown(previousState, this.state, this.dropdown)) {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(this.positionDropdown, !previousState.isOpen ? 0 : 100);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.debounceTimer);
    }
  }, {
    key: 'setInput',
    value: function setInput(input) {
      this.input = input;
    }
  }, {
    key: 'getDisplay',
    value: function getDisplay() {
      var _state = this.state,
          hasSearchChanged = _state.hasSearchChanged,
          searchValue = _state.searchValue;
      var _props = this.props,
          disabled = _props.disabled,
          display = _props.display,
          placeholder = _props.placeholder,
          variant = _props.variant;


      var inputAttrs = {
        disabled: disabled,
        placeholder: placeholder,
        ref: this.setInput,
        onChange: this.handleSearch,
        onMouseDown: this.handleInputMouseDown,
        'aria-label': 'search',
        className: cx('search-input', { 'is-hidden': _FrameUtil2.default.shouldHideSearch(this.props, this.state) })
      };

      switch (variant) {
        case _constants.Variants.TAG:
        case _constants.Variants.MULTIPLE:
          return _react2.default.createElement(
            'ul',
            { className: cx('tags') },
            display,
            _react2.default.createElement(
              'li',
              { className: cx('search-wrapper') },
              _react2.default.createElement('input', _extends({}, inputAttrs, { value: searchValue }))
            )
          );
        case _constants.Variants.SEARCH:
        case _constants.Variants.COMBOBOX:
          return _react2.default.createElement('input', _extends({}, inputAttrs, { value: hasSearchChanged ? searchValue : display }));
        default:
          return display || _react2.default.createElement(
            'div',
            { className: cx('placeholder') },
            placeholder || '\xa0'
          );
      }
    }

    /**
     * Closes the dropdown.
     */

  }, {
    key: 'closeDropdown',
    value: function closeDropdown() {
      this.setState({
        isAbove: false,
        isFocused: document.activeElement === this.input || document.activeElement === this.select,
        isOpen: false,
        isPositioned: false,
        hasSearchChanged: false,
        searchValue: ''
      });

      // Tags and Comboboxes will select the current search value when the component loses focus.
      if (_FrameUtil2.default.shouldAddOptionOnBlur(this.props, this.state)) {
        this.props.onSelect(this.state.searchValue);
      }
    }

    /**
     * Opens the dropdown.
     */

  }, {
    key: 'openDropdown',
    value: function openDropdown() {
      if (this.state.isOpen || this.props.disabled) {
        return;
      }

      if (this.input) {
        this.input.focus();
      }

      this.setState({ isOpen: true, isFocused: true, isPositioned: false });
    }

    /**
     * Positions the dropdown to utilize the most available space.
     */

  }, {
    key: 'positionDropdown',
    value: function positionDropdown() {
      if (!this.state.isOpen) {
        return;
      }

      var _props2 = this.props,
          dropdownAttrs = _props2.dropdownAttrs,
          maxHeight = _props2.maxHeight;
      var select = this.select,
          dropdown = this.dropdown;

      this.setState(_FrameUtil2.default.dropdownPosition(dropdownAttrs, select, dropdown, maxHeight));
    }

    /**
     * Handles the blur event.
     */

  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      this.closeDropdown();

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    }

    /**
     * Handles the focus event.
     */

  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      if (this.props.disabled) {
        return;
      }

      if (!this.state.isFocused) {
        this.setState({ isFocused: true });
      }

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    }

    /**
     * Manages keyboard interactions and accessibility.
     * @param {event} event - The onKeyDown event.
     */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      var value = this.props.value;
      var keyCode = event.keyCode,
          target = event.target;
      var BACKSPACE = _constants.KeyCodes.BACKSPACE,
          SPACE = _constants.KeyCodes.SPACE,
          UP_ARROW = _constants.KeyCodes.UP_ARROW,
          DOWN_ARROW = _constants.KeyCodes.DOWN_ARROW;


      if (keyCode === SPACE && target !== this.input) {
        event.preventDefault();
        this.openDropdown();
      } else if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
        event.preventDefault();
        this.openDropdown();
      } else if (keyCode === BACKSPACE && _FrameUtil2.default.allowsMultipleSelections(this.props) && !this.state.searchValue && value.length > 0) {
        this.props.onDeselect(value[value.length - 1]);
      } else if (keyCode === _constants.KeyCodes.ESCAPE) {
        this.closeDropdown();
      }
    }

    /**
     * Handles the mouse down events.
     * @param {event} event - The mouse down event.
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      if (this.props.variant !== _constants.Variants.DEFAULT) {
        // Preventing default events stops the search input from losing focus.
        // The default variant has no search input therefore the mouse down gives the component focus.
        event.preventDefault();
      }
      this.openDropdown();
    }

    /**
     * Handles the input mouse down events.
     * @param {event} event - The mouse down event.
     */

  }, {
    key: 'handleInputMouseDown',
    value: function handleInputMouseDown(event) {
      event.stopPropagation();
      this.openDropdown();
    }

    /**
     * Handles changes to the search value.
     * @param {event} event - The input change event.
     */

  }, {
    key: 'handleSearch',
    value: function handleSearch(event) {
      var searchValue = event.target.value;

      this.setState({
        isOpen: true,
        hasSearchChanged: true,
        searchValue: searchValue
      });

      if (this.props.onSearch) {
        this.props.onSearch(searchValue);
      }
    }

    /**
     * Handles the request to select an option.
     * @param {string|number} value - The value of the selected option.
     * @param {ReactNode} option - The option that was selected.
     */

  }, {
    key: 'handleSelect',
    value: function handleSelect(value, option) {
      this.setState({
        searchValue: '',
        hasSearchChanged: false,
        isOpen: _FrameUtil2.default.allowsMultipleSelections(this.props)
      });

      if (this.props.onSelect) {
        this.props.onSelect(value, option);
      }
    }

    /**
     * Toggles the dropdown open or closed.
     */

  }, {
    key: 'toggleDropdown',
    value: function toggleDropdown() {
      if (this.state.isOpen) {
        this.closeDropdown();
      } else {
        this.openDropdown();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          disabled = _props3.disabled,
          display = _props3.display,
          dropdown = _props3.dropdown,
          dropdownAttrs = _props3.dropdownAttrs,
          isInvalid = _props3.isInvalid,
          maxHeight = _props3.maxHeight,
          noResultContent = _props3.noResultContent,
          onDeselect = _props3.onDeselect,
          onSearch = _props3.onSearch,
          onSelect = _props3.onSelect,
          optionFilter = _props3.optionFilter,
          placeholder = _props3.placeholder,
          variant = _props3.variant,
          value = _props3.value,
          customProps = _objectWithoutProperties(_props3, ['disabled', 'display', 'dropdown', 'dropdownAttrs', 'isInvalid', 'maxHeight', 'noResultContent', 'onDeselect', 'onSearch', 'onSelect', 'optionFilter', 'placeholder', 'variant', 'value']);

      var selectClasses = cx(['select', variant, { 'is-above': this.state.isAbove }, { 'is-disabled': disabled }, { 'is-focused': this.state.isFocused }, { 'is-invalid': isInvalid }, { 'is-open': this.state.isOpen }, customProps.className]);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, {
          role: 'combobox',
          'aria-controls': this.state.isOpen ? 'terra-select-dropdown' : undefined,
          'aria-disabled': !!disabled,
          'aria-expanded': !!this.state.isOpen,
          'aria-haspopup': 'true',
          'aria-owns': this.state.isOpen ? 'terra-select-dropdown' : undefined,
          className: selectClasses,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleMouseDown,
          tabIndex: _FrameUtil2.default.tabIndex(this.props),
          ref: function ref(select) {
            _this2.select = select;
          }
        }),
        _react2.default.createElement(
          'div',
          { role: 'textbox', className: cx('display'), onMouseDown: this.openDropdown },
          this.getDisplay()
        ),
        _react2.default.createElement(
          'div',
          { className: cx('toggle'), onMouseDown: this.toggleDropdown },
          _react2.default.createElement('span', { className: cx('arrow-icon') })
        ),
        this.state.isOpen && _react2.default.createElement(
          _Dropdown2.default,
          _extends({}, dropdownAttrs, {
            id: this.state.isOpen ? 'terra-select-dropdown' : undefined,
            target: this.select,
            isAbove: this.state.isAbove,
            isEnabled: this.state.isPositioned,
            onResize: this.positionDropdown,
            refCallback: function refCallback(ref) {
              _this2.dropdown = ref;
            },
            style: _FrameUtil2.default.dropdownStyle(dropdownAttrs, this.state)
          }),
          dropdown && dropdown({
            value: value,
            variant: variant,
            onDeselect: onDeselect,
            optionFilter: optionFilter,
            noResultContent: noResultContent,
            onSelect: this.handleSelect,
            onRequestClose: this.closeDropdown,
            searchValue: this.state.searchValue
          })
        )
      );
    }
  }]);

  return Frame;
}(_react2.default.Component);

Frame.propTypes = propTypes;
Frame.defaultProps = defaultProps;

exports.default = Frame;