import React from 'react';
import Select from '../../../Select';

class ControlledSearch extends React.Component {
  constructor() {
    super();

    this.state = { value: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
  }

  handleChange(value) {
    debugger;
    this.setState({ value });
  }

  handleSearchValueChange(value) {
    debugger;
    const searchValue = event.target.value;

    if (['a', 'b', 'c', 'abc', '1', '2', '3'].includes(searchValue)) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <Select
        id="search"
        onChange={this.handleChange}
        placeholder="Select a color"
        shouldSearchValueChange={this.handleSearchValueChange}
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
