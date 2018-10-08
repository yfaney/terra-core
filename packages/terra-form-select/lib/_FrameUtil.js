'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./_constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FrameUtil = function () {
  function FrameUtil() {
    _classCallCheck(this, FrameUtil);
  }

  _createClass(FrameUtil, null, [{
    key: 'dropdownStyle',

    /**
     * Returns the dropdown style.
     * @param {Object} props - The component props.
     * @param {Object} state - The component state.
     * @return {Object} - The dropdown style.
     */
    value: function dropdownStyle(props, state) {
      var maxHeight = state.maxHeight,
          width = state.width;

      return _extends({}, _extends({}, props).style, { maxHeight: maxHeight, width: width });
    }

    /**
     * Determines the dropdown position.
     * @param {Object} props - The component props.
     * @param {ReactNode} target - The select wrapper.
     * @param {ReactNode} dropdown - The dropdown.
     * @param {number} maxHeight - The maxHeight of the dropdown dropdown.
     * @return {Object} - The calculated dropdown attributes.
     */

  }, {
    key: 'dropdownPosition',
    value: function dropdownPosition(props, target, dropdown, maxHeight) {
      var style = _extends({}, props).style || {};

      var _dropdown$getBounding = dropdown.getBoundingClientRect(),
          height = _dropdown$getBounding.height;

      var _target$getBoundingCl = target.getBoundingClientRect(),
          bottom = _target$getBoundingCl.bottom,
          width = _target$getBoundingCl.width,
          top = _target$getBoundingCl.top;

      var spaceBelow = window.innerHeight - bottom;
      var maximumHeight = parseInt(style.maxHeight || maxHeight, 10) || Infinity;
      var canFitBelow = maximumHeight < spaceBelow || height < spaceBelow || spaceBelow > top;
      var availableSpace = canFitBelow ? spaceBelow : top;

      return {
        width: width,
        maxHeight: Math.min(maximumHeight, availableSpace - 10),
        isAbove: !canFitBelow,
        isPositioned: true
      };
    }

    /**
     * Determines whether the variant allows multiple selections.
     * @param {Object} variant - The component props.
     * @return {boolean} - True if the variant allows multiple selections.
     */

  }, {
    key: 'allowsMultipleSelections',
    value: function allowsMultipleSelections(props) {
      return props.variant === _constants.Variants.MULTIPLE || props.variant === _constants.Variants.TAG;
    }

    /**
     * Determines if the query is included in the component value.
     * @param {Object} props - The component props.
     * @param {string} query - The query value.
     * @return {boolean} - True if the query is contained within the component value.
     */

  }, {
    key: 'includes',
    value: function includes(props, query) {
      if (query.trim().length === 0) {
        return false;
      }
      return (props.value || []).indexOf(query) > -1;
    }

    /**
     * Determines whether the search input should be hidden.
     * @param {Object} props - The component props;
     * @param {Object} state - The component state;
     * @return {Boolean} - True if the search input should be hidden.
     */

  }, {
    key: 'shouldHideSearch',
    value: function shouldHideSearch(props, state) {
      if (FrameUtil.allowsMultipleSelections(props)) {
        return !state.isFocused && props.value && props.value.length > 0;
      }
      return false;
    }

    /**
     * Determines whether the dropdown should be positioned.
     * @param {Object} previousState - The previous component state.
     * @param {Object} currentState - The current component state.
     * @param {ReactNode} dropdown - The component dropdown.
     * @return {boolean} - True if the dropdown should be positioned.
     */

  }, {
    key: 'shouldPositionDropdown',
    value: function shouldPositionDropdown(previousState, currentState, dropdown) {
      if (!currentState.isOpen) {
        return false;
      }

      var _dropdown$getBounding2 = dropdown.getBoundingClientRect(),
          bottom = _dropdown$getBounding2.bottom;

      return previousState.isOpen === false || bottom > window.innerHeight;
    }

    /**
     * Determines whether the option should be added on blur.
     * @param {Object} props - The component props.
     * @param {Object} state - The component state;
     * @return {boolean} - True if the option should be added.
     */

  }, {
    key: 'shouldAddOptionOnBlur',
    value: function shouldAddOptionOnBlur(props, state) {
      var onSelect = props.onSelect,
          value = props.value,
          variant = props.variant;
      var hasSearchChanged = state.hasSearchChanged,
          searchValue = state.searchValue;


      if ((variant === _constants.Variants.TAG || variant === _constants.Variants.COMBOBOX) && (variant !== _constants.Variants.TAG || searchValue.trim().length > 0) && hasSearchChanged && onSelect && (variant !== _constants.Variants.TAG || !FrameUtil.includes(props, searchValue)) && (variant !== _constants.Variants.COMBOBOX || value !== searchValue)) {
        return true;
      }
      return false;
    }

    /**
     * Determines the variant appropriate container tab index.
     * @param {Object} props - The component props.
     * @return {string} - A tab index.
     */

  }, {
    key: 'tabIndex',
    value: function tabIndex(props) {
      if (props.variant === _constants.Variants.DEFAULT && !props.disabled) {
        return '0';
      }
      return '-1';
    }
  }]);

  return FrameUtil;
}();

exports.default = FrameUtil;