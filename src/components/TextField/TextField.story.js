import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import TextField from './index.js';

const stories = storiesOf('TextField', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('TextField with knobs', withInfo()(() => {
    return (
      <TextField
        defaultValue={ text('defaultValue', 'some default value') }
        displayError={ boolean('displayError', false) }
        isFilter={ boolean('isFilter', false) }
        isOptional={ boolean('isOptional', false) }
        isRequired={ boolean('isRequired', false) }
        label={ text('Label', '') }
        max={ number('max', 50) }
        min={ number('min', 10) }
        note={ text('note', '') }
        onChange={ action('on change') }
        onBlur={ action('on blur') }
        onKeyDown={ action('on key press') }
        placeholder={ text('placeholder', 'just a placeholder') }
        type={ select('type', ['text', 'password', 'number', 'date', 'percent'], 'text') }
      />);
  })).add('TextField', () => {
    return (
      <TextField
        label="Field label"
        note="A short description or note about this field."
        placeholder="Just a placeholder"
        type="text"
      />);
  }).add('Percent', withInfo()(() => {
    return (
      <TextField
        placeholder="100"
        defaultValue={ text('defaultValue', '0') }
        type="percent"
        max={ number('max', 100) }
        min={ number('min', 0) }
      />);
  })).add('Error state', () => {
    return (
      <TextField
        label="Field label"
        displayError={ true }
        note="Form error note."
        placeholder="Just a placeholder"
        type="text"
      />);
  });
