import {TextInputProps, ViewStyle, TextStyle} from 'react-native';

export interface TextFieldProps extends TextInputProps {
  /**
   * The placeholder text
   */
  placeholder?: string;

  /**
   * The label text
   */
  label?: string;

  /**
   * The helper text
   */
  helperText?: string;

  /**
   * If `true` the helper text and input will be displayed in an error state
   */
  error?: boolean;

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

  /**
   * Left icon component
   */
  leftIcon?: React.ReactNode;

  /**
   * Right icon component
   */
  rightIcon?: React.ReactNode;
}
