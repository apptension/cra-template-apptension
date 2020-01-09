import React from 'react';
import { useIntl } from 'react-intl';

import { NotFoundComponent } from './notFound.component';

export const NotFoundContainer = () => {
  const { formatMessage } = useIntl();

  const componentProps = {
    formatMessage,
  };

  return <NotFoundComponent {...componentProps} />;
};
