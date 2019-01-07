import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from '.';

storiesOf('Progress Bar', module)
  .add('Empty', () => <ProgressBar />)
  .add('At 50%', () => <ProgressBar progress={50} />)
  .add('At 50%', () => <ProgressBar progress={50} />)
  .add('Primary', () => <ProgressBar theme="primary" progress={50} />)
  .add('Success', () => <ProgressBar theme="success" progress={80} />)
  .add('Warning', () => <ProgressBar theme="warning" progress={30} />)
  .add('Danger', () => <ProgressBar theme="danger" progress={10} />);
