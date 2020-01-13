import React from 'react';
import { Helmet } from 'react-helmet-async';

import { FormattedMessage, useIntl } from 'react-intl';
import messages from './home.messages';
import { LanguageSwitcher } from '../../shared/components/languageSwitcher';
import { Container, Logo } from './home.styles';
import { H1 } from '../../theme/typography';

export const HomeComponent = () => {
  const { formatMessage } = useIntl();

  return (
    <Container>
      <Helmet title={formatMessage(messages.pageTitle)} />

      <H1>
        <FormattedMessage {...messages.welcome} />
      </H1>

      <Logo />

      <LanguageSwitcher />
    </Container>
  );
};
