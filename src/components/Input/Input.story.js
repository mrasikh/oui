import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Input from './index.js';

const stories = storiesOf('Input', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('input with knobs', withInfo()(() => {
    return (
      <Input
        defaultValue={ text('defaultValue', 'some default value') }
        displayError={ boolean('displayError', false) }
        isFilter={ boolean('isFilter', false) }
        isDropdown={ boolean('isDropdown', true) }
        isOptional={ boolean('isOptional', false) }
        label={ text('Label', '') }
        max={ number('max', 50) }
        maxLength={ number('maxLength', 250) }
        min={ number('min', 10) }
        onChange={ action('on change') }
        onBlur={ action('on blur') }
        onKeyDown={ action('on key press') }
        placeholder={ text('placeholder', 'just a placeholder') }
        required={ boolean('required', false) }
        type={ select('type', ['text', 'password', 'number', 'date'], 'text') }
      />);
  })).add('Input', () => {
    return (
      <div>
        <fieldset>
          <Input
            label="Field label"
            note="A short description or note about this field."
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Input
            label="Field label"
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Input
            note="A short description or note about this field."
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Input
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
      </div>);
  }).add('Error states', () => {
    return (
      <div>
        <fieldset>
          <Input
            label="Field label"
            displayError={ true }
            note="A short description or note about this field."
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Input
            label="Field label"
            displayError={ true }
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Input
            displayError={ true }
            note="A short description or note about this field."
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Input
            displayError={ true }
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
      </div>);
  });
