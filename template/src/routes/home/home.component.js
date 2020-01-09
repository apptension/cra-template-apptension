import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { FormattedMessage } from 'react-intl';
import messages from './home.messages';
import { LanguageSwitcher } from '../../shared/components/languageSwitcher';
import { Container, Logo } from './home.styles';
import { H1 } from '../../theme/typography';

export const HomeComponent = ({ formatMessage }) => (
  <Container>
    <Helmet title={formatMessage(messages.pageTitle)} />

    <H1>
      <FormattedMessage {...messages.welcome} />
    </H1>

    <Logo />

    <LanguageSwitcher />
  </Container>
);

HomeComponent.propTypes = {
  formatMessage: PropTypes.func.isRequired,
};
