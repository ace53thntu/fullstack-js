import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {mergeAll, flatten} from 'ramda';
import {Typography} from '../typography/typography';
import {viewPresets, textPresets} from './button.presets';
import {ButtonProps} from './button.props';

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    ...rest
  } = props;

  const viewStyle = mergeAll(
    flatten([viewPresets[variant] || viewPresets.primary, styleOverride]),
  );
  const textStyle = mergeAll(
    flatten([textPresets[variant] || textPresets.primary, textStyleOverride]),
  );

  const content = children || <Typography text={text} style={textStyle} />;

  return (
    <TouchableOpacity style={viewStyle} {...rest}>
      {content}
    </TouchableOpacity>
  );
}
