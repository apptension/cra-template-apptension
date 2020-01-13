import React from 'react';

import { makeContextRenderer, spiedHistory } from 'utils/testUtils';
import { screen, fireEvent } from '@testing-library/react';
import { LanguageSwitcher } from '../index';
import { DEFAULT_LOCALE } from '../../../../i18n';

describe('LanguageSwitcher: Component', () => {
  const defaultProps = {};

  const component = props => <LanguageSwitcher {...defaultProps} {...props} />;
  const render = makeContextRenderer(component);

  it('should redirect after option click', () => {
    const { history, pushSpy } = spiedHistory(`/${DEFAULT_LOCALE}/some/custom/url`);
    render({}, { router: { history, routePath: '/:lang/some/custom/url' } });

    const event = { target: { value: 'pl' } };
    fireEvent.change(screen.getByRole('listbox'), event);

    expect(pushSpy).toHaveBeenCalledTimes(1);
    expect(pushSpy).toHaveBeenCalledWith('/pl/some/custom/url');
  });
});
