import React, { ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { DEFAULT_LOCALE } from '../i18n';
import { localesActions, localesSelectors } from '../modules/locales';
import initializeFontFace from '../theme/initializeFontFace';
import { startupActions } from '../modules/startup';
import { AppComponent } from './app.component';

interface AppContainerProps {
  children?: ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => {
  const language = useSelector(localesSelectors.selectLocalesLanguage);
  const dispatch = useDispatch();
  const { lang } = useParams();

  useEffect(() => {
    dispatch(startupActions.startup());
    initializeFontFace();
  }, [dispatch]);

  useEffect(() => {
    dispatch(localesActions.setLanguage(lang || DEFAULT_LOCALE));
  }, [lang, dispatch]);

  if (!language) {
    return null;
  }

  const componentProps = {
    language,
    children,
  };

  return <AppComponent {...componentProps} />;
};
