import React from 'react';
import DialogModal from '../../src/DialogModal';

describe('DialogModal', () => {
  const defaultRender = <DialogModal />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.dialog-modal').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class dialog-modal', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('dialog-modal');
  });
});
