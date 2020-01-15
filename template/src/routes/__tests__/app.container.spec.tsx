import React from 'react';
import { AppContainerProps } from 'react-hot-loader';
import { DEFAULT_LOCALE, LOCALES } from '../../i18n';
import initializeFonts from '../../theme/initializeFontFace';
import { store as mockStore } from '../../../fixtures/store';
import { localesActions } from '../../modules/locales';
import { startupActions } from '../../modules/startup';
import { AppContainer } from '../app.container';
import { makePropsRenderer, PLACEHOLDER_CONTENT } from '../../shared/utils/testUtils';

const mockDispatch = jest.fn();
const mockParams = jest.fn();

const defaultProps = {
  children: PLACEHOLDER_CONTENT,
};

jest.mock('react-router-dom', () => ({
  useParams: () => mockParams(),
}));

jest.mock('react-redux', () => ({
  useSelector: (selector: (state: any) => any) => selector(mockStore),
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

describe('App: Container', () => {
  const component = (props: Partial<AppContainerProps>) => <AppContainer {...defaultProps} {...props} />;
  const render = makePropsRenderer(component);

  afterEach(() => {
    mockParams.mockClear();
  });

  it('should set proper language based on url', () => {
    mockParams.mockReturnValue({ lang: 'pl' });
    render();
    expect(mockDispatch).toHaveBeenCalledWith(localesActions.setLanguage(LOCALES.POLISH));
  });

  it('should set default language language is not matched', () => {
    mockParams.mockReturnValue({ lang: null });
    render();
    expect(mockDispatch).toHaveBeenCalledWith(localesActions.setLanguage(DEFAULT_LOCALE));
  });

  it('should update language when url changes', () => {
    mockParams.mockReturnValue({ lang: 'pl' });
    render();
    mockDispatch.mockClear();
    mockParams.mockReturnValue({ lang: 'en' });
    render();
    expect(mockDispatch).toHaveBeenCalledWith(localesActions.setLanguage(LOCALES.ENGLISH));
  });

  it('should call startup on mount', () => {
    render();
    expect(mockDispatch).toHaveBeenCalledWith(startupActions.startup());
  });

  it('should initialize fonts on mount', () => {
    render();
    expect(initializeFonts).toHaveBeenCalled();
  });
});
