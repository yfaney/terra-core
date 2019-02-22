import React from 'react';
import Select from '../../../Select';

class ControlledSearch extends React.Component {
  constructor() {
    super();

    this.state = { value: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleShowSearchValue = this.handleShowSearchValue.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  handleShowSearchValue(event) {
    let searchValue;
    if (event.type === 'keydown') {
      searchValue = event.key;
    } else if (event.type === 'paste') {
      searchValue = event.clipboardData.getData('Text');
    }

    //Blacklist
    if (['a', 'b', 'c', 'abc', '1', '2', '3', '😃'].includes(searchValue)) {
      event.preventDefault();
    }

    //Whitelist
    // if (!['-', '.', 'Backspace', 'Meta', 'v', 'ArrowLeft', 'ArrowRight'].includes(searchValue) && !/^\d+$/.test(searchValue)) {
    //   event.preventDefault();
    // }
  }

  render() {
    return (
      <Select
        id="search"
        onChange={this.handleChange}
        onShowSearchValue={this.handleShowSearchValue}
        placeholder="Select a color"
        value={this.state.value}
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

export default ControlledSearch;
