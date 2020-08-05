import {Dimensions, PixelRatio, Platform} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// size of designs
const designWidth = 375;
const designHeight = 812;

export const widthPercentageToDP = (widthPercent: string | number): number => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const heightPercentageToDP = (
  heightPercent: string | number,
): number => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export const wp = (dimension: number): number => {
  return widthPercentageToDP((dimension / designWidth) * 100 + '%');
};
export const hp = (dimension: number): number => {
  return heightPercentageToDP((dimension / designHeight) * 100 + '%');
};
