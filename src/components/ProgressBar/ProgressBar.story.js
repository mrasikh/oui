import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import ProgressBar from '../ProgressBar';

const stories = storiesOf('ProgressBar', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('states of pb', withInfo()(() => {
    return (
      <ProgressBar
        max={ number('max', 100) }
        min={ number('min', 0) }
        progress={ number('progress', 60) }
        topLabel={ text('topLabel', 'hola esto es un label') }
        leftLabel={ text('leftLabel', 'Allocated traffic') }
        rightLabel={ text('rightLabel', 'Available traffic') }
      />);
  }));
