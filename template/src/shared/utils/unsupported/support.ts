import { DEFAULT_LOCALE, translationMessages } from '../../../i18n';

require('es5-shim');
require('es5-shim/es5-sham');

//eslint-disable-next-line import/first
import UnsupportedBrowserDetection from './unsupportedBrowserDetection';
//eslint-disable-next-line import/first
//eslint-disable-next-line import/first
import messages from './support.messages';

const detection = new UnsupportedBrowserDetection();

export const setUnsupportedClasses = () => {
  document.documentElement.className += ` device-${detection.deviceType}`;

  if (detection.isInAppBrowser) {
    document.documentElement.className += ' in-app-browser';
  }

  if (!detection.isSupported()) {
    document.documentElement.className += ' unsupported';

    const translation = translationMessages[DEFAULT_LOCALE];

    const unsupportedPageElement: HTMLElement = document.querySelector('.unsupported-page');
    const appElement: HTMLElement = document.querySelector('#app');

    unsupportedPageElement.style.display = 'block';
    appElement.style.display = 'none';

    const headline = unsupportedPageElement.querySelector('h1');

    headline.innerText = translation[messages.title.id];
    document.title = translation[messages.pageTitle.id];
  }
};
