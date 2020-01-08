import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch, useParams } from 'react-router';

import { Select } from './languageSwitcher.styles';
import { appLocales } from '../../../i18n';
import { selectLocalesLanguage } from '../../../modules/locales/locales.selectors';

export const LanguageSwitcher = () => {
  const { lang } = useParams();
  const match = useRouteMatch();
  const history = useHistory();
  const language = useSelector(selectLocalesLanguage);

  const handleChange = e => {
    history.push(match.url.replace(lang, e.target.value));
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
