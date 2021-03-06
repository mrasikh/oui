import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Textarea from './index.js';

const stories = storiesOf('Textarea', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('textarea with knobs', withInfo()(() => {
    return (
      <div>
        <Textarea
          isDisabled={ boolean('isDisabled', false) }
          defaultValue='Delete this default value and see the placeholder'
          placeholder={ text('placeHolder', 'Enter a comment') }
          onBlur={ action('Textarea: onBlur') }
          onChange={ action('Textarea: onChange') }
          onFocus={ action('Textarea: onFocus') }
          onInput={ action('Textarea: onInput') }
          onKeyDown={ action('Textarea: onKeyDown') }
        />
      </div>);
  })).add('With label and note', () => {
    return (
      <Textarea
        label="Field label"
        note="A short description or note about this field."
        placeholder="Just a placeholder"
        type="text"
      />);
  }).add('Error state', () => {
    return (
      <Textarea
        label="Field label"
        displayError={ true }
        note="A short description or note about this field."
        placeholder="Just a placeholder"
        type="text"
      />);
  });

