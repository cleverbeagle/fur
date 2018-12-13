import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '.';
import Button from '../Button';

storiesOf('Modal', module)
.add('Modal w/ title', () => (
  <Modal open>
    <Modal.Header closeButton>
      <Modal.Title>Modal</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Hot diggity dog.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button theme="success">Click Me</Button>
    </Modal.Footer>
  </Modal>
));
