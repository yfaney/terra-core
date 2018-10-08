'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a validated max count for selection. Validates the max count prop, and if undefined
 * returns a max of the count of children.
 */
var validatedMaxCountSelection = function validatedMaxCountSelection(rows, maxSelectionCount) {
  if (maxSelectionCount !== undefined) {
    return maxSelectionCount;
  }
  return _react2.default.Children.count(rows);
};

/**
 * Returns the index of the first selected row for SingleSelectableRows.
 * To be used in the constructor, to set initial state.
 */
var initialSingleSelectRowIndex = function initialSingleSelectRowIndex(rows) {
  if (!rows || !rows.length) {
    return null;
  }

  for (var i = 0; i < rows.length; i += 1) {
    if (rows[i].props.isSelected) {
      return i;
    }
  }
  return -1;
};

/**
 * Returns the indexes of the selected rows for MultiSelectableRows.
 * To be used in the constructor, to set initial state.
 */
var initialMultiSelectRowIndexes = function initialMultiSelectRowIndexes(rows, maxSelectionCount) {
  var childArray = _react2.default.Children.toArray(rows);

  // Find the rows which are selected and are selectable
  var selectedIndexes = [];
  var validatedMaxSelectionCount = validatedMaxCountSelection(childArray, maxSelectionCount);
  for (var i = 0; i < childArray.length; i += 1) {
    if (childArray[i].props.isSelected) {
      selectedIndexes.push(i);

      if (selectedIndexes.length >= validatedMaxSelectionCount) {
        break;
      }
    }
  }
  return selectedIndexes;
};

/**
 * Returns a new array of the selected indexes, updated with the newIndex being added or removed
 * from the existing.
 */
var updatedMultiSelectedIndexes = function updatedMultiSelectedIndexes(currentIndexes, newIndex) {
  var newIndexes = [];
  if (currentIndexes && currentIndexes.length) {
    if (currentIndexes.indexOf(newIndex) >= 0) {
      newIndexes = currentIndexes.slice();
      newIndexes.splice(newIndexes.indexOf(newIndex), 1);
    } else {
      newIndexes = currentIndexes.concat([newIndex]);
    }
  } else {
    newIndexes.push(newIndex);
  }
  return newIndexes;
};

/**
 * Returns if the selected row index is already selected for SingleSelectableRows.
 */
var shouldHandleSingleSelectRowSelection = function shouldHandleSingleSelectRowSelection(currentIndex, newIndex) {
  return currentIndex !== newIndex;
};

/**
 * Returns whether not the new index can be added if it adheres to the maxSelectionCount.
 * Or if the index is already present, and can be removed.
 */
var shouldHandleMultiSelectRowSelection = function shouldHandleMultiSelectRowSelection(children, maxSelectionCount, currentIndexes, newIndex) {
  if (currentIndexes.length < validatedMaxCountSelection(children, maxSelectionCount)) {
    return true;
  }
  return currentIndexes.indexOf(newIndex) >= 0;
};

/**
 * The KEYCODES supported by seletectable table components.
 */
var KEYCODES = {
  ENTER: 13,
  SPACE: 32
};

var SelectableUtils = {
  validatedMaxCountSelection: validatedMaxCountSelection,
  initialSingleSelectRowIndex: initialSingleSelectRowIndex,
  initialMultiSelectRowIndexes: initialMultiSelectRowIndexes,
  updatedMultiSelectedIndexes: updatedMultiSelectedIndexes,
  shouldHandleSingleSelectRowSelection: shouldHandleSingleSelectRowSelection,
  shouldHandleMultiSelectRowSelection: shouldHandleMultiSelectRowSelection,
  KEYCODES: KEYCODES
};

exports.default = SelectableUtils;