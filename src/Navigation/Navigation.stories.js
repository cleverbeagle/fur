import React from 'react';

import { storiesOf } from '@storybook/react';

import Navigation from '.';
import Brand from '../Brand';
import NavigationToggle from '../NavigationToggle';
import NavigationItems from '../NavigationItems';
import NavigationItem from '../NavigationItem';
import UserMenu from '../UserMenu';

storiesOf('Navigation', module)
  .add('horizontal', () => (
    <Navigation orientation="horizontal">
      <Brand>Hound</Brand>
      <NavigationToggle />
      <NavigationItems>
        <NavigationItem label="Products" onClick={() => alert('/documents')} />
        <NavigationItem label="Team" />
        <NavigationItem label="Integrations" onClick={() => alert('/profile')} />
      </NavigationItems>
      <UserMenu avatar="http://fillmurray.com/150/150" name="René Redzepi">
        <NavigationItems>
          <NavigationItem label="Products" onClick={() => alert('/documents')} />
          <NavigationItem label="Team" />
          <NavigationItem label="Integrations" onClick={() => alert('/profile')} />
        </NavigationItems>
      </UserMenu>
    </Navigation>
  ))
  .add('vertical', () => (
    <Navigation orientation="vertical">
      <p>Test</p>
    </Navigation>
  ));
