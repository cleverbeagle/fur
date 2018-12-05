import React from 'react';

import { storiesOf } from '@storybook/react';

import Navigation from '.';
import Grid from '../Grid';
import Brand from '../Brand';
import Form from '../Form';
import Button from '../Button';

storiesOf('Navigation', module)
  .add('horizontal', () => (
    <React.Fragment>
      <Navigation orientation="horizontal">
        <Grid.Container>
          <Brand>Hound</Brand>
          <Navigation.Toggle />
          <Navigation.Items>
            <Navigation.Item label="Dashboard" onClick={() => alert('/documents')} />
            <Navigation.Item label="Products" onClick={() => alert('/documents')} />
            <Navigation.Item label="Appointments" />
            <Navigation.Item label="Admin" downArrow>
              <Navigation.Items>
                <Navigation.Item label="Products" onClick={() => alert('/documents')} />
                <Navigation.Item label="Team" />
              </Navigation.Items>
            </Navigation.Item>
            <Navigation.User avatar="http://fillmurray.com/150/150" name="René Redzepi">
              <Navigation.Items>
                <Navigation.Item label="Profile" onClick={() => alert('/documents')} />
                <Navigation.Item label="Billing &amp; Subscription" />
                <Navigation.Item label="Contact Support" />
                <Navigation.Item divider />
                <Navigation.Item label="Logout" onClick={() => alert('/profile')} />
              </Navigation.Items>
            </Navigation.User>
          </Navigation.Items>
        </Grid.Container>
      </Navigation>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col md={4} lg={3}>
            <Navigation.Items>
              <Navigation.Item label="React">
                <Navigation.Items>
                  <Navigation.Item label="Organizational Conventions or Leaving a Trail" />
                  <Navigation.Item label="React Bootstrap" />
                  <Navigation.Item label="Defining Components" />
                  <Navigation.Item label="Forms" />
                </Navigation.Items>
              </Navigation.Item>
              <Navigation.Item label="Billing &amp; Subscription" />
              <Navigation.Item label="Contact Support" />
            </Navigation.Items>
          </Grid.Col>
          <Grid.Col md={8} lg={9}>
            <Grid.Row>
              <Grid.Col sm={6}>
                <Form.Field>
                  <Form.Label>First Name</Form.Label>
                  <Form.Input type="text" name="firstName" placeholder="Doug" />
                </Form.Field>
              </Grid.Col>
              <Grid.Col sm={6}>
                <Form.Field>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Input type="text" name="lastName" placeholder="Funnie" />
                </Form.Field>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col sm={12}>
                <Form.Field>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Input
                    type="text"
                    name="firstName"
                    placeholder="doug.funnie@bluffington.edu"
                  />
                </Form.Field>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col sm={12}>
                <Form.Field>
                  <Form.Label>Reason for contact</Form.Label>
                  <Form.Select>
                    <option value="testing">Testing</option>
                    <option value="testing2">Testing 2</option>
                    <option value="testing3">Testing 3</option>
                  </Form.Select>
                </Form.Field>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col sm={12}>
                <Form.Field>
                  <Form.Label>Message</Form.Label>
                  <Form.Textarea name="message" placeholder="Type your message here..." />
                </Form.Field>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col sm={12}>
                {/* <Button>Testing</Button> */}
                <Button theme="success">Save Changes</Button>
                {/* <Button theme="success">Testing</Button>
                <Button theme="warning">Testing</Button>
                <Button theme="danger">Testing</Button> */}
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </React.Fragment>
  ))
  .add('vertical', () => (
    <Navigation orientation="vertical">
      <p>Test</p>
    </Navigation>
  ));
