import React from 'react';

import { storiesOf } from '@storybook/react';

import Navigation from '.';
import Grid from '../Grid';
import Brand from '../Brand';
import NavigationToggle from '../NavigationToggle';
import NavigationItems from '../NavigationItems';
import NavigationItem from '../NavigationItem';
import UserMenu from '../UserMenu';

storiesOf('Navigation', module)
  .add('horizontal', () => (
    <React.Fragment>
      <Navigation orientation="horizontal">
        <Grid.Container>
          <Brand>Hound</Brand>
          <NavigationToggle />
          <NavigationItems>
            <NavigationItem label="Products" onClick={() => alert('/documents')} />
            <NavigationItem label="Team" />
            <NavigationItem label="Integrations" onClick={() => alert('/profile')} />
            <NavigationItem label="Admin">
              <NavigationItems>
                <NavigationItem label="Products" onClick={() => alert('/documents')} />
                <NavigationItem label="Team" />
              </NavigationItems>
            </NavigationItem>
          </NavigationItems>
          <UserMenu avatar="http://fillmurray.com/150/150" name="René Redzepi">
            <NavigationItems>
              <NavigationItem label="Profile" onClick={() => alert('/documents')} />
              <NavigationItem label="Billing &amp; Subscription" />
              <NavigationItem label="Contact Support" />
              <NavigationItem divider />
              <NavigationItem label="Logout" onClick={() => alert('/profile')} />
            </NavigationItems>
          </UserMenu>
        </Grid.Container>
      </Navigation>
      <Grid.Container>
        <NavigationItems>
          <NavigationItem label="Profile" onClick={() => alert('/documents')} />
          <NavigationItem label="Billing &amp; Subscription" />
          <NavigationItem label="Contact Support" />
          <NavigationItem divider />
          <NavigationItem label="Logout" onClick={() => alert('/profile')} />
        </NavigationItems>
      </Grid.Container>
    </React.Fragment>
  ))
  .add('vertical', () => (
    <Navigation orientation="vertical">
      <p>Test</p>
    </Navigation>
  ));
