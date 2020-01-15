import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';

import { appLocales } from '../../../i18n';
import { localesSelectors } from '../../../modules/locales';
import { LanguageSwitcherComponent } from './languageSwitcher.component';

export const LanguageSwitcherContainer = () => {
  const match = useRouteMatch<{ lang: string }>();
  const history = useHistory();
  const language = useSelector(localesSelectors.selectLocalesLanguage);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    history.push(match.url.replace(match.params.lang, e.target.value));
  };

  const componentProps = {
    language,
    locales: appLocales,
    handleChange,
  };

  return <LanguageSwitcherComponent {...componentProps} />;
};
