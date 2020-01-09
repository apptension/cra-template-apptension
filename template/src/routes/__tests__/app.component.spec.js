import React from 'react';
import { makePropsRenderer } from '../../shared/utils/testUtils';
import { AppComponent } from '../app.component';
import { DEFAULT_LOCALE } from '../../i18n';

const defaultProps = {
  children: <div className="app__children">Children</div>,
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
