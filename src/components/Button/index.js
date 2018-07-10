import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

const Button = ({
  ariaLabel,
  isSubmit = false,
  children,
  isActive,
  isDisabled = false,
  onBlur,
  onClick,
  size,
  style,
  testSection,
  width = 'default',
}) => {
  const buttonClassNames = classNames({
    'oui-button': true,
    [`oui-button--${style}`]: style,
    [`oui-button--${size}`]: size,
    [`oui-button--${width}`]: width,
    ['is-active']: isActive,
  });

  const type = isSubmit ? 'submit' : 'button';

  if (!onClick) {
    return (
      <div
        data-oui-component={ true }
        className={ buttonClassNames }
        disabled={ isDisabled }
        onBlur={ onBlur }
        data-test-section={ testSection }>
        { children }
      </div>
    );
  }

  return (
    <button
      data-oui-component={ true }
      className={ buttonClassNames }
      disabled={ isDisabled }
      type={ type }
      onBlur={ onBlur }
      onClick={ onClick }
      data-test-section={ testSection }
      aria-label={ ariaLabel }>
      { children }
    </button>
  );
};

Button.propTypes = {
  /** Describes buttons that have an icon but no text */
  ariaLabel: PropTypes.string,
  /** Text within the button */
  children: PropTypes.node.isRequired,
  /** Render button with active state */
  isActive: PropTypes.bool,
  /** Prevent users from interacting with the button */
  isDisabled: PropTypes.bool,
  /** Make the button act as a submit button */
  isSubmit: PropTypes.bool,
  /** Function that fires when the button loses focus */
  onBlur: PropTypes.func,
  /** Function that fires when the button is clicked on */
  onClick: PropTypes.func,
  /** Various height and width options */
  size: PropTypes.oneOf([
    'tiny',
    'small',
    'large',
    'narrow',
    'tight',
  ]),
  /** Various color options */
  style: PropTypes.oneOf([
    'highlight',
    'danger',
    'danger-outline',
    'outline',
    'outline-reverse',
    'plain',
    'toggle',
    'underline',
    'unstyled',
  ]),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** Various height and width options */
  width: PropTypes.oneOf([
    'default',
    'full',
  ]),
};

Button.defaultProps = {
  onBlur: () => {},
  onClick: () => {},
};

Button.displayName = 'Button';

export default Button;
