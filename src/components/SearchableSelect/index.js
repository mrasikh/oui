import PropTypes from 'prop-types';
import React from 'react';

import Dropdown from '../Dropdown';
import Input from '../Input';
import SearchableSelectOption from './Option';

function filterIteams(items, searchKey, maxResult) {
  let result = [];
  let foundCount = 0;
  if (!searchKey) {return items;}
  items.map(function(item) {
    if (foundCount < maxResult && item.value.includes(searchKey)) {
      result.push(item);
      foundCount++;
    }
  });
  return result;
}

class SearchableSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWord: '',
    };
  }

  onKeyPress = (event) => {
    this.setState({searchWord: event.target.value});
  };

  onSelect = (value) => {
    this.setState({searchWord: value});
    this.props.onChange(value);
  };

  render() {
    const {
      displayError,
      dropdownDirection,
      isDisabled,
      items,
      maxResults,
      minDropdownWidth,
      placeholder,
      placement,
      testSection,
      value,
    } = this.props;
    const onSelect = this.onSelect;

    let selectedItem = {};
    this.props.items.forEach(item => {
      if (item.value === value) {
        selectedItem = item;
      }
    });

    return (
      <Dropdown
        isDisabled={ isDisabled } testSection={ testSection } activator={ (
          <div style={{width: minDropdownWidth}} data-test-section="searchable-select">
            <Input
              type="text"
              isDisabled={ isDisabled }
              isOptional={ false }
              placeholder={ placeholder }
              value={ selectedItem.value || this.state.searchWord }
              onChange={ this.onKeyPress }
              displayError={ displayError }
            />
          </div>
        ) }
        placement={ placement }
        width={ minDropdownWidth }>
        <Dropdown.Contents minWidth={ minDropdownWidth } direction={ dropdownDirection } >
          {
            filterIteams(items, this.state.searchWord, maxResults).map(function(item) {
              return (
                <SearchableSelectOption
                  key={ item.value }
                  value={ item.value }
                  item={ item.selectOption }
                  onChange={ onSelect }
                  isSelected={ item.value === value }
                />
              );
            })
          }
        </Dropdown.Contents>
      </Dropdown>
    );
  }
}

SearchableSelect.propTypes = {
  /**
   * Show error by default.
   */
  displayError: PropTypes.bool,
  dropdownDirection: PropTypes.exact('up'),
  isDisabled: PropTypes.bool,
  /**
   * Dropdown items that can be selected from the select dropdown.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]).isRequired,
    selectOption: PropTypes.node.isRequired,
  })).isRequired,
  /**
   * Max number of items that will be shown in dropdown at a time.
   */
  maxResults: PropTypes.number,
  /**
   * Min width of dropdown and also the width of Input/search field.
   * Any valid CSS width value is acceptable.
   */
  minDropdownWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Function that is called when user selects another item.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * A placeholder text which is displayed inside input/search field.
   */
  placeholder: PropTypes.string,
  /**
   * Placement of dropdown relative to Input/search field.
   */
  placement: PropTypes.oneOf(['top-start', 'bottom-start']),
  testSection: PropTypes.string,
  /**
   * Value of currently selected item.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
};

export default SearchableSelect;
