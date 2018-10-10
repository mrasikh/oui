import PropTypes from 'prop-types';
import React from 'react';

import Dropdown from '../../Dropdown';

class SelectOption extends React.Component {
    static propTypes = {
      /**
       * Description of select item.
       */
      description: PropTypes.string,
      /** Toggle dropdown open/closed */
      handleToggle: PropTypes.func,
      /**
       * Whether or not item has been selected or not.
       */
      isSelected: PropTypes.bool.isRequired,
      /**
       * Label of select item.
       */
      label: PropTypes.node.isRequired,
      /**
       * Function that is called when user selects another item.
       */
      onChange: PropTypes.func.isRequired,
      /**
       * Value of select item.
       */
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
    };

    onClick = () => {
      this.props.onChange(this.props.value);
    };

    render() {
      const { isSelected, label, description, value, handleToggle } = this.props;
      return (
        <Dropdown.ListItem hideOnClick={ true } handleToggle={ handleToggle }>
          <Dropdown.BlockLink
            isLink={ !isSelected }
            onClick={ this.onClick }
            testSection={ 'dropdown-block-link-' + value }>
            { label }
            { description && (
              <div className="micro muted">
                { description }
              </div>
            )}
          </Dropdown.BlockLink>
        </Dropdown.ListItem>
      );
    }
}

SelectOption.defaultProps = {
  description: '',
  handleToggle: () => {},
};

export default SelectOption;
