import { configure, addDecorator, setAddon } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withOptions } from '@storybook/addon-options';

import JSXAddon from 'storybook-addon-jsx';

import '../src/index.css';

setAddon(JSXAddon);

if (process.env.NODE_ENV === 'test') {
  require('babel-plugin-require-context-hook/register')();
}

const req = require.context('../src', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);

addDecorator(withOptions({
  // name to display in the top left corner
  name: 'Fur',
  // URL for name in top left corner to link to
  url: 'https://cleverbeagle.com/fur',
  // show story component as full screen
  goFullScreen: false,
  // display panel that shows a list of stories
  showStoriesPanel: true,
  // display panel that shows addon configurations
  showAddonPanel: true,
  // display floating search box to search through stories
  showSearchBox: false,
  // show addon panel as a vertical panel on the right
  addonPanelInRight: false,
  // sorts stories
  sortStoriesByKind: false,
  // regex for finding the hierarchy separator
  // @example: /\/|\./ - split by `/` or `.`
  hierarchySeparator: null,
  // regex for finding the hierarchy root separator
  // @example: /\|/ - split by `|`
  hierarchyRootSeparator: null,
  // sidebar tree animations
  sidebarAnimations: true,
  // id to select an addon panel
  selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
}));

configure(loadStories, module);
