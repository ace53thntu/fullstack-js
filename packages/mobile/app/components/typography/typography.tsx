import * as React from 'react';
import {Text as ReactNativeText} from 'react-native';
import {mergeAll, flatten} from 'ramda';
import {TypographyProps} from './typography.props';
import {presets} from './typography.presets';

export function Typography(props: TypographyProps) {
  const {
    variant = 'bodyNormalRegular',
    text,
    children,
    style: styleOverride,
    ...rest
  } = props;

  const content = text || children;

  const style = mergeAll(
    flatten([presets[variant] || presets.bodyNormalRegular, styleOverride]),
  );

  return (
    <ReactNativeText {...rest} style={style}>
      {content}
    </ReactNativeText>
  );
}
