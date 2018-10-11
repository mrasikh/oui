import React from 'react';
import { mount } from 'enzyme';

import SearchableSelect from '../index';
import Input from '../../Input';
import Dropdown from '../../Dropdown';
import SelectDropdown from '../../SelectDropdown';

describe('components/SearchableSearch', function() {
  let component;
  let onChangeSpy;

  const items = [
    {
      label: React.createElement('div', {}, 'cat'),
      value: 'cat',
    },
    {
      label: React.createElement('div', {}, 'dog'),
      value: 'dog',
    },
    {
      label: React.createElement('div', {}, 'bear'),
      value: 'bear',
    },
  ];

  beforeEach(function() {
    onChangeSpy = jest.fn();
  });

  describe('basic rendering', function() {
    it('should display just an Input field with a placeholder', function() {
      component = mount(<SearchableSelect items={ items } placeholder="type to search" />);
      expect(component.find(Input).exists()).toBeTruthy();
      expect(component.find(Input).props().placeholder).toEqual('type to search');
    });

    it('should set the width of activator and dropdown', function() {
      component = mount(
        <SearchableSelect items={ items } placeholder="type to search" minDropdownWidth={ 150 } />
      );
      const activator = component.find('[data-test-section="searchable-select"]');
      expect(activator.find('[style]').props().style.width).toEqual(150);

      activator.simulate('click');
      expect(component.find(Dropdown.Contents).props().minWidth).toEqual(150);
    });

    it('should render all items in dropdown', function() {
      component = mount(
        <SearchableSelect items={ items } placeholder="type to search" minDropdownWidth={ 150 } value="cat" />
      );
      const activator = component.find('[data-test-section="searchable-select"]');
      activator.simulate('click');
      const listItems = component.find(SelectDropdown.Option);
      expect(listItems).toHaveLength(3);

      listItems.forEach((item, index) => {
        expect(item.text()).toContain(items[index].value);
        expect(item.props().isSelected).toEqual(items[index].value === 'cat');
      });
    });

    it('should call onChange when another item is selected', function() {
      component = mount(
        <SearchableSelect items={ items } placeholder="type to search" onChange={ onChangeSpy } />
      );
      const activator = component.find('[data-test-section="searchable-select"]');
      activator.simulate('click');
      const newSelection = component.find(Dropdown.BlockLink).at(1);

      newSelection.simulate('click');
      expect(onChangeSpy).toHaveBeenCalled();
      expect(onChangeSpy).toHaveBeenCalledWith('dog');
    });

    it('should update the dropdown content when typed in search field', function() {
      component = mount(
        <SearchableSelect items={ items } placeholder="type to search" />
      );
      const activator = component.find('[data-test-section="searchable-select"]');
      activator.simulate('click');
      expect(component.find(SelectDropdown.Option)).toHaveLength(3);

      component.find('[data-test-section="searchableSelectInput"]').simulate('change', { target: { value: 'a' }});
      expect(component.find(SelectDropdown.Option)).toHaveLength(2);

      expect(component.find(SelectDropdown.Option).at(0).text()).toContain('cat');
      expect(component.find(SelectDropdown.Option).at(1).text()).toContain('bear');
    });

    it('should trim the list when `maxResult` is provided', function() {
      component = mount(
        <SearchableSelect items={ items } placeholder="type to search" maxResults={ 1 } />
      );
      const activator = component.find('[data-test-section="searchable-select"]');
      activator.simulate('click');
      expect(component.find(SelectDropdown.Option)).toHaveLength(1);
    });
  });
});
