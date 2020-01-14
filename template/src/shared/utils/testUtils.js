import { DEFAULT_LOCALE } from '../../i18n';

export const intlMock = () => ({
  formatMessage: ({ id, defaultMessage, values = {} }) => `${id} / ${defaultMessage} / ${JSON.stringify(values)}`,
  locale: DEFAULT_LOCALE,
  formatNumber: (value, options) => `${value} / ${JSON.stringify(options)}`,
});
