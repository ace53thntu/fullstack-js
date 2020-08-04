export const TOGGLE_THEME = 'TOGGLE_THEME';

interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
}

export interface PreferencesState {
  theme: 'light' | 'dark';
  rtl: 'left' | 'right';
}

export type ToggleThemeTypes = ToggleThemeAction;
