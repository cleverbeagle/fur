import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from '.';

storiesOf('Alert', module)
  .add('Default', () => <Alert>This is just a heads up!</Alert>)
  .add('Primary', () => <Alert theme="primary">Enter your email address below to receive a link to reset your password.</Alert>)
  .add('Success', () => <Alert theme="success">All is well here!</Alert>)
  .add('Warning', () => <Alert theme="warning">Uh oh. {"Something's"} not right.</Alert>)
  .add('Danger', () => <Alert theme="danger">Something is really wrong! Pay attention!</Alert>);
