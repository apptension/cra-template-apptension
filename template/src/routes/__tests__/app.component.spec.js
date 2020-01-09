import React from 'react';
import { makePropsRenderer, PLACEHOLDER_CONTENT } from '../../shared/utils/testUtils';
import { AppComponent } from '../app.component';
import { DEFAULT_LOCALE } from '../../i18n';

const defaultProps = {
  children: PLACEHOLDER_CONTENT,
  language: DEFAULT_LOCALE,
};

describe('App: Component', () => {
  const component = props => <AppComponent {...defaultProps} {...props} />;
  const render = makePropsRenderer(component);

  it('should render App when language is set', () => {
    const { container } = render();
    expect(container).toMatchSnapshot();
  });
});
