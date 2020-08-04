import {ToggleThemeTypes, TOGGLE_THEME} from './types';

export function toggleThem(): ToggleThemeTypes {
  return {
    type: TOGGLE_THEME,
  };
}
