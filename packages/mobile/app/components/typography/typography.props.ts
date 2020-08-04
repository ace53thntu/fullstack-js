import {TextStyle, TextProps as TextProperties} from 'react-native';
import {TypographyPresets} from './typography.presets';

export interface TypographyProps extends TextProperties {
  /**
   * Children components
   */
  children?: React.ReactNode;

  /**
   * The text to display
   */
  text?: string;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: TextStyle | TextStyle[];

  /**
   * Applies the theme typography styles.
   */
  variant?: TypographyPresets;
}
