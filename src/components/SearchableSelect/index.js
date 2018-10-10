import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { getFilteredItems } from '../../utils/filter';
import Dropdown from '../Dropdown';
import Input from '../Input';
import SelectDropdown from '../SelectDropdown';

class SearchableSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  onChange = (event) => {
    this.setState({searchTerm: event.target.value});
  };

  onSelect = (value) => {
    this.setState({searchTerm: value});
    this.props.onChange(value);
  };

  render() {
    const {
      displayError,
      dropdownDirection,
      errorNote,
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

    let SearchableSelectClasses = classNames(
      {
        ['oui-form-bad-news']: displayError,
      }
    );

    let selectedItem = {};
    this.props.items.forEach(item => {
      if (item.value === value) {
        selectedItem = item;
      }
    });

    return (
      <Dropdown
        isDisabled={ isDisabled }
        testSection={ testSection }
        placement={ placement }
        width={ minDropdownWidth }
        activator={ (
          <div style={{width: minDropdownWidth}} data-test-section="searchable-select" className={ SearchableSelectClasses }>
            {
              displayError &&
              (<div className='oui-form-note' data-test-section="searchable-select-error-note">{errorNote}</div>)
            }
            <Input
              type="text"
              isDisabled={ isDisabled }
              isOptional={ false }
              placeholder={ placeholder }
              value={ selectedItem.value || this.state.searchTerm }
              onChange={ this.onChange }
              testSection="searchableSelectInput"
            />
          </div>
        ) }>
        <Dropdown.Contents
          minWidth={ minDropdownWidth }
          direction={ dropdownDirection }>
          {
            getFilteredItems(this.state.searchTerm, items, 'value', maxResults).map(function(item) {
              return (
                <SelectDropdown.Option
                  key={ item.value }
                  value={ item.value }
                  label={ item.label }
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
  /**
   * display an error message when `displayError is set `true`,
   */
  errorNote: PropTypes.string,
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
    label: PropTypes.node.isRequired,
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
