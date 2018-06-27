import React from 'react';

import Radio from '../../../../Radio';
import RadioField from '../../../../RadioField';

const exampleRadioField = () => (
  <RadioField legend="Desired Department" showOptional>
    <RadioField.Radio id="ux-dept" name="dept[]" labelText="UX/Interaction Design" value="ux" />
    <RadioField.Radio id="magazine-dept" name="dept[]" labelText="Magazine Advertisements" value="magazine" />
    <RadioField.Radio id="website-dept" name="dept[]" labelText="Website Advertisements" value="website" />
    <RadioField.Radio id="events-dept" name="dept[]" labelText="Event Promotions" value="events" inputAttrs={{ title: 'dog', 'aria-describedby': 'cat' }} />
  </RadioField>
);

export default exampleRadioField;
