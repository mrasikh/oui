import React from 'react';
import { storiesOf } from '@storybook/react';

import SearchableSelect from './index';
import {withInfo} from '@storybook/addon-info';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import styled from 'styled-components';
import {action} from '@storybook/addon-actions';

const items = [
  {
    label: React.createElement('div', {}, 'cat'),
    value: 'cat',
  },
  {
    label: React.createElement('div', {}, 'dog'),
    value: 'dog',
  },
  {
    label: React.createElement('div', {}, 'bear'),
    value: 'bear',
  },
];

const stories = storiesOf('SearchableSelect', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('Default with knobs', withInfo()(() => {
  return (
    <Container>
      <SearchableSelect
        items={ items }
        placeholder={ text('placeholder', 'type to search') }
        minDropdownWidth={ number('minDropdownWidth', 150) }
        onChange={ action('item was clicked') }
        isDisabled={ boolean('isDisabled', false) }
        maxResults={ number('maxResults', Number.MAX_SAFE_INTEGER) }
        placement={ select('placement', ['top-start', 'bottom-start']) }
        dropdownDirection={ select('dropdownDirection', ['up', null]) }
        value={ select('value', [null, 'cat', 'dog', 'bear']) }
      />
    </Container>
  );
}));


const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
`;
