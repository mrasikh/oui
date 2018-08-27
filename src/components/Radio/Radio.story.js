import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Radio from './index.js';

const stories = storiesOf('Radio', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('default', withInfo()(() => {
    return (
      <Radio
        testSection={ text('testSection', 'test-radio') }
        name={ text('name', 'this is a radio') }
        label={ text('label', 'this is a radio') }
      />
    );
  }))
  .add('with labelWeight prop', withInfo()(() => {
    return (
      <Radio
        testSection={ text('testSection', 'test-radio') }
        name={ text('name', 'this is a radio') }
        label={ text('label', 'this is a radio') }
        labelWeight={ select('labelWeight', ['light', 'normal', 'bold'], 'bold') }
      />
    );
  }));
