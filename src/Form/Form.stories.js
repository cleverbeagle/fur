import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from '.';
import Button from '../Button';

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
  ))
  .add('Multiple inputs', () => (
    <Form.InputWrap>
      <Form.Input type="text" />
      <Form.Input type="text" />
      <Form.Input type="text" />
    </Form.InputWrap>
  ))
  .add('Input w/ Legend', () => (
    <Form.Field>
      <Form.Legend>This is a legend</Form.Legend>
      <Form.Input type="text" />
    </Form.Field>
  ))
  .add('Checkbox', () => (
    <Form.Field>
      <Form.Checkbox />
    </Form.Field>
  ))
  .add('DateTimePicker', () => (
    <Form.Field>
      <Form.DateTimePicker
        options={{ mode: 'range' }}
      />
    </Form.Field>
  ))
  .add('Control', () => (
    <Form.Control>
      <Form.Input type="text" />
      <Button theme="success">Save</Button>
    </Form.Control>
  ));
