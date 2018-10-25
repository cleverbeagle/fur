import { configure, addDecorator } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

const req = require.context('../src', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);

configure(loadStories, module);
