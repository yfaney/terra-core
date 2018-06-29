import React from 'react';
import PropTypes from 'prop-types';
import ListSectionHeader from './ListSectionHeader';
import ListItem from './ListItem';

const propTypes = {
  /**
   * The header content to be placed for display in a section.
   */
  headerContent: PropTypes.string,
  /**
   * The header content to be placed for display in a section.
   */
  sectionIndex: PropTypes.number,
  /**
   * The list of elements to be placed for display in a section.
   */
  listItems: PropTypes.array,
};

const defaultProps = {
  headerContent: '',
  sectionIndex: 0,
  listItems: [],
};

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: true };
    this.handleClick = this.handleClick.bind(this);
    this.generateHeader = this.generateHeader.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  generateHeader() {
    return (<ListItem
      content={
        <ListSectionHeader
          id={`Section-${this.props.sectionIndex + 1}`}
          title={this.props.headerContent}
          isOpen={this.state.isOpen}
          onClick={this.handleClick}
        />}
      key={this.props.headerContent}
    />);
  }

  render() {
    if (this.state.isOpen) {
      return (
        <React.Fragment>
          {this.generateHeader()}
          {this.props.listItems}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {this.generateHeader()}
      </React.Fragment>
    );
  }
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
export default Section;
