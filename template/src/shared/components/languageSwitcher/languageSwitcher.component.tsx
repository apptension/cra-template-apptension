import React from 'react';
import PropTypes from 'prop-types';

import { Select } from './languageSwitcher.styles';

interface LanguageSwitcherProps {
  language: string;
  locales: string[];
  handleChange?: React.ChangeEventHandler;
}

export const LanguageSwitcherComponent = ({ language, locales, handleChange }: LanguageSwitcherProps) => (
  <Select value={language} onChange={handleChange}>
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
