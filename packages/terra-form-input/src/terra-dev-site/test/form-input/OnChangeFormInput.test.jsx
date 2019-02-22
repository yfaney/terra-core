import React from 'react';
import Field from '../../../InputField';
import Input from '../../../Input';

class OnChangeInput extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { input: '', previousValue: '' };
      this.handleChangeFirst = this.handleChangeFirst.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
    }

    handleChangeFirst(event) {
      if (!this.handleSearchValueChange(event)) {
        return;
      }
                
      this.handleChange(event);
    }
  
    handleChange(event) {
      this.setState({ input: event.target.value, previousValue: event.target.value });
    }

    handleSearchValueChange(event) {
      return !/^\d+$/.test(event.target.value);
    }
  
    render() {
      return (
        <div>
            <Input
              name="default input"
              id="default-controlled"
              value={this.state.input}
              onChange={this.handleChangeFirst}
              shouldSearchValueChange={this.handleSearchValueChange}
            />
        </div>
      );
    }
  }

export default OnChangeInput;
