import React from 'react';
import { storiesOf } from '@storybook/react';
import ListGroup from '.';

storiesOf('ListGroup', module).add('w/ items', () => (
  <ListGroup>
    <ListGroup.Item>
      <p>Testing 123</p>
    </ListGroup.Item>
    <ListGroup.Item>
      <p>Testing 123</p>
    </ListGroup.Item>
    <ListGroup.Item>
      <p>Testing 123</p>
    </ListGroup.Item>
  </ListGroup>
));
