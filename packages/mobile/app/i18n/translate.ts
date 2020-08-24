import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

/**
 * Translate text
 */
export const translate = memoize(
  (key: string, options?: object) => i18n.t(key, options),
  (key: string, options?: object) =>
    options ? key + JSON.stringify(options) : key,
);
