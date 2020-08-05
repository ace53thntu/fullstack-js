import {TouchableOpacityProps, ViewStyle} from 'react-native';
import {TouchableOpacityProps, ViewStyle} from 'react-native';
import {ButtonPresetNames} from './button.presets';

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * One of the different types of text presets.
   */
  children?: React.ReactNode;

  /**
   * The text to display in button
   */
  text?: string;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle | ViewStyle[];

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: TextStyle | TextStyle[];

  /**
   * The variant to use.
   */
  variant?: ButtonPresetNames;
}
