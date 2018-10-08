'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('./_constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuUtil = function () {
  function MenuUtil() {
    _classCallCheck(this, MenuUtil);
  }

  _createClass(MenuUtil, null, [{
    key: 'contains',

    /**
     * Determines if the query is contained within the string.
     * @param {string|undefined} string - The initial string.
     * @param {string|undefined} query - The value being searched for.
     * @return {boolean} - True if the string contains the query.
     */
    value: function contains(string, query) {
      if (!string) {
        return false;
      }
      return string.toString().toLowerCase().indexOf(query.trim().toLowerCase()) > -1;
    }

    /**
     * Compares the value of two strings to determine case insensitive equality.
     * @param {string|undefined} a - The initial value to compare.
     * @param {string|undefined} b - The secondary value to compare.
     * @return {boolean} - True if the values are equal.
     */

  }, {
    key: 'isEqual',
    value: function isEqual(a, b) {
      if (a === undefined || b === undefined) {
        return false;
      }
      return a.toString().toLowerCase() === b.toString().toLowerCase();
    }

    /**
     * Determines whether the variant allows multiple selections.
     * @param {string} variant - The variant.
     * @return {boolean} - True if the variant allows multiple selections.
     */

  }, {
    key: 'allowsMultipleSelections',
    value: function allowsMultipleSelections(variant) {
      return variant === _constants.Variants.MULTIPLE || variant === _constants.Variants.TAG;
    }

    /**
     * Determines whether the provided option is selected.
     * @param {array|number|string} value - The select value.
     * @param {number|string} option - The option value.
     * @return {boolean} - True if the option is selected.
     */

  }, {
    key: 'isSelected',
    value: function isSelected(value, option) {
      if (Array.isArray(value)) {
        return MenuUtil.includes(value, option);
      }
      return MenuUtil.isEqual(value, option);
    }

    /**
     * Determines if the query is contianed within the array.
     * @param {array|undefined} array - The initial array.
     * @param {string|undefined} query - The value being searched for.
     * @return {boolean} - True if the query is contained within the array.
     */

  }, {
    key: 'includes',
    value: function includes(array, query) {
      if (!array) {
        return false;
      }

      return array.find(function (option) {
        return MenuUtil.isEqual(option, query);
      }) !== undefined;
    }

    /**
     * Flattens the available options. Ignores disabled options.
     * @param {ReactNode} object - The node being flattened.
     * @param {boolean} - Whether disabled props should be filtered out.
     * @return {array} - An array of available options.
     */

  }, {
    key: 'flatten',
    value: function flatten(object, ignoreDisabled) {
      return _react2.default.Children.toArray(object).reduce(function (accumulator, option) {
        if (option.type.isOption && (!ignoreDisabled || ignoreDisabled && !option.props.disabled)) {
          accumulator.push(option);
        } else if (option.type.isOptGroup) {
          return accumulator.concat(MenuUtil.flatten(option.props.children, ignoreDisabled));
        }
        return accumulator;
      }, []);
    }

    /**
     * Filters the object content by the search criteria.
     * @param {ReactNode} object - The node being filtered.
     * @param {function|undefined} optionFilter - An optional custom filter.
     * @return {array} - An array of filtered content.
     */

  }, {
    key: 'filter',
    value: function filter(object, searchValue, optionFilter) {
      return _react2.default.Children.toArray(object).reduce(function (accumulator, option) {
        if (option.type.isOption && MenuUtil.filterOption(option, searchValue, optionFilter)) {
          accumulator.push(option);
        } else if (option.type.isOptGroup) {
          var children = MenuUtil.filter(option.props.children, searchValue, optionFilter);
          // Ignore groups that do not contain any filtered options.
          if (children.length > 0) {
            accumulator.push(_react2.default.cloneElement(option, {}, children));
          }
        }
        return accumulator;
      }, []);
    }

    /**
      * Determines if the option should be included in the filtered set.
      * @param {ReactNode} option - The option being filtered.
      * @param {function|undefined} optionFilter - A custom callback to filter against.
      * @return {boolean} - True if the option should be included in the fitlered set.
     */

  }, {
    key: 'filterOption',
    value: function filterOption(option, searchValue, optionFilter) {
      if (optionFilter) {
        return optionFilter(searchValue, option);
      }
      return MenuUtil.contains(option.props.display, searchValue);
    }

    /**
     * Finds the option matching the requested value.
     * @param {ReactNode} object - The node being flattened.
     * @param {string} value - The value of the target option.
     * @return {ReactNode|undefined} - The option. Returns undefined if not found.
     */

  }, {
    key: 'findByValue',
    value: function findByValue(object, value) {
      return MenuUtil.flatten(object).find(function (_ref) {
        var props = _ref.props;
        return MenuUtil.isEqual(props.value, value);
      });
    }

    /**
     * Finds the option matching the requested display value.
     * @param {ReactNode} object - The node being flattened.
     * @param {string} value - The value of the target option.
     * @return {ReactNode|undefined} - The option. Returns undefined if not found.
     */

  }, {
    key: 'findByDisplay',
    value: function findByDisplay(object, value) {
      return MenuUtil.flatten(object).find(function (_ref2) {
        var props = _ref2.props;
        return MenuUtil.isEqual(props.display, value);
      });
    }

    /**
     * Finds the first option in the menu.
     * @param {ReactNode} object - The menu.
     * @return {string|null} - The value of the first option. Null if not found.
     */

  }, {
    key: 'findFirst',
    value: function findFirst(object) {
      var options = MenuUtil.flatten(object, true);

      if (options.length > 0) {
        return options[0].props.value;
      }
      return null;
    }

    /**
     * Finds the first option in the menu.
     * @param {ReactNode} object - The menu.
     * @return {string|null} - The value of the last option. Null if not found.
     */

  }, {
    key: 'findLast',
    value: function findLast(object) {
      var options = MenuUtil.flatten(object, true);

      if (options.length > 0) {
        return options[options.length - 1].props.value;
      }
      return null;
    }

    /**
     * Finds the first option in the menu that starts with the string.
     * @param {ReactNode} object - The menu.
     * @param {string} string - The start string.
     * @return {string|null} - The firt option that starts with the provided string.
     */

  }, {
    key: 'findWithStartString',
    value: function findWithStartString(object, string) {
      var option = MenuUtil.flatten(object, true).find(function (opt) {
        return (opt.props.display || '').toLowerCase().startsWith(string.toLowerCase());
      });
      return option ? option.props.value : null;
    }

    /**
     * Finds the option following the active option.
     * @param {ReactNode} object - The node being flattened.
     * @param {string} value - The value of the active option.
     * @return {string|null} - The value of the next option. Returns null if not found.
     */

  }, {
    key: 'findNext',
    value: function findNext(object, value) {
      var options = MenuUtil.flatten(object, true);
      var index = options.findIndex(function (_ref3) {
        var props = _ref3.props;
        return MenuUtil.isEqual(props.value, value);
      });
      return index === -1 ? null : options[Math.min(index + 1, options.length - 1)].props.value;
    }

    /**
     * Finds the option preceding the active option.
     * @param {ReactNode} object - The node being flattened.
     * @param {string} value - The value of the active option.
     * @return {string|null} - The value of the previous option. Returns null if not found.
     */

  }, {
    key: 'findPrevious',
    value: function findPrevious(object, value) {
      var options = MenuUtil.flatten(object, true);
      var index = options.findIndex(function (_ref4) {
        var props = _ref4.props;
        return MenuUtil.isEqual(props.value, value);
      });
      return index === -1 ? null : options[Math.max(index - 1, 0)].props.value;
    }

    /**
     * Determines the appropriate active option.
     * @param {Object} props - The menu props.
     * @param {array} children - The menu children.
     * @param {Object} state - The menu state.
     * @return {string|null} - The active option value. Null if not found.
     */

  }, {
    key: 'getActiveOptionFromProps',
    value: function getActiveOptionFromProps(props, children, state) {
      var active = state.active;
      var searchValue = props.searchValue,
          value = props.value;

      var options = MenuUtil.flatten(children, true);

      if (options.length === 0) {
        return null;
      }if (state.searchValue === undefined) {
        var selected = options.find(function (option) {
          return Array.isArray(value) ? MenuUtil.includes(value, option.props.value) : MenuUtil.isEqual(value, option.props.value);
        });
        return selected === undefined ? options[0].props.value : selected.props.value;
      }if (searchValue !== state.searchValue) {
        return options[0].props.value;
      }if (active !== null && MenuUtil.findByValue(options, active)) {
        return active;
      }
      return options[0].props.value;
    }

    /**
     * Determines if the menu should allow a free text entry.
     * @param {Object} props - The menu props.
     * @param {array} children - The menu children.
     * @return {boolean} - True if a free text entry is allowed.
     */

  }, {
    key: 'shouldAllowFreeText',
    value: function shouldAllowFreeText(props, children) {
      var searchValue = props.searchValue,
          value = props.value,
          variant = props.variant;


      if (variant === _constants.Variants.TAG || variant === _constants.Variants.COMBOBOX) {
        var option = MenuUtil.findByDisplay(children, searchValue);
        var included = Array.isArray(value) ? MenuUtil.includes(value, searchValue) : MenuUtil.isEqual(value, searchValue);
        return !option && !included && (searchValue || '').trim().length > 0;
      }
      return false;
    }

    /**
     * Determines if the menu should show the no results content.
     * @param {Object} props - The menu props.
     * @param {array} children - The menu children.
     * @return {boolean} - True if the no results content should show..
     */

  }, {
    key: 'shouldShowNoResults',
    value: function shouldShowNoResults(props, children) {
      var variant = props.variant;


      if (variant !== _constants.Variants.TAG && variant !== _constants.Variants.COMBOBOX) {
        return children.length === 0;
      }
      return false;
    }
  }]);

  return MenuUtil;
}();

exports.default = MenuUtil;