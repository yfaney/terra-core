import React from 'react';

import Radio from '../../../../Radio';
import RadioField from '../../../../RadioField';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({ selectedAnswer: e.currentTarget.value });
  }

  render() {
    return (
      <RadioField
        id="testing-radio-field"
        legend="Which Department do you work for?"
        help="Your work falls inline with one of these departments"
        isInvalid={this.state.selectedAnswer === undefined}
        error="One must be selected"
        isInline
        required
      >
        {radio => (
          <React.Fragment>
            <Radio id="ux-dept" name="dept" labelText="UX/Interaction Design" onChange={this.handleOnChange} value="ux" inputAttrs={{ 'aria-describedby': radio.ariaDescribedby }} />
            <Radio id="magazine-dept" name="dept" labelText="Magazine Advertisements" onChange={this.handleOnChange} value="magazine" />
            <Radio id="website-dept" name="dept" labelText="Website Advertisements" onChange={this.handleOnChange} value="website" />
          </React.Fragment>
        )}
      </RadioField>
    );
  }
}
