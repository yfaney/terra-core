import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node.isRequired,
  /**
   * Function callback for the ref of the thead.
   */
  refCallback: PropTypes.func,
};

const TableHeader = ({
  children,
  refCallback,
  ...customProps
}) => {
  let childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 16) {
    // eslint-disable-next-line no-console
    console.log(`Number of Columns are ${childrenArray.length}. This is more than columns limit`);
    childrenArray = childrenArray.slice(0, 16);
  }

  return (
    <thead {...customProps} ref={refCallback}>
      <tr>
        {childrenArray}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = propTypes;

export default TableHeader;
