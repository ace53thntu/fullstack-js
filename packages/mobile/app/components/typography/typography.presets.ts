import {TextStyle} from 'react-native';
import {color, typography} from '../../theme';

/**
 * All text base styles
 */
const BASE: TextStyle = {
  color: color.text,
  letterSpacing: 0.5,
};
const HEADING_BASE: TextStyle = {
  ...BASE,
  ...typography.secondary,
};
const TEXT_BOLD: TextStyle = {
  ...BASE,
  ...typography.secondary,
};
const TEXT_REGULAR: TextStyle = {
  ...BASE,
  ...typography.primary,
};
const CAPTION_BOLD: TextStyle = {
  ...BASE,
  ...typography.secondary,
};
const CAPTION_REGULAR: TextStyle = {
  ...BASE,
  ...typography.primary,
};
const LINK_TEXT_BASE: TextStyle = {
  ...typography.secondary,
  letterSpacing: 0.5,
  color: color.link,
};

export const presets = {
  /**
   * The heading styles
   */
  h1: {
    ...HEADING_BASE,
    fontSize: 32,
    lineHeight: 48,
  } as TextStyle,
  h2: {
    ...HEADING_BASE,
    fontSize: 24,
    lineHeight: 36,
  } as TextStyle,
  h3: {
    ...HEADING_BASE,
    fontSize: 20,
    lineHeight: 30,
  } as TextStyle,
  h4: {
    ...HEADING_BASE,
    fontSize: 16,
    lineHeight: 24,
  } as TextStyle,
  h5: {
    ...HEADING_BASE,
    fontSize: 14,
    lineHeight: 21,
  } as TextStyle,
  h6: {
    ...HEADING_BASE,
    fontSize: 12,
    lineHeight: 18,
  } as TextStyle,

  /**
   * The body text styles
   */
  bodyLargeBold: {
    ...TEXT_BOLD,
    fontSize: 16,
    lineHeight: 29,
  } as TextStyle,
  bodyLargeRegular: {
    ...TEXT_REGULAR,
    fontSize: 16,
    lineHeight: 29,
  } as TextStyle,
  bodyMediumBold: {
    ...TEXT_BOLD,
    fontSize: 14,
    lineHeight: 25,
  } as TextStyle,
  bodyMediumRegular: {
    ...TEXT_REGULAR,
    fontSize: 14,
    lineHeight: 25,
  } as TextStyle,
  bodyNormalBold: {
    ...TEXT_BOLD,
    fontSize: 12,
    lineHeight: 22,
  } as TextStyle,
  bodyNormalRegular: {
    ...TEXT_REGULAR,
    fontSize: 12,
    lineHeight: 22,
  } as TextStyle,

  /** The caption text styles */
  captionLargeBold: {
    ...CAPTION_BOLD,
    fontSize: 12,
    lineHeight: 18,
  } as TextStyle,
  captionLargeRegular: {
    ...CAPTION_REGULAR,
    fontSize: 12,
    lineHeight: 18,
  } as TextStyle,
  captionNormalBold: {
    ...CAPTION_BOLD,
    fontSize: 10,
    lineHeight: 15,
  } as TextStyle,
  captionNormalRegular: {
    ...CAPTION_REGULAR,
    fontSize: 10,
    lineHeight: 15,
  } as TextStyle,
  captionNormalRegularLine: {
    ...CAPTION_REGULAR,
    fontSize: 10,
    textDecorationLine: 'line-through',
    lineHeight: 15,
  } as TextStyle,

  /**
   * The link text styles
   */
  linkNormal: {
    ...LINK_TEXT_BASE,
    fontSize: 14,
    lineHeight: 21,
  } as TextStyle,
  linkSmall: {
    ...LINK_TEXT_BASE,
    fontSize: 12,
    lineHeight: 18,
  } as TextStyle,

  button,
};

export type TypographyPresets = keyof typeof presets;
