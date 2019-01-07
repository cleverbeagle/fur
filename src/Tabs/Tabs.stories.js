import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs from '.';

storiesOf('Tabs', module).add('w/ tabs', () => (
  <Tabs>
    <Tabs.Tab title="Issues">
      <p>Issues here</p>
    </Tabs.Tab>
    <Tabs.Tab title="Releases">
      <p>Releases here</p>
    </Tabs.Tab>
    <Tabs.Tab title="Settings">
      <p>Settings here</p>
    </Tabs.Tab>
  </Tabs>
));
