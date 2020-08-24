import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import {I18nManager} from 'react-native';

import {translate} from './translate';

const translationGetters = {
  en: () => require('./en.json'),
  vi: () => require('./vi.json'),
};

export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = {languageTag: 'en', isRTL: false};

  const {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};
