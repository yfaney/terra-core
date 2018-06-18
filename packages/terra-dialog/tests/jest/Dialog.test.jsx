import React from 'react';
import intlContexts from './intl-context-setup';
import Dialog from '../../src/Dialog';

describe('Dialog', () => {
  const defaultRender = (
    <Dialog
      header="Header Content"
      footer="Footer Content"
      scrollRefCallback={jest.fn()}
    >
      some body content
    </Dialog>
  );

  // Snapshot Test
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  // Structure Tests
  it('should have the class dialog', () => {
    const wrapper = shallow(defaultRender, intlContexts.shallowContext);
    expect(wrapper.prop('className')).toContain('dialog');
  });

  it('should render a Dialog with merged attributes', () => {
    const wrapper = shallow(<Dialog header="Header Content" footer="Footer Content" className="TestClass">some body content</Dialog>, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Dialog with props - isStyledFooter', () => {
    const wrapper = shallow(<Dialog header="Header Content" footer="Footer Content" isStyledFooter>some body content</Dialog>, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Dialog with props - onClose', () => {
    const wrapper = shallow(<Dialog header="Header Content" footer="Footer Content" onClose={jest.fn()}>some body content</Dialog>, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
});

it('throws error on missing locale prop in Base', () => {
  try {
    render(<Dialog header="Header Content" footer="Footer Content" />);
  } catch (e) {
    expect(e.message).toContain('add locale prop to Base component');
  }
});
