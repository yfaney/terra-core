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

var _reactLifecyclesCompat = require('react-lifecycles-compat');

require('terra-base/lib/baseStyles');

var _constants = require('./_constants');

var _AddOption = require('./_AddOption');

var _AddOption2 = _interopRequireDefault(_AddOption);

var _NoResults = require('./_NoResults');

var _NoResults2 = _interopRequireDefault(_NoResults);

var _MenuUtil = require('./_MenuUtil');

var _MenuUtil2 = _interopRequireDefault(_MenuUtil);

var _MenuModule = require('./_Menu.module.scss');

var _MenuModule2 = _interopRequireDefault(_MenuModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_MenuModule2.default);

/* Disabling this rule because props used in getDerivedStateFromProps return false positives. */
/* eslint-disable react/no-unused-prop-types */
var propTypes = {
  /**
   * The content of the menu.
   */
  children: _propTypes2.default.node,
  /**
   * Content to display when no results are found.
   */
  noResultContent: _propTypes2.default.node,
  /**
   * Callback function triggered when an option is deselected.
   */
  onDeselect: _propTypes2.default.func,
  /**
   * Callback function triggered when an option is selected.
   */
  onSelect: _propTypes2.default.func.isRequired,
  /**
   * Callback function for option filtering. function(searchValue, option)
   */
  optionFilter: _propTypes2.default.func,
  /**
   * The search value to filter the available options.
   */
  searchValue: _propTypes2.default.string,
  /**
   * The value of the selected options.
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.array]),
  /**
   * The behavior of the select.
   */
  variant: _propTypes2.default.oneOf([_constants.Variants.COMBOBOX, _constants.Variants.DEFAULT, _constants.Variants.MULTIPLE, _constants.Variants.SEARCH, _constants.Variants.TAG]).isRequired
};

