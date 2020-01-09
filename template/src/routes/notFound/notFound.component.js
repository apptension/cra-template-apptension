import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './notFound.messages';
import { Container } from './notFound.styles';
import { H1 } from '../../theme/typography';

export const NotFoundComponent = ({ formatMessage }) => (
  <Container>
    <Helmet title={formatMessage(messages.pageTitle)} />

    <H1>
      <FormattedMessage {...messages.title} />
    </H1>
  </Container>
);

NotFoundComponent.propTypes = {
  formatMessage: PropTypes.func.isRequired,
};
