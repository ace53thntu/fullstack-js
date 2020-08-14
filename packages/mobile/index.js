/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/app.tsx';
import {name as appName} from './app.json';

// Should we show storybook instead of our app?
//
// ⚠️ Leave this as `false` when checking into git.
const SHOW_STORYBOOK = false;
// const SHOW_STORYBOOK = true;

let RootComponent = App;
if (__DEV__) {
  if (SHOW_STORYBOOK) {
    // Only include Storybook if we're in dev mode
    const {StorybookUIRoot} = require('./storybook');
    RootComponent = StorybookUIRoot;
  } else {
    const {Reactotron} = require('./app/services/reactotron');
    new Reactotron().setup();
  }
}

AppRegistry.registerComponent(appName, () => RootComponent);
