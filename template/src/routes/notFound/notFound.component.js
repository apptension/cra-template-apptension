import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage, useIntl } from 'react-intl';

import messages from './notFound.messages';
import { Container } from './notFound.styles';
import { H1 } from '../../theme/typography';

export const NotFoundComponent = () => {
  const { formatMessage } = useIntl();

  return (
    <Container>
      <Helmet title={formatMessage(messages.pageTitle)} />

      <H1>
        <FormattedMessage {...messages.title} />
      </H1>
    </Container>
  );
};
