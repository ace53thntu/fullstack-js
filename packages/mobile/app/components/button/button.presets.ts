import {ViewStyle, TextStyle} from 'react-native';
import {color, spacing, typography} from '../../theme';

const BASE_VIEW: ViewStyle = {
  paddingHorizontal: spacing[4],
  paddingVertical: spacing[4],
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
  shadowOpacity: 0.24,
  shadowRadius: 30,
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowColor: color.palette.blue,
};

const BASE_TEXT: TextStyle = {
  fontSize: 14,
  lineHeight: 25,
  textAlign: 'center',
  letterSpacing: 0.5,
  ...typography.secondary,
};

export const viewPresets = {
  /**
   * A primary button
   */
  primary: {
    ...BASE_VIEW,
    backgroundColor: color.palette.blue,
  } as ViewStyle,
  /**
   * A secondary button
   */
  secondary: {
    ...BASE_VIEW,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EBF0FF',
    backgroundColor: 'transparent',
  } as ViewStyle,
};

export const textPresets = {
  /**
   * Text of primary button
   */
  primary: {
    ...BASE_TEXT,
    color: color.palette.white,
  } as TextStyle,
  /**
   * Text of secondary button
   */
  secondary: {
    ...BASE_TEXT,
    color: color.palette.grey,
  } as TextStyle,
};

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets;
