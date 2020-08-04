import {createContext} from '../create-context';
import {reducer, initialState} from './preferences-reducer';

const [
  usePreferencesState,
  usePreferencesDispatch,
  PreferencesProvider,
] = createContext(initialState, reducer);

export {usePreferencesState, usePreferencesDispatch, PreferencesProvider};
