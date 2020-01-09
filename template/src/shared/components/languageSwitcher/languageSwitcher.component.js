import React from 'react';
import PropTypes from 'prop-types';

import { Select } from './languageSwitcher.styles';

export const LanguageSwitcherComponent = ({ language, locales, handleChange }) => (
  <Select value={language} onChange={handleChange} data-testid="select">
    {locales.map(locale => (
      <option key={locale} value={locale}>
        {locale}
      </option>
    ))}
  </Select>
);

LanguageSwitcherComponent.propTypes = {
  language: PropTypes.string.isRequired,
  locales: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};
