import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';

import Button from './';

import ButtonReadme from './Button.readme.md';
import { withReadme, withDocs } from 'storybook-readme';

storiesOf('Button', module)
  .add('with action', () => (
    <Button onClick={action('clicked')}>
      Hello Button
    </Button>
  ))
  .add('with knobs', () => (
    <Button onClick={action('clicked')}>
      {text('Button Text', 'Click me')}
    </Button>
  ))
  .addWithJSX('with jsx in panel', () => (
    <Button>
      This button does nothing
    </Button>
  ))
  .addDecorator(withDocs(ButtonReadme))
  .add('with readme', () => (
    <Button>
      No click button for readme
    </Button>
  ))
;
