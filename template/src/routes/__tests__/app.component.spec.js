import React from 'react';
import { DEFAULT_LOCALE, LOCALES } from '../../i18n';
import { App } from '../app.component';
import initializeFonts from '../../theme/initializeFontFace';
import { makePropsRenderer } from '../../shared/utils/testUtils';
import { store as mockStore } from '../../../fixtures/store';
import { setLanguage } from '../../modules/locales';
import { startup } from '../../modules/startup';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: selector => selector(mockStore),
  useDispatch: () => mockDispatch,
}));

jest.mock('../../theme/initializeFontFace');
jest.mock('../../theme/theme', () => ({
  color: {
    white: '#fffffff',
  },
  font: {
    primary: 'OpenSans',
  },
}));

describe('App: Component', () => {
  const children = <div className="app__children">Children</div>;

  const component = props => <App {...props}>{children}</App>;
  const render = makePropsRenderer(component);

  afterEach(() => {
    mockDispatch.mockClear();
    initializeFonts.mockClear();
  });

  it('should not render App when language is not set', () => {
    const { container } = render();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render App when language is set', () => {
    const { container } = render();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should set proper language based on url', () => {
    render();
    expect(mockDispatch).toHaveBeenCalledWith(setLanguage(LOCALES.POLISH));
  });

  it('should set default language based on url when url is not matched', () => {
    render();
    expect(mockDispatch).toHaveBeenCalledWith(setLanguage(DEFAULT_LOCALE));
  });

  it('should set proper language when url changes', () => {
    const wrapper = mount(component());

    mockDispatch.mockClear();

    // force enzyme to re-render using new hook values
    wrapper.setProps({});

    expect(mockDispatch).toHaveBeenCalledWith(setLanguage(LOCALES.ENGLISH));
  });

  it('should call startup on mount', () => {
    render();
    expect(mockDispatch).toHaveBeenCalledWith(startup());
  });

  it('should initialize fonts on mount', () => {
    render();
    expect(initializeFonts).toHaveBeenCalled();
  });
});
