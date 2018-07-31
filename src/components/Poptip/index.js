import React from 'react';
import PropTypes from 'prop-types';
import { withState } from 'recompose';
import { waitForSelector } from '../../utils/poll';

import { Tooltip } from 'react-tippy';

/**
 * Displays help text when hovering on an element.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
@withState('bodyDefined', 'setBodyDefined', !!document.body)
export default class Poptip extends React.Component {
  constructor(props) {
    super(props);
    // Set the bodyDefined prop to true when the body is ready
    waitForSelector('body').then((documentBody) => props.setBodyDefined(!!documentBody)); // eslint-disable-line react/prop-types
  }

  static displayName = 'Poptip';

  static propTypes = {
    /** Content that, when hovered on, makes the Poptip appear */
    children: PropTypes.node.isRequired,
    /** content could be a node of a string */
    content: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string,
    ]).isRequired,
    /** disable value | default => false */
    disable: PropTypes.bool,
    /** should the poptip content be animated | default => true */
    isAnimated: PropTypes.bool,
    /** position value options | default => top */
    position: PropTypes.oneOf([
      'top',
      'bottom',
      'left',
      'right',
    ]),
    /** background color | default => dark */
    theme: PropTypes.oneOf([
      'dark',
      'light',
      'transparent',
    ]),
    /** trigger value options | default => mouseenter focus */
    trigger: PropTypes.oneOf([
      'mouseenter',
      'focus',
      'click',
      'manual',
    ]),
  };

  // trigger prop left out as Trigger default, 'mouseenter focus', will be used
  static defaultProps = {
    disable: false,
    isAnimated: true,
    position: 'top',
    theme: 'dark',
  };

  renderPoptip = () => {
    const {
      children,
      content,
      disable,
      isAnimated,
      position,
      trigger,
      theme,
    } = this.props;

    return (
      <Tooltip
        arrow={ true }
        disabled={ disable }
        { ...(!isAnimated ? { duration: 0 } : {}) }
        html={ <div className="force-break">{content}</div> }
        position={ position }
        theme={ theme }
        trigger={ trigger }>
        <div>{ children }</div>
      </Tooltip>
    );
  };

  render() {
    const { bodyDefined } = this.props; // eslint-disable-line react/prop-types
    return bodyDefined ? this.renderPoptip() : null;
  }
}

