import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from '.';

storiesOf('Form.Input', module)
  .add('Input w/ start cap', () => (
    <Form.InputWrap>
      <Form.InputCap>Price in USD</Form.InputCap>
      <Form.Input type="text" />
    </Form.InputWrap>
  ))
  .add('Input w/ end cap', () => (
    <Form.InputWrap>
      <Form.Input type="text" />
      <Form.InputCap>Test</Form.InputCap>
    </Form.InputWrap>
  ))
  .add('Input w/ double cap', () => (
    <Form.InputWrap>
      <Form.InputCap>Test</Form.InputCap>
      <Form.Input type="text" />
      <Form.InputCap>Test</Form.InputCap>
    </Form.InputWrap>
  ));
