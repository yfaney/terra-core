'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('terra-base/lib/baseStyles');

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _SelectableUtils = require('./SelectableUtils');

var _SelectableUtils2 = _interopRequireDefault(_SelectableUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: _propTypes2.default.node,
  /**
   * Whether or not the child list items should have a border color applied.
   */
  isDivided: _propTypes2.default.bool,
  /**
   * Whether or not unselected items should be disabled.
   * Helpful for enabling max row selection.
   */
  disableUnselectedItems: _propTypes2.default.bool,
  /**
   * Whether or not the child list items has a disclosure indicator presented.
   * The behavior is intended to be used with a single selection style list, as multi selection style list should not perform disclosures.
   */
  hasChevrons: _propTypes2.default.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: _propTypes2.default.func,
  /**
   * An array of the currectly selected indexes.
   */
  // eslint-disable-next-line react/forbid-prop-types
  selectedIndexes: _propTypes2.default.array
};

var defaultProps = {
  children: [],
  disableUnselectedItems: false,
  isDivided: false,
  hasChevrons: false,
  onChange: undefined,
  selectedIndexes: []
};

var SelectableList = function SelectableList(_ref) {
  var children = _ref.children,
      disableUnselectedItems = _ref.disableUnselectedItems,
      isDivided = _ref.isDivided,
      onChange = _ref.onChange,
      hasChevrons = _ref.hasChevrons,
      selectedIndexes = _ref.selectedIndexes,
      customProps = _objectWithoutProperties(_ref, ['children', 'disableUnselectedItems', 'isDivided', 'onChange', 'hasChevrons', 'selectedIndexes']);

  var clonedChildren = _react2.default.Children.map(children, function (child, index) {
    var wrappedOnClick = _SelectableUtils2.default.wrappedOnClickForItem(child, index, onChange);
    var wrappedOnKeyDown = _SelectableUtils2.default.wrappedOnKeyDownForItem(child, index, onChange);
    var newProps = _SelectableUtils2.default.newPropsForItem(child, index, wrappedOnClick, wrappedOnKeyDown, hasChevrons, selectedIndexes, disableUnselectedItems);
    return _react2.default.cloneElement(child, newProps);
  });

  return _react2.default.createElement(
    _List2.default,
    _extends({ isDivided: isDivided, role: 'listbox' }, customProps),
    clonedChildren
  );
};

SelectableList.propTypes = propTypes;
SelectableList.defaultProps = defaultProps;
SelectableList.Item = _List2.default.Item;
SelectableList.Utils = _SelectableUtils2.default;

exports.default = SelectableList;