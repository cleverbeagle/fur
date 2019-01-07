import React from 'react';
import { storiesOf } from '@storybook/react';
import PageHeader from '.';
import Button from '../Button';

storiesOf('PageHeader', module)
  .add('w/ title', () => (
    <PageHeader>
      <PageHeader.Title>Page Title</PageHeader.Title>
    </PageHeader>
  ))
  .add('w/ title and action', () => (
    <PageHeader>
      <PageHeader.Title>Page Title</PageHeader.Title>
      <PageHeader.Action>
        <Button theme="success">Page Action</Button>
      </PageHeader.Action>
    </PageHeader>
  ));
