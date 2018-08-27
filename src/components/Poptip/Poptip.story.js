import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Poptip from './index.js';
import Button from '../Button';

const stories = storiesOf('Poptip', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      <div className="flexboxCenter">
        {story()}
      </div>
    </div>
  ));

stories
  .add('basic poptip', withInfo()(() => (
    <Poptip
      trigger='mouseenter'
      content="Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!">
      <Button width="default">
        Default Poptip
      </Button>
    </Poptip>
  )))
  .add('poptip to the right', withInfo()(() => (
    <Poptip
      trigger='mouseenter'
      content="Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"
      position='right'>
      <Button style="unstyled" width="default">
        <a>Poptip on the right</a>
      </Button>
    </Poptip>
  )))
  .add('poptip light theme', withInfo()(() => (
    <Poptip
      trigger='click'
      content="Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"
      theme='light'>
      <Button style="unstyled" width="default">
        <a>Click Poptip, light theme</a>
      </Button>
    </Poptip>
  )))
  .add('poptip light theme on the right', withInfo()(() => (
    <Poptip
      trigger='click'
      content="Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"
      theme='light'
      position='right'>
      <Button style="unstyled" width="default">
        <a>Click Poptip, light theme, on the right</a>
      </Button>
    </Poptip>
  )))
  .add('Customizable with knobs', withInfo()(() => (
    <Poptip
      content={ 'Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!' }
      disable={ boolean('disable', false) }
      isAnimated={ boolean('isAnimated', true) }
      position={ select('position', ['top', 'right', 'bottom', 'left'], 'top') }
      theme={ select('theme', ['dark', 'light', 'transparent'], 'dark') }
      trigger={ select('trigger', ['mouseenter', 'focus', 'click', 'manual'], 'mouseenter') }>
      <Button width="default">
        Customizable Poptip
      </Button>
    </Poptip>
  )))
  .add('basic poptip with delay', withInfo()(() => (
    <Poptip
      trigger='mouseenter'
      delay={ 1000 }
      content="Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!">
      <Button width="default">
        Default Poptip
      </Button>
    </Poptip>
  )));
