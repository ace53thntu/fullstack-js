/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app or storybook.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigation, so head over there
 * if you're interested in adding screens and navigators.
 */

import 'react-native-gesture-handler';
import './utils/ignore-warnings';
import React, {useEffect, useRef, FunctionComponent as Component} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {
  SafeAreaProvider,
  initialWindowSafeAreaInsets,
} from 'react-native-safe-area-context';
import {AppearanceProvider} from 'react-native-appearance';
import * as RNLocalize from 'react-native-localize';

import * as storage from './utils/storage';
import {
  useBackButtonHandler,
  RootNavigator,
  canExit,
  setRootNavigation,
  useNavigationPersistence,
} from './navigation';
import {setI18nConfig} from './i18n';
import useForceUpdate from './hooks/use-force-update';
import useConstructor from './hooks/use-constructor';

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
import {enableScreens} from 'react-native-screens';
enableScreens();

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

/**
 * This is the root component of our app.
 */
const App: Component<{}> = () => {
  useConstructor(() => {
    setI18nConfig();
  });
  const navigationRef = useRef<NavigationContainerRef>();
  const forceUpdate = useForceUpdate();

  setRootNavigation(navigationRef);
  useBackButtonHandler(navigationRef, canExit);
  const {
    initialNavigationState,
    onNavigationStateChange,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  const handleLocalizationChange = () => {
    setI18nConfig();
    forceUpdate();
  };

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    return () =>
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    (async () => {
      //
    })();
  }, []);

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color. You can replace
  // with your own loading component if you wish.
  // if (!rootStore) return null

  // otherwise, we're ready to render the app
  return (
    <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
      <AppearanceProvider>
        <RootNavigator
          ref={navigationRef}
          initialState={initialNavigationState}
          onStateChange={onNavigationStateChange}
        />
      </AppearanceProvider>
    </SafeAreaProvider>
  );
};

export default App;
