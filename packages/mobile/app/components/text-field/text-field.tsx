import React, {FunctionComponent as Component, useState} from 'react';
import {View, TextInput, ViewStyle, TextStyle} from 'react-native';
import {mergeAll, flatten} from 'ramda';

import {color, spacing, typography} from '../../theme';
import {Typography} from '../typography/typography';
import {TextFieldProps} from './text-field.props';

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingVertical: spacing[2],
};

// the base styling for the TextInput
const INPUT: TextStyle = {
  ...typography.primary,
  color: color.text,
  minHeight: 48,
  fontSize: 12,
  backgroundColor: color.palette.white,
  paddingHorizontal: 16,
  paddingVertical: 13,
  borderRadius: 5,
  flex: 1,
};
const INPUT_WITH_LEFT_ICON: TextStyle = {
  paddingLeft: 10,
};
const INPUT_WITH_RIGHT_ICON: TextStyle = {
  paddingRight: 10,
};
const WRAP_INPUT_ICON: TextStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: color.palette.light,
  borderRadius: 5,
  backgroundColor: color.palette.white,
};
const FOCUSED_INPUT: TextStyle = {
  borderColor: color.link,
};
const HAS_VALUE_INPUT: TextStyle = {...typography.secondary};
const ERROR_INPUT: TextStyle = {borderColor: color.error};
const LEFT_ICON: TextStyle = {marginLeft: 16};
const RIGHT_ICON: TextStyle = {marginRight: 16};

// currently we have no presets, but that changes quickly when you build your app.
// const PRESETS: {[name: string]: ViewStyle} = {
//   default: {},
// };

const enhance = (style, styleOverride) => {
  return mergeAll(flatten([style, styleOverride]));
};

/**
 * A component which has a label and an input together.
 */
export const TextField: Component<TextFieldProps> = (props) => {
  const {
    placeholder,
    label = null,
    forwardedRef,
    style: styleOverride,
    inputStyle: inputStyleOverride,
    error = false,
    helperText,
    value = null,
    leftIcon = null,
    rightIcon = null,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  let containerStyle: ViewStyle = {...CONTAINER};
  containerStyle = enhance(containerStyle, styleOverride);

  let inputStyle: TextStyle = INPUT;
  inputStyle = enhance(inputStyle, [
    inputStyleOverride,
    leftIcon ? INPUT_WITH_LEFT_ICON : {},
    rightIcon ? INPUT_WITH_RIGHT_ICON : {},
    value ? HAS_VALUE_INPUT : {},
  ]);

  return (
    <View style={containerStyle}>
      {label ? <Typography text={label} variant="bodyMediumBold" /> : null}
      <View
        style={[
          WRAP_INPUT_ICON,
          isFocused ? FOCUSED_INPUT : {},
          error ? ERROR_INPUT : {},
        ]}>
        {leftIcon ? (
          <View style={[LEFT_ICON]}>
            {React.cloneElement(leftIcon, {
              color: error ? color.error : isFocused ? color.link : color.text,
            })}
          </View>
        ) : null}

        <TextInput
          placeholder={placeholder}
          placeholderTextColor={color.palette.grey}
          underlineColorAndroid={color.transparent}
          {...rest}
          style={inputStyle}
          ref={forwardedRef}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {rightIcon ? (
          <View style={[RIGHT_ICON]}>
            {React.cloneElement(rightIcon, {
              color: error ? color.error : isFocused ? color.link : color.text,
            })}
          </View>
        ) : null}
      </View>
      {helperText ? (
        <Typography
          text={helperText}
          variant="bodyNormalBold"
          style={error ? {color: color.error} : {}}
        />
      ) : null}
    </View>
  );
};
