import React from 'react';

import { storiesOf } from '@storybook/react';

import Navigation from '.';
import Grid from '../Grid';
import Brand from '../Brand';
import NavigationToggle from '../NavigationToggle';
import NavigationItems from '../NavigationItems';
import NavigationItem from '../NavigationItem';
import UserMenu from '../UserMenu';
import Panel from '../Panel';

storiesOf('Navigation', module)
  .add('horizontal', () => (
    <React.Fragment>
      <Navigation orientation="horizontal">
        <Grid.Container>
          <Brand>Clever Beagle</Brand>
          <NavigationToggle />
          <NavigationItems>
            <NavigationItem label="Dashboard" onClick={() => alert('/documents')} />
            <NavigationItem label="Products" onClick={() => alert('/documents')} />
            <NavigationItem label="Appointments" />
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
        <Grid.Row>
          <Grid.Col smOrder={2} md={4} mdOrder={1} lg={3}>
            <Panel>
              <Panel.Body>
                <NavigationItems>
                  <NavigationItem active label="Profile" onClick={() => alert('/documents')} />
                  <NavigationItem label="Billing &amp; Subscription" />
                  <NavigationItem label="Contact Support" />
                </NavigationItems>
              </Panel.Body>
            </Panel>
          </Grid.Col>
          <Grid.Col smOrder={1} md={8} mdOrder={2} lg={6}>
            <Panel>
              <Panel.Body>
                <NavigationItems>
                  <NavigationItem active label="Profile" onClick={() => alert('/documents')} />
                  <NavigationItem label="Billing &amp; Subscription" />
                  <NavigationItem label="Contact Support" />
                </NavigationItems>
              </Panel.Body>
            </Panel>
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
