import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Button', module)
  .add('Default', () => <Button>Click Here</Button>)
  .add('Primary', () => <Button theme="primary">Click Here</Button>)
  .add('Success', () => <Button theme="success">Click Here</Button>)
  .add('Warning', () => <Button theme="warning">Click Here</Button>)
  .add('Danger', () => <Button theme="danger">Click Here</Button>);
