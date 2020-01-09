import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch, useParams } from 'react-router';

import { appLocales } from '../../../i18n';
import { selectLocalesLanguage } from '../../../modules/locales/locales.selectors';
import { LanguageSwitcherComponent } from './languageSwitcher.component';

export const LanguageSwitcherContainer = () => {
  const { lang } = useParams();
  const match = useRouteMatch();
  const history = useHistory();
  const language = useSelector(selectLocalesLanguage);

  const handleChange = e => {
    history.push(match.url.replace(lang, e.target.value));
  };

  const componentProps = {
    language,
    locales: appLocales,
    handleChange,
  };

  return <LanguageSwitcherComponent {...componentProps} />;
};
