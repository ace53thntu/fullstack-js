import {Platform} from 'react-native';

/**
 * You can find a list of available fonts on both iOS and Android here:
 * https://github.com/react-native-training/react-native-fonts
 *
 * If you're interested in adding a custom font to your project,
 * check out the readme file in ./assets/fonts/ then come back here
 * and enter your new font name. Remember the Android font name
 * is probably different than iOS.
 * More on that here:
 * https://github.com/lendup/react-native-cross-platform-text
 *
 * The various styles of fonts are defined in the <Typography /> component.
 */
const CUSTOM_FONT_BOLD = {
  fontFamily: Platform.select({
    ios: 'Poppins-Bold', // The font family name
    android: 'Poppins-Bold', // The file name
  }),
  fontWeight: Platform.select({
    ios: 'bold',
    android: undefined,
  }),
};
const CUSTOM_FONT_REGULAR = {
  fontFamily: Platform.select({
    ios: 'Poppins-Regular', // The font family name
    android: 'Poppins-Regular', // The file name
  }),
  fontWeight: Platform.select({
    ios: 'normal',
    android: undefined,
  }),
};

export const typography = {
  /**
   * The primary font.  Used in most places.
   */
  primary: CUSTOM_FONT_REGULAR,

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: CUSTOM_FONT_BOLD,

  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ios: 'Courier', android: 'monospace'}),
};