var defaultProps = {
  children: undefined,
  noResultContent: undefined,
  onDeselect: undefined,
  optionFilter: undefined,
  searchValue: undefined,
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

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.state = {};

    _this.searchString = '';
    _this.clearSearch = _this.clearSearch.bind(_this);
    _this.clearScrollTimeout = _this.clearScrollTimeout.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleOptionClick = _this.handleOptionClick.bind(_this);
    _this.scrollIntoView = _this.scrollIntoView.bind(_this);
    return _this;
  }

  /**
   * Updates the component state when new props are received.
   * @param {Object} props - The received props.
   * @param {Object} state - The current state of the component.
   * @return {Object} - The new state object.
   */


  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.scrollIntoView();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearSearch();
      this.clearScrollTimeout();
      document.removeEventListener('keydown', this.handleKeyDown);
    }

    /**
     * Clears the default variant keyboard search.
     */

  }, {
    key: 'clearSearch',
    value: function clearSearch() {
      this.searchString = '';
      clearTimeout(this.searchTimeout);
      this.searchTimeout = null;
    }

    /**
     * Clears the scroll timeout.
     */

  }, {
    key: 'clearScrollTimeout',
    value: function clearScrollTimeout() {
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = null;
    }

    /**
     * Clones the menu content with the necessary events.
     * @param {ReactNode} object - The node being cloned.
     * @return {array} - A cloned copy of the object.
     */

  }, {
    key: 'clone',
    value: function clone(object) {
      var _this2 = this;

      return _react2.default.Children.map(object, function (option) {
        if (option.type.isOption) {
          return _react2.default.cloneElement(option, _extends({
            id: 'terra-select-option-' + option.props.value,
            isActive: option.props.value === _this2.state.active,
            isCheckable: _MenuUtil2.default.allowsMultipleSelections(_this2.props.variant),
            isSelected: _MenuUtil2.default.isSelected(_this2.props.value, option.props.value),
            onMouseDown: function onMouseDown() {
              _this2.downOption = option;
            },
            onMouseUp: function onMouseUp(event) {
              return _this2.handleOptionClick(event, option);
            },
            onMouseEnter: function onMouseEnter(event) {
              return _this2.handleMouseEnter(event, option);
            }
          }, option.props.value === _this2.state.active && { 'data-select-active': true }));
        }if (option.type.isOptGroup) {
          return _react2.default.cloneElement(option, {}, _this2.clone(option.props.children));
        }
        return option;
      });
    }

    /**
     * Handles keyboard interactions within the dropdown.
     * @param {event} event - The key down event.
     */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      var _this3 = this;

      var keyCode = event.keyCode;
      var _state = this.state,
          active = _state.active,
          children = _state.children;
      var _props = this.props,
          onSelect = _props.onSelect,
          value = _props.value,
          variant = _props.variant;


      if (keyCode === _constants.KeyCodes.UP_ARROW) {
        this.clearScrollTimeout();
        this.scrollTimeout = setTimeout(this.clearScrollTimeout, 500);
        this.setState({ active: _MenuUtil2.default.findPrevious(children, active) });
      } else if (keyCode === _constants.KeyCodes.DOWN_ARROW) {
        this.clearScrollTimeout();
        this.scrollTimeout = setTimeout(this.clearScrollTimeout, 500);
        this.setState({ active: _MenuUtil2.default.findNext(children, active) });
      } else if (keyCode === _constants.KeyCodes.ENTER && active !== null && (!_MenuUtil2.default.allowsMultipleSelections(variant) || !_MenuUtil2.default.includes(value, active))) {
        event.preventDefault();
        var option = _MenuUtil2.default.findByValue(children, active);
        onSelect(option.props.value, option);
      } else if (keyCode === _constants.KeyCodes.HOME) {
        event.preventDefault();
        this.setState({ active: _MenuUtil2.default.findFirst(children) });
      } else if (keyCode === _constants.KeyCodes.END) {
        event.preventDefault();
        this.setState({ active: _MenuUtil2.default.findLast(children) });
      } else if (variant === _constants.Variants.DEFAULT && keyCode >= 48 && keyCode <= 90) {
        this.searchString = this.searchString.concat(String.fromCharCode(keyCode));
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(this.clearSearch, 500);
        this.setState(function (prevState) {
          return { active: _MenuUtil2.default.findWithStartString(prevState.children, _this3.searchString) || active };
        });
      }
    }

    /**
     * Communicates the selection or deselection of an option.
     * @param {event} event - The click event triggering the callback.
     * @param {ReactNode} option - The option that was clicked.
     */

  }, {
    key: 'handleOptionClick',
    value: function handleOptionClick(event, option) {
      if (option.props.disabled || option !== this.downOption) {
        return;
      }

      var _props2 = this.props,
          onDeselect = _props2.onDeselect,
          onSelect = _props2.onSelect,
          value = _props2.value,
          variant = _props2.variant;


      if (_MenuUtil2.default.allowsMultipleSelections(variant) && _MenuUtil2.default.includes(value, option.props.value)) {
        onDeselect(option.props.value, option);
      } else {
        onSelect(option.props.value, option);
      }
    }

    /**
     * Sets the hovered option as the active value.
     * @param {event} event - The mouse enter event.
     * @param {ReactNode} option - The option that recieved the mouse enter event.
     */

  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter(event, option) {
      // Prevents setting the active option on mouse enter if the keyboard scrolled the view.
      if (this.scrollTimeout) {
        return;
      }

      if (!option.props.disabled) {
        this.setState({ active: option.props.value });
      }

      if (option.props.onMouseEnter) {
        option.props.onMouseEnter(event);
      }
    }

    /**
     * Scrolls the active option into view.
     * Options already in view will not scroll.
     * Options above the dropdown will be scrolled to the top of the menu.
     * Options below the dropdown will be scrolled to the bottom of the menu.
     */

  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView() {
      if (!this.state.active) {
        return;
      }

      var activeOption = this.menu.querySelector('[data-select-active]');
      var dropdownRect = this.menu.parentNode.getBoundingClientRect();
      var optionRect = activeOption.getBoundingClientRect();

      if (optionRect.top < dropdownRect.top) {
        activeOption.scrollIntoView();
      } else if (optionRect.bottom > dropdownRect.bottom) {
        activeOption.scrollIntoView(false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return (
        // This warns that aria-activedescendant should map to an id
        // Our implementation maps it to a dynamic id but linter is unable to detect mapping and throws an error
        /* eslint-disable jsx-a11y/aria-proptypes */
        _react2.default.createElement(
          'ul',
          {
            role: 'listbox',
            className: cx('menu'),
            ref: function ref(menu) {
              _this4.menu = menu;
            },
            'aria-activedescendant': 'terra-select-option-' + this.state.active,
            tabIndex: '0'
          },
          this.clone(this.state.children)
        )
        /* eslint-enable jsx-a11y/aria-proptypes */

      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      var searchValue = props.searchValue,
          noResultContent = props.noResultContent;

      var children = _MenuUtil2.default.filter(props.children, props.searchValue, props.optionFilter);

      if (_MenuUtil2.default.shouldAllowFreeText(props, children)) {
        children.push(_react2.default.createElement(_AddOption2.default, { value: searchValue }));
      }

      if (_MenuUtil2.default.shouldShowNoResults(props, children)) {
        children.push(_react2.default.createElement(_NoResults2.default, { noResultContent: noResultContent, value: searchValue }));
      }

      return {
        children: children,
        searchValue: searchValue,
        active: _MenuUtil2.default.getActiveOptionFromProps(props, children, state)
      };
    }
  }]);

  return Menu;
}(_react2.default.Component);

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.contextTypes = contextTypes;

/**
 * This polyfill enables backwards compatability of features added in React 16.3.0.
 * More information is available at: https://github.com/reactjs/react-lifecycles-compat
 */
(0, _reactLifecyclesCompat.polyfill)(Menu);

exports.default = Menu;