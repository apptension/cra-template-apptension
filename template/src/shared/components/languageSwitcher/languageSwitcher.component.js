import React from 'react';
import { useSelector } from 'react-redux';
import useRouter from 'use-react-router';

import { Select } from './languageSwitcher.styles';
import { appLocales } from '../../../i18n';
import { selectLocalesLanguage } from '../../../modules/locales/locales.selectors';

export const LanguageSwitcher = () => {
  const { match, history } = useRouter();
  const language = useSelector(selectLocalesLanguage);

  const handleChange = e => {
    history.push(match.url.replace(match.params.lang, e.target.value));
  };

  return (
    <Select value={language} onChange={handleChange}>
      {appLocales.map((locale, index) => (
        <option key={index} value={locale}>
          {locale}
        </option>
      ))}
    </Select>
  );
};
