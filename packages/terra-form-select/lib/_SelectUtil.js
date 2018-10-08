'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./_constants');

var _MenuUtil = require('./_MenuUtil');

var _MenuUtil2 = _interopRequireDefault(_MenuUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelectUtil = function () {
  function SelectUtil() {
    _classCallCheck(this, SelectUtil);
  }

  _createClass(SelectUtil, null, [{
    key: 'defaultValue',

    /**
     * Determines the default value of the select.
     * @param {Object} props - The component props.
     * @return {array|number|string|null} - The default value. Returns null for controlled components.
     */
    value: function defaultValue(props) {
      var defaultValue = props.defaultValue,
          value = props.value;


      if (value !== undefined) {
        return null;
      }if (SelectUtil.allowsMultipleSelections(props)) {
        // Flatten allows converting a string default into an array.
        return defaultValue ? [defaultValue].flatten() : [];
      }
      return props.defaultValue || '';
    }

    /**
     * Determines the value resulting from the removal of an option.
     * @param {Object} props - The component props.
     * @param {Object} state - The component state.
     * @param {number|string} value - The value to be removed.
     * @return {array} - The value resulting from the removal of an option.
     */

  }, {
    key: 'deselect',
    value: function deselect(props, state, value) {
      return SelectUtil.value(props, state).filter(function (option) {
        return option !== value;
      });
    }

    /**
     * Finds the option matching the requested value.
     * @param {Object} props - The component props.
     * @param {Object} state - The component state.
     * @param {string} value - The option value.
     * @return {ReactNode|undefined} - The option. Returns undefined if not found.
     */

  }, {
    key: 'findByValue',
    value: function findByValue(props, state, value) {
      return _MenuUtil2.default.findByValue(props.children, value) || _MenuUtil2.default.findByValue(state.tags, value);
    }

    /**
     * Determines whether the variant allows multiple selections.
     * @param {Object} props - The component props.
     * @return {boolean} - True if the variant allows multiple selections.
     */

  }, {
    key: 'allowsMultipleSelections',
    value: function allowsMultipleSelections(props) {
      return props.variant === _constants.Variants.MULTIPLE || props.variant === _constants.Variants.TAG;
    }

    /**
     * Determines the value resulting from the selection of an option.
     * @param {Object} props - The component props.
     * @param {Object} state - The component state.
     * @param {number|string} value - The selected option value.
     * @return {array|number|string} - The value resulting from the selection of an option
     */

  }, {
    key: 'select',
    value: function select(props, state, value) {
      if (SelectUtil.allowsMultipleSelections(props)) {
        return [].concat(_toConsumableArray(SelectUtil.value(props, state)), [value]);
      }
      return value;
    }

    /**
     * Determines the controlled or uncontrolled value of the select.
     * @param {Object} props - The component props.
     * @param {Object} state - The component state.
     * @return {array|number|string|null} - The select value.
     */

  }, {
    key: 'value',
    value: function value(props, state) {
      return props.value === undefined ? state.value : props.value;
    }

    /**
     * Determines the display of the value.
     * @param {Object} props - The component props.
     * @param {string|number} value - The option value.
     * @return {string} - The display of the option.
     */

  }, {
    key: 'valueDisplay',
    value: function valueDisplay(props, value) {
      var option = _MenuUtil2.default.findByValue(props.children, value);
      return option ? option.props.display : value;
    }
  }]);

  return SelectUtil;
}();

exports.default = SelectUtil;