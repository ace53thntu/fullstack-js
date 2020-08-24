import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Typography, Button, TextField} from '../../components';

import {translate} from '../../i18n/translate';

export const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const nextScreen = () => navigation.navigate('demo');

  const [text, setText] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Button onPress={nextScreen} text="Next Screen" />
              <Button text="Next Screen" variant="secondary" />
              <TextField
                // error
                // label="Username"
                placeholder="Username"
                helperText="Oops! Your Email Is Not Correct"
                value={text}
                onChangeText={(val) => setText(val)}
                leftIcon={<McIcon name="email-outline" size={24} />}
              />
              <TextField
                // error
                placeholder="Password"
                // helperText="Oops! Your Password Is Not Correct"
                value={text}
                onChangeText={(val) => setText(val)}
              />
              <Typography>
                {translate('demoScreen.title')}{' '}
                <Text style={styles.highlight}>App.tsx</Text> to change this
                screen and then come back to see your edits.
              </Typography>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
