import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import TableRows from './TableRows';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import TableSubheader from './TableSubheader';
import SelectableUtils from './SelectableUtils';

const propTypes = {
  /**
   * The children rows to be be passed to the component.
   */
  children: PropTypes.node,
  /**
   * Indicates if the unselected rows are disabled. This is helpful for enabling max row selection.
   */
  disableUnselectedRows: PropTypes.bool,
  /**
   * A callback function to execute when the selection state changes. The first parameter is the event. The second parameter is the selectedIndexes.
   */
  onChange: PropTypes.func,
  /**
   * The list of selected row indexes.
   */
  // eslint-disable-next-line react/forbid-prop-types
  selectedIndexes: PropTypes.array,
};

const defaultProps = {
  disableUnselectedRows: false,
  onChange: undefined,
  selectedIndexes: [],
};


const SelectableTableRows = ({
  children,
  disableUnselectedRows,
  onChange,
  selectedIndexes,
  ...customProps
}) => {
  const clonedChildRows = React.Children.map(children, (child, index) => {
    if (child && child.type !== TableHeader && child.type !== TableSubheader) {
      const wrappedOnClick = SelectableUtils.wrappedOnClickForRow(child, index, onChange);
      const wrappedOnKeyDown = SelectableUtils.wrappedOnKeyDownForRow(child, index, onChange);
      const newProps = SelectableUtils.newPropsForRow(child, index, wrappedOnClick, wrappedOnKeyDown, selectedIndexes, disableUnselectedRows);
      return React.cloneElement(child, newProps);
    }
    return row;
  });

  return (
    <TableRows {...customProps}>
      {clonedChildRows}
    </TableRows>
  );
};

SelectableTableRows.propTypes = propTypes;
SelectableTableRows.defaultProps = defaultProps;
SelectableTableRows.Row = TableRow;
SelectableTableRows.Utils = SelectableUtils;

export default SelectableTableRows;
