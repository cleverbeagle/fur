import React from 'react';
import { storiesOf } from '@storybook/react';
import Navigation from '../Navigation';

storiesOf('NavigationItems', module)
  .add('Inactive', () => (
    <Navigation.Items>
      <Navigation.Item theme="primary" label="Products" onClick={() => alert('/documents')} />
      <Navigation.Item theme="success" label="Products" onClick={() => alert('/documents')} />
      <Navigation.Item theme="warning" label="Products" onClick={() => alert('/documents')} />
      <Navigation.Item theme="danger" label="Products" onClick={() => alert('/documents')} />
      <Navigation.Item label="Team" />
    </Navigation.Items>
  ))
  .add('Active', () => (
    <Navigation.Items>
      <Navigation.Item
        active
        theme="primary"
        label="Products"
        onClick={() => alert('/documents')}
      />
      <Navigation.Item
        active
        theme="success"
        label="Products"
        onClick={() => alert('/documents')}
      />
      <Navigation.Item
        active
        theme="warning"
        label="Products"
        onClick={() => alert('/documents')}
      />
      <Navigation.Item active theme="danger" label="Products" onClick={() => alert('/documents')} />
      <Navigation.Item active label="Team" />
    </Navigation.Items>
  ));
