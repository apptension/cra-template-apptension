import React, { FC } from 'react';

import { Select } from './languageSwitcher.styles';

interface LanguageSwitcherProps {
  language: string;
  locales: string[];
  handleChange?: React.ChangeEventHandler;
}

export const LanguageSwitcherComponent: FC<LanguageSwitcherProps> = ({ language, locales, handleChange }) => (
  <Select value={language} onChange={handleChange}>
    {locales.map(locale => (
      <option key={locale} value={locale}>
        {locale}
      </option>
    ))}
  </Select>
);
