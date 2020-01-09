import React from 'react';
import { makePropsRenderer, PLACEHOLDER_CONTENT } from 'utils/testUtils';
import { DEFAULT_LOCALE, LOCALES } from '../../i18n';
import initializeFonts from '../../theme/initializeFontFace';
import { store as mockStore } from '../../../fixtures/store';
import { setLanguage } from '../../modules/locales';
import { startup } from '../../modules/startup';
import { AppContainer } from '../app.container';

const mockDispatch = jest.fn();
const mockParams = jest.fn();

const defaultProps = {
  children: PLACEHOLDER_CONTENT,
};

jest.mock('react-router-dom', () => ({
  useParams: () => mockParams(),
}));

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

describe('App: Container', () => {
  const component = props => <AppContainer {...defaultProps} {...props} />;
  const render = makePropsRenderer(component);

  afterEach(() => {
    mockParams.mockClear();
  });

  it('should set proper language based on url', () => {
    mockParams.mockReturnValue({ lang: 'pl' });
    render();
    expect(mockDispatch).toHaveBeenCalledWith(setLanguage(LOCALES.POLISH));
  });

  it('should set default language language is not matched', () => {
    mockParams.mockReturnValue({ lang: null });
    render();
    expect(mockDispatch).toHaveBeenCalledWith(setLanguage(DEFAULT_LOCALE));
  });

  it('should update language when url changes', () => {
    mockParams.mockReturnValue({ lang: 'pl' });
    render();
    mockDispatch.mockClear();
    mockParams.mockReturnValue({ lang: 'en' });
    render();
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
