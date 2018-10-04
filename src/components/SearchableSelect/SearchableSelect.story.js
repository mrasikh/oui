import React from 'react';
import { storiesOf } from '@storybook/react';

import SearchableSelect from './index';
import {withInfo} from '@storybook/addon-info';
import styled from 'styled-components';
import {action} from '@storybook/addon-actions';

const items = [
  {
    selectOption: React.createElement('div', {}, 'cat'),
    value: 'cat',
  },
  {
    selectOption: React.createElement('div', {}, 'dog'),
    value: 'dog',
  },
  {
    selectOption: React.createElement('div', {}, 'bear'),
    value: 'bear',
  },
];

const stories = storiesOf('SearchableSelect', module);
stories
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('Default', withInfo()(() => {
  return (
    <Container>
      <SearchableSelect
        items={ items }
        placeholder="type to search"
        minDropdownWidth={ 150 }
        maxResults={ 1 }
        onChange={ action('item was clicked') }
      />
    </Container>
  );
}));


const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
`;
