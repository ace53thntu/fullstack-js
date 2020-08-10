import {TextInputProps, ViewStyle, TextStyle} from 'react-native';

export interface TextFieldProps extends TextInputProps {
  /**
   * The placeholder text
   */
  placeholder?: string;

  /**
   * Optional container style overrides
   */
  style?: ViewStyle | ViewStyle[];

  /**
   * Optional style overrides
   */
  inputStyle?: TextStyle | TextStyle[];

  variant?: 'default';

  forwardedRef?: any;
}
