import * as React from 'react';
import {View, ViewStyle} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {StoryScreen, Story, UseCase} from '../../../storybook/views';
// import {color} from '../../theme';
import {Typography} from './typography';

declare let module;

const VIEWSTYLE = {
  flex: 1,
};
// const viewStyleArray: ViewStyle[] = [VIEWSTYLE, {backgroundColor: '#7fff00'}];

storiesOf('Typography', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Heading variants', () => (
    <Story>
      <UseCase text="h1" usage="Used for heading 1 text.">
        <View style={VIEWSTYLE}>
          <Typography variant="h1">Heading 1</Typography>
        </View>
      </UseCase>
      <UseCase text="h2" usage="Used for heading 2 text.">
        <View style={VIEWSTYLE}>
          <Typography variant="h2">Heading 2</Typography>
        </View>
      </UseCase>
      <UseCase text="h3" usage="Used for heading 3 text.">
        <View style={VIEWSTYLE}>
          <Typography variant="h3">Heading 3</Typography>
        </View>
      </UseCase>
      <UseCase text="h4" usage="Used for heading 4 text.">
        <View style={VIEWSTYLE}>
          <Typography variant="h4">Heading 4</Typography>
        </View>
      </UseCase>
      <UseCase text="h5" usage="Used for heading 5 text.">
        <View style={VIEWSTYLE}>
          <Typography variant="h5">Heading 5</Typography>
        </View>
      </UseCase>
      <UseCase text="h6" usage="Used for heading 6 text.">
        <View style={VIEWSTYLE}>
          <Typography variant="h6">Heading 6</Typography>
        </View>
      </UseCase>
    </Story>
  ))
  .add('Body variants', () => (
    <Story>
      <UseCase text="bodyLargeBold" usage="Used for large bold body text.">
        <View style={VIEWSTYLE}>
          <Typography variant="bodyLargeBold">Large text</Typography>
        </View>
      </UseCase>
      <UseCase
        text="bodyLargeRegular"
        usage="Used for large regular body text.">
        <View style={VIEWSTYLE}>
          <Typography variant="bodyLargeRegular">Large text</Typography>
        </View>
      </UseCase>
      <UseCase text="bodyMediumBold" usage="Used for medium bold body text.">
        <View style={VIEWSTYLE}>
          <Typography variant="bodyMediumBold">Medium text</Typography>
        </View>
      </UseCase>
      <UseCase
        text="bodyMediumRegular"
        usage="Used for medium regular body text.">
        <View style={VIEWSTYLE}>
          <Typography variant="bodyMediumRegular">Medium text</Typography>
        </View>
      </UseCase>
      <UseCase text="bodyNormalBold" usage="Used for normal bold body text.">
        <View style={VIEWSTYLE}>
          <Typography variant="bodyNormalBold">Normal text</Typography>
        </View>
      </UseCase>
      <UseCase text="bodyNormalRegular" usage="Used for normal body text.">
        <View style={VIEWSTYLE}>
          <Typography>Normal text</Typography>
        </View>
      </UseCase>
    </Story>
  ))
  .add('Caption variants', () => (
    <Story>
      <UseCase
        text="captionLargeBold"
        usage="Used for large bold caption text.">
        <View style={VIEWSTYLE}>
          <Typography variant="captionLargeBold">Large caption</Typography>
        </View>
      </UseCase>
      <UseCase
        text="captionLargeRegular"
        usage="Used for large regular caption text.">
        <View style={VIEWSTYLE}>
          <Typography variant="captionLargeRegular">Large caption</Typography>
        </View>
      </UseCase>
      <UseCase
        text="captionNormalBold"
        usage="Used for normal bold caption text.">
        <View style={VIEWSTYLE}>
          <Typography variant="captionNormalBold">Normal caption</Typography>
        </View>
      </UseCase>
      <UseCase
        text="captionNormalRegular"
        usage="Used for normal regular caption text.">
        <View style={VIEWSTYLE}>
          <Typography variant="captionNormalRegular">Normal caption</Typography>
        </View>
      </UseCase>
      <UseCase
        text="captionNormalRegularLine"
        usage="Used for normal regular line caption text.">
        <View style={VIEWSTYLE}>
          <Typography variant="captionNormalRegularLine">
            Normal caption
          </Typography>
        </View>
      </UseCase>
    </Story>
  ))
  .add('Link variants', () => (
    <Story>
      <UseCase text="linkNormal" usage="Used for normal link text.">
        <View style={VIEWSTYLE}>
          <Typography variant="linkNormal">Normal link</Typography>
        </View>
      </UseCase>
      <UseCase text="linkSmall" usage="Used for small link text.">
        <View style={VIEWSTYLE}>
          <Typography variant="linkSmall">Small link</Typography>
        </View>
      </UseCase>
    </Story>
  ));
