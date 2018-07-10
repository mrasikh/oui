import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import ButtonRow from '../ButtonRow';
import Button from './index.js';
import Link from '../Link';
import ArrowsInline from '../ArrowsInline';

const stories = storiesOf('Button', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('customize me!', () => {
    return (
      <Button
        style={ select('style', {
          'highlight': 'highlight',
          'danger': 'danger',
          'danger-outline': 'danger-outline',
          'outline': 'outline',
          'outline-reverse': 'outline-reverse',
          'plain': 'plain',
          'toggle': 'toggle',
          'underline': 'underline',
          'unstyled': 'unstyled',
        }, 'highlight') }
        isDisabled={ boolean('isDisabled', false) }
        isActive={ boolean('isActive', false) }
        width={ select('width', {
          'default': 'default',
          'full': 'full'}, 'default') }
        size={ select('size', {
          'tiny': 'tiny',
          'small': 'small',
          'large': 'large',
          'narrow': 'narrow',
          'tight': 'tight'}, 'narrow') }>
        { text('customize me!', 'customize me!') }
      </Button>);
  })
  .add('all buttons', withInfo()(() => {
    return (
      <ButtonRow
        centerGroup={ [
          <Button key="1" isActive={ boolean('isActive', false) } width="default">Button</Button>,
          <Button key="2" isActive={ boolean('isActive', false) } style="highlight" width="default">Highlight</Button>,
          <Button key="3" isActive={ boolean('isActive', false) } style="danger" width="default">Danger</Button>,
          <Button key="4" isActive={ boolean('isActive', false) } style="danger-outline" width="default">Danger Outline</Button>,
          <Button key="5" isActive={ boolean('isActive', false) } style="outline" width="default">Outline</Button>,
          <Button key="6" isActive={ boolean('isActive', false) } style="plain" width="default">Plain</Button>,
          <Button key="7" isActive={ boolean('isActive', false) } style="toggle" width="default">Toggle</Button>,
        ] }
      />);
  }))
  .add('all disabled', () => {
    return (
      <ButtonRow
        centerGroup={ [
          <Button key="1" isDisabled={ true } width="default">Button</Button>,
          <Button key="2" isDisabled={ true } style="highlight" width="default">Highlight</Button>,
          <Button key="3" isDisabled={ true } style="danger" width="default">Danger</Button>,
          <Button key="4" isDisabled={ true } style="danger-outline" width="default">Danger Outline</Button>,
          <Button key="5" isDisabled={ true } style="outline" width="default">Outline</Button>,
          <Button key="6" isDisabled={ true } style="plain" width="default">Plain</Button>,
          <Button key="7" isDisabled={ true } style="toggle" width="default">Toggle</Button>,
        ] }
      />);
  })
  .add('underline button', () => {
    return (
      <Button style="underline" width="default">
        Underline Button
        <ArrowsInline direction="down" />
      </Button>);
  })
  .add('sizes variations', () => {
    return (
      <ButtonRow
        centerGroup={ [
          <Button key="1" width="default" size="tiny">Tiny Button</Button>,
          <Button key="2" width="default" size="small">Small Button</Button>,
          <Button key="3" width="default" size="large">Large Button</Button>,
          <Button key="4" width="default" size="narrow">Narrow Button</Button>,
          <Button key="5" width="default" size="tight">Tight Button</Button>,
        ] }
      />);
  })
  .add('Button without an onClick', () => {
    return (
      <Button onClick={ null }>Faux Button</Button>
    );
  })
  .add('Button without an onClick (disabled)', () => {
    return (
      <Button isDisabled={ true }>Faux Button</Button>
    );
  })
  .add('Button that looks like a Link', withInfo()(() => {
    return (
      <Button style='unstyled'>
        <Link>Say Hi</Link>
      </Button>
    );
  }));
