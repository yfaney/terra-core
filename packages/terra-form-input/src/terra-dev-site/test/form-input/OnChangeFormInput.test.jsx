import React from 'react';
import Field from '../../../InputField';
import Input from '../../../Input';

class OnChangeInput extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { input: 'Default Input' };
      this.handleChangeFirst = this.handleChangeFirst.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
    }

    handleChangeFirst(event) {
        debugger;
        if (!this.handleSearchValueChange(event)) {
            return;
        }
                
        this.handleChange(event);
    }
  
    handleChange(event) {
        debugger;
      this.setState({ input: event.target.value });
    }

    handleSearchValueChange(event) {
        debugger;
        const searchValue = event.target.value;
    
        if (['a', 'b', 'c', 'abc', '1', '2', '3'].includes(searchValue)) {
          return false;
        }
    
        return true;
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
