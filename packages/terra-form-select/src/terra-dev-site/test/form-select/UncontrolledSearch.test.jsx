import React from 'react';
import Select from '../../../Select';

class UncontrolledSearch extends React.Component {
  constructor() {
    super();

    this.handleShowSearchValue = this.handleShowSearchValue.bind(this);
  }

  handleShowSearchValue(event) {
    let searchValue;
    if (event.type === 'keydown') {
      searchValue = event.key;
    } else if (event.type === 'paste') {
      searchValue = event.clipboardData.getData('Text');
    }

    if (['a', 'b', 'c', 'abc', '1', '2', '3', '😟'].includes(searchValue)) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <Select
        id="search"
        onShowSearchValue={this.handleShowSearchValue}
        placeholder="Select a color"
        variant="search" 
      >
        <Select.Option value="blue" display="Blue" />
        <Select.Option value="green" display="Green" />
        <Select.Option value="purple" display="Purple" />
        <Select.Option value="red" display="Red" />
        <Select.Option value="violet" display="Violet" />
    </Select>
    );
  }
}

export default UncontrolledSearch;
