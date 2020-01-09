import React from 'react';

import { useIntl } from 'react-intl';
import { HomeComponent } from './home.component';

export const HomeContainer = () => {
  const { formatMessage } = useIntl();

  const componentProps = {
    formatMessage,
  };

  return <HomeComponent {...componentProps} />;
};
