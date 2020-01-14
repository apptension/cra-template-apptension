import React from 'react';
import { shallow } from 'enzyme';
import useRouter from 'use-react-router';

import { LanguageSwitcher } from '../languageSwitcher.component';
import { Select } from '../languageSwitcher.styles';
import { DEFAULT_LOCALE } from '../../../../i18n';
import { store as mockStore } from '../../../../../fixtures/store';

jest.mock('react-redux', () => ({
  useSelector: selector => selector(mockStore),
}));

jest.mock('use-react-router');

describe('LanguageSwitcher: Component', () => {
  const defaultProps = {
    language: DEFAULT_LOCALE,
  };

  const component = props => <LanguageSwitcher {...defaultProps} {...props} />;

  beforeEach(() => {
    useRouter.mockReturnValue({
      match: { params: { lang: DEFAULT_LOCALE }, url: `/${DEFAULT_LOCALE}/some/custom/url` },
      history: { push: () => {} },
    });
  });

  afterEach(() => {
    useRouter.mockClear();
  });

  it('should redirect after option click', () => {
    const pushSpy = jest.fn();

    useRouter.mockReturnValue({
      match: { params: { lang: DEFAULT_LOCALE }, url: `/${DEFAULT_LOCALE}/some/custom/url` },
      history: { push: pushSpy },
    });

    const wrapper = shallow(component());

    const event = { target: { value: 'not-default' } };
    wrapper.find(Select).prop('onChange')(event);

    expect(pushSpy).toHaveBeenCalledTimes(1);
    expect(pushSpy).toHaveBeenCalledWith('/not-default/some/custom/url');
  });
});
