import {PreferencesState, TOGGLE_THEME, ToggleThemeTypes} from './types';

export const initialState: PreferencesState = {
  theme: 'light',
  rtl: 'left',
};

type State = typeof initialState;

export function reducer(
  state: State,
  action: ToggleThemeTypes,
): PreferencesState {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };
    default:
      return state;
  }
}
