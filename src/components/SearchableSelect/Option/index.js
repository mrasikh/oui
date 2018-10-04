import PropTypes from 'prop-types';
import React from 'react';
import Dropdown from '../../Dropdown';

const SearchableSelectOption = ({
  isSelected,
  item,
  onChange,
  value,
}) => {
  function onClick() {
    onChange(value);
  }
  return (
    <Dropdown.ListItem hideOnClick={ true }>
      <Dropdown.BlockLink isLink={ !isSelected } onClick={ onClick } >
        { item }
      </Dropdown.BlockLink>
    </Dropdown.ListItem>
  );
};

SearchableSelectOption.propTypes = {
  isSelected: PropTypes.bool,
  /**
   * React element which will bbe rendered as select option.
   */
  item: PropTypes.node.isRequired,
  /**
   * Function that is called when user selects another item.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Value of this select item.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
};

SearchableSelectOption.defaultProps = {
  isSelected: false,
};

export default SearchableSelectOption;
