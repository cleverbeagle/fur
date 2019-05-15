import { configure } from '@storybook/react';

import '../src/index.css';

if (process.env.NODE_ENV === 'test') {
  require('babel-plugin-require-context-hook/register')();
}

const req = require.context('../src', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
