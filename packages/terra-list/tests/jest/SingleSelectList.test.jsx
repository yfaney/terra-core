import React from 'react';
import SingleSelectList from '../../src/SingleSelectList';

const item1 = <SingleSelectList.Item content={<p>text1</p>} className="stuff1" key="123" />;
const item2 = <SingleSelectList.Item content={<p>text2</p>} className="stuff2" key="124" />;
const item3 = <SingleSelectList.Item content={<p>text3</p>} className="stuff3" key="125" />;
const item4 = <SingleSelectList.Item content={<p>text4</p>} className="stuff4" key="126" />;
const item5 = <SingleSelectList.Item content={<p>text5</p>} className="stuff5" key="127" />;

// Snapshot Tests
it('should render a default component', () => {
  const compactTile = shallow(<SingleSelectList />);
  expect(compactTile).toMatchSnapshot();
});

it('should render with items', () => {
  const items = [item1, item2, item3, item4, item5];
  const singleSelect = shallow(<SingleSelectList>{items}</SingleSelectList>);
  expect(singleSelect).toMatchSnapshot();
});

it('should render with a selectable and non-selectable item', () => {
  const item6 = <SingleSelectList.Item key="124" isSelectable={false} />;
  const items = [item1, item6];
  const singleSelect = shallow(<SingleSelectList>{items}</SingleSelectList>);
  expect(singleSelect).toMatchSnapshot();
});

it('should render with isDivided', () => {
  const items = [item1];
  const singleSelect = shallow(<SingleSelectList isDivided>{items}</SingleSelectList>);
  expect(singleSelect).toMatchSnapshot();
});

it('should render with hasChevrons', () => {
  const items = [item1];
  const singleSelect = shallow(<SingleSelectList hasChevrons>{items}</SingleSelectList>);
  expect(singleSelect).toMatchSnapshot();
});

it('should render with sections', () => {
  const items = [item1, item2, item3, item4, item5];
  const section = (
    <SingleSelectList.Section
      headerContent="Header1"
      listItems={items}
    />
  );
  const listSections = shallow(<SingleSelectList hasSections>{section}</SingleSelectList>);
  expect(listSections).toMatchSnapshot();
});

// Event Tests
it('should select an item', () => {
  const items = [item1, item2, item3, item4, item5];
  const singleSelect = mount(<SingleSelectList>{items}</SingleSelectList>);

  singleSelect.find('.stuff1').first().simulate('click', { preventDefault() {} });
  expect(singleSelect).toMatchSnapshot();

  singleSelect.find('.stuff2').first().simulate('click', { preventDefault() {} });
  expect(singleSelect).toMatchSnapshot();

  singleSelect.find('.stuff3').first().simulate('click', { preventDefault() {} });
  expect(singleSelect).toMatchSnapshot();

  singleSelect.find('.stuff1').first().simulate('click', { preventDefault() {} });
  expect(singleSelect).toMatchSnapshot();
});

it('should select an item across multiple sections', () => {
  const sectionItems1 = [item1, item2, item3];
  const sectionItems2 = [item4, item5];
  const singleSelectList = (
    <SingleSelectList hasSections>
      <SingleSelectList.Section
        headerContent="Header1"
        listItems={sectionItems1}
      />
      <SingleSelectList.Section
        headerContent="Header2"
        listItems={sectionItems2}
      />
    </SingleSelectList>
  );

  const singleSelect = mount(singleSelectList);

  singleSelect.find('.stuff1').first().simulate('click', { preventDefault() {} });
  expect(singleSelect).toMatchSnapshot();

  singleSelect.find('.stuff2').first().simulate('click', { preventDefault() {} });
  expect(singleSelect).toMatchSnapshot();

  singleSelect.find('.stuff3').first().simulate('click', { preventDefault() {} });
  expect(singleSelect).toMatchSnapshot();

  singleSelect.find('.stuff1').first().simulate('click', { preventDefault() {} });
  expect(singleSelect).toMatchSnapshot();
});

it('should collapse the section list when clicked on section.', () => {
  const sectionItems1 = [item1, item2, item3];
  const sectionItems2 = [item4, item5];
  const singleSelectList = (
    <SingleSelectList hasSections>
      <SingleSelectList.Section
        headerContent="Header1"
        listItems={sectionItems1}
      />
      <SingleSelectList.Section
        headerContent="Header2"
        listItems={sectionItems2}
      />
    </SingleSelectList>
  );

  const singleSelect = mount(singleSelectList);

  singleSelect.find('#Section-1').first().simulate('click', { preventDefault() {} });
  expect(singleSelect).toMatchSnapshot();
});

it('should mount with no items', () => {
  const singleSelect = mount(<SingleSelectList />);
  expect(singleSelect).toMatchSnapshot();
});


it('should mount with one items', () => {
  const singleSelect = mount(<SingleSelectList>{item1}</SingleSelectList>);
  expect(singleSelect).toMatchSnapshot();
});

it('should mount with no items with section headers', () => {
  const singleSelect = mount(<SingleSelectList hasSections>
    <SingleSelectList.Section headerContent="Header1" />
  </SingleSelectList>);
  expect(singleSelect).toMatchSnapshot();
});


it('should mount with one items with Section Headers', () => {
  const singleSelect = mount(<SingleSelectList hasSections>
    <SingleSelectList.Section headerContent="Header1" listItems={[item1]} />
  </SingleSelectList>);
  expect(singleSelect).toMatchSnapshot();
});
