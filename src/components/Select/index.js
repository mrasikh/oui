import React from 'react';
import PropTypes from 'prop-types';

/**
 * Generates an `select` 
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

const Select = ({
  children,
  id,
  isDisabled,
  name,
}) => {

  return (
    <select disabled={ isDisabled } name={ name } id={ id } className="lego-select">
      { children }
    </select>
  );
};

Select.propTypes = {
  /** options elements */
  children: PropTypes.node,
  /** select id */
  id: PropTypes.string,
  /** boolean for when select is disabled */
  isDisabled: PropTypes.bool,
  /** select name */
  name: PropTypes.string,
};

Select.displayName = 'Select';

export default Select;
