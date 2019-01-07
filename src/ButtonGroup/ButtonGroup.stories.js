import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonGroup from '.';
import Button from '../Button';

storiesOf('ButtonGroup', module)
  .add('Three buttons', () => (
    <ButtonGroup>
      <Button theme="default">One</Button>
      <Button theme="default">Two</Button>
      <Button theme="default">Three</Button>
    </ButtonGroup>
  ))
  .add('First button active', () => (
    <ButtonGroup>
      <Button theme="primary">One</Button>
      <Button theme="default">Two</Button>
    </ButtonGroup>
  ))
  .add('Second button active', () => (
    <ButtonGroup>
      <Button theme="default">One</Button>
      <Button theme="primary">Two</Button>
    </ButtonGroup>
  ));
