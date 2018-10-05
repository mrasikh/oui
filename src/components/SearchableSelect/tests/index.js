import React from 'react';
import { mount } from 'enzyme';

import SearchableSelect from '../index';
import Input from '../../Input';
import Dropdown from '../../Dropdown';
import SearchableSelectOption from '../Option';

describe('components/SearchableSearch', function() {
  let component;
  let onChangeSpy;

  const items = [
    {
      selectOption: React.createElement('div', {}, 'cat'),
      value: 'cat',
    },
    {
      selectOption: React.createElement('div', {}, 'dog'),
      value: 'dog',
    },
    {
      selectOption: React.createElement('div', {}, 'bear'),
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
      expect(component.find('[data-test-section="searchable-select"]').find('[style]').props().style.width).toEqual(150);
      expect(component.find('DropdownContents').prop('minWidth')).toEqual(150);
    });

    it('should render all items in dropdown', function() {
      component = mount(
        <SearchableSelect items={ items } placeholder="type to search" minDropdownWidth={ 150 } value="cat" />
      );
      const activator = component.find('[data-test-section="searchable-select"]');
      activator.simulate('click');
      const listItems = component.find(SearchableSelectOption);
      expect(listItems).toHaveLength(3);

      const item1 = listItems.at(0);
      expect(item1.text()).toContain('cat');
      expect(item1.props().isSelected).toEqual(true);

      const item2 = listItems.at(1);
      expect(item2.text()).toContain('dog');
      expect(item2.props().isSelected).toEqual(false);

      const item3 = listItems.at(2);
      expect(item3.text()).toContain('bear');
      expect(item3.props().isSelected).toEqual(false);
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

    it('should update the state when typed in search field', function() {
      component = mount(
        <SearchableSelect items={ items } placeholder="type to search" />
      );
      const activator = component.find('[data-test-section="searchable-select"]');
      activator.simulate('click');
      expect(component.find(SearchableSelectOption)).toHaveLength(3);

      component.find('[data-test-section="searchableSelectInput"]').simulate('change', { target: { value: 'a' }});
      expect(component.state().searchWord).toEqual('a');
      expect(component.find(SearchableSelectOption)).toHaveLength(2);

      expect(component.find(SearchableSelectOption).at(0).text()).toContain('cat');
      expect(component.find(SearchableSelectOption).at(1).text()).toContain('bear');
    });

    it('should trim the list when `maxResult` is provided', function() {
      component = mount(
        <SearchableSelect items={ items } placeholder="type to search" maxResults={1} />
      );
      const activator = component.find('[data-test-section="searchable-select"]');
      activator.simulate('click');
      expect(component.find(SearchableSelectOption)).toHaveLength(1);
    });

    it('should render error class and display error note when `displayError` is true', function() {
      component = mount(
        <SearchableSelect items={ items } placeholder="type to search" errorNote="foo error" displayError={true} />
      );
      expect(component.find('[data-test-section="searchable-select"]').hasClass('oui-form-bad-news')).toBe(true);
      expect(component.find('[data-test-section="searchable-select-error-note"]').text()).toEqual('foo error');
    });

    it('should not render error class and display error note when `displayError` is false', function() {
      component = mount(
        <SearchableSelect items={ items } placeholder="type to search" errorNote="foo error" displayError={false} />
      );
      expect(component.find('[data-test-section="searchable-select"]').hasClass('oui-form-bad-news')).toBe(false);
      expect(component.find('[data-test-section="searchable-select-error-note"]').exists()).toBe(false);
    });
  });
});
