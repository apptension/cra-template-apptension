import React from 'react';
import { identity } from 'ramda';
import { intlMock } from '../src/shared/utils/testUtils';

export const formatMessage = identity;
export const defineMessages = identity;

// eslint-disable-next-line react/prop-types
export const FormattedMessage = ({ id, values }) => (
  <span>
    {id} / {values}
  </span>
);

export const useIntl = () => intlMock();

// eslint-disable-next-line react/prop-types
export const IntlProvider = ({ children }) => <div>{children}</div>;
