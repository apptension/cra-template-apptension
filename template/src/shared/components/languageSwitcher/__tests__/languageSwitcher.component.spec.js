import React from 'react';

import { fireEvent, makeContextRenderer, spiedHistory } from 'utils/testUtils';
import { LanguageSwitcher } from '../languageSwitcher.component';
import { DEFAULT_LOCALE } from '../../../../i18n';

describe('LanguageSwitcher: Component', () => {
  const defaultProps = {};

  const component = props => <LanguageSwitcher {...defaultProps} {...props} />;
  const render = makeContextRenderer(component);

  it('should redirect after option click', () => {
    const { history, pushSpy } = spiedHistory(`/${DEFAULT_LOCALE}/`);
    const { container } = render({ history });

    const event = { target: { value: 'something-else' } };
    fireEvent.change(container.firstChild, event);

    expect(pushSpy).toHaveBeenCalledTimes(1);
    expect(pushSpy).toHaveBeenCalledWith('/something-else/some/custom/url');
  });
});
