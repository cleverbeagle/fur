import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import Form from '.';
import Button from '../Button';

class TestWithState extends React.Component {
  state = {
    startDate: moment(),
    endDate: moment().add(1, 'week'),
  };

  render() {
    return (
      <Form.Field>
        <Form.DatePicker
          mode="range"
          // startDate={this.state.startDate}
          // endDate={this.state.endDate}
          // onDatesChange={(dates) => {
          //   console.log(dates, 'working');
          //   this.setState(dates);
          // }}
        />
      </Form.Field>
    );
  }
}

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
  .add('DatePicker', () => (
    <TestWithState />
  ))
  .add('Control', () => (
    <Form.Control>
      <Form.Input type="text" />
      <Button theme="success">Save</Button>
    </Form.Control>
  ));
