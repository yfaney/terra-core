import React from 'react';

/**
 * The KEYCODES supported by seletectable table components.
 */
const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

/**
 * Returns a validated max count for selection. Validates the max count prop, and if undefined
 * returns a max of the count of children.
 */
const validatedMaxCountSelection = (rows, maxSelectionCount) => {
  if (maxSelectionCount !== undefined) {
    return maxSelectionCount;
  }
  return React.Children.count(rows);
};

/**
 * Returns the index of the first selected row for SingleSelectableRows.
 * To be used in the constructor, to set initial state.
 */
const initialSingleSelectRowIndex = (rows) => {
  if (!rows || !rows.length) {
    return null;
  }

  for (let i = 0; i < rows.length; i += 1) {
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
const initialMultiSelectRowIndexes = (rows, maxSelectionCount) => {
  const childArray = React.Children.toArray(rows);

  // Find the rows which are selected and are selectable
  const selectedIndexes = [];
  const validatedMaxSelectionCount = validatedMaxCountSelection(childArray, maxSelectionCount);
  for (let i = 0; i < childArray.length; i += 1) {
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
const updatedMultiSelectedIndexes = (currentIndexes, newIndex) => {
  let newIndexes = [];
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
const shouldHandleSingleSelectRowSelection = (currentIndex, newIndex) => currentIndex !== newIndex;

/**
 * Returns whether not the new index can be added if it adheres to the maxSelectionCount.
 * Or if the index is already present, and can be removed.
 */
const shouldHandleMultiSelectRowSelection = (children, maxSelectionCount, currentIndexes, newIndex) => {
  if (currentIndexes.length < validatedMaxCountSelection(children, maxSelectionCount)) {
    return true;
  }
  return currentIndexes.indexOf(newIndex) >= 0;
};

/**
 * Returns a wrapped onClick callback function.
 */
const wrappedOnClickForRow = (row, index, onChange) => {
  const initialOnClick = row.props.onClick;

  return (event) => {
    // The default isSelectable attribute is either undefined or true, unless the consumer specifies the row's isSelectable attribute as false.
    if (row.props.isSelectable !== false && onChange) {
      this.handleOnChange(event, index);
    }

    if (initialOnClick) {
      initialOnClick(event);
    }
  };
};

/**
 * Returns a wrapped onKeyDown callback function with enter and space keys triggering onChange.
 */
const wrappedOnKeyDownForRow = (row, index, onChange) => {
  const initialOnKeyDown = row.props.onKeyDown;

  return (event) => {
    if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
      // The default isSelectable attribute is either undefined or true, unless the consumer specifies the row's isSelectable attribute as false.
      if (row.props.isSelectable !== false && onChange) {
        onChange(event, index);
      }
    }

    if (initialOnKeyDown) {
      initialOnKeyDown(event);
    }
  };
};

/**
 * Returns an object containing accessiblity and selectable properties.
 */
const newPropsForRow = (row, index, onClick, onKeyDown, selectedIndexes, disableUnselectedRows) => {
  const isSelected = selectedIndexes.indexOf(index) >= 0;
  const newProps = { };

  // Set the isSelected attribute to false for all the rows except the rows whose index is set to state selectedIndex.
  if (isSelected !== row.props.isSelected) {
    newProps.isSelected = isSelected;
  }

  // Set the default isSelectable attribute to true, unless the consumer specifies the row isSelectable as false.
  newProps.isSelectable = true;
  if (row.props.isSelectable === false) {
    newProps.isSelectable = row.props.isSelectable;
  }

  if (disableUnselectedRows && !isSelected) {
    newProps.isSelectable = false;
  }

  // If selectable, add tabIndex on rows to navigate through keyboard tab key for selectable row and add
  // onClick and onKeyDown functions.
  if (newProps.isSelectable) {
    newProps.tabIndex = '0';
    newProps.onClick = onClick;
    newProps.onKeyDown = onKeyDown;
  }

  return newProps;
};

const SelectableUtils = {
  validatedMaxCountSelection,
  initialSingleSelectRowIndex,
  initialMultiSelectRowIndexes,
  updatedMultiSelectedIndexes,
  shouldHandleSingleSelectRowSelection,
  shouldHandleMultiSelectRowSelection,
  KEYCODES,
  wrappedOnClickForRow,
  wrappedOnKeyDownForRow,
  newPropsForRow,
};

export default SelectableUtils;
