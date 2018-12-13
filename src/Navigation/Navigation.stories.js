import React from 'react';
import { storiesOf } from '@storybook/react';
import Navigation from '.';
import Grid from '../Grid';
import Brand from '../Brand';

storiesOf('Navigation', module)
  .add('Horizontal w/ Container', () => (
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
    </React.Fragment>
  ))
  .add('Horizontal Fluid', () => (
    <React.Fragment>
      <Navigation orientation="horizontal" fluid>
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
      </Navigation>
    </React.Fragment>
  ));
