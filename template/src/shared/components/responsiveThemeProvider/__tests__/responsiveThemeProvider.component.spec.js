import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { ResponsiveThemeProvider } from '../responsiveThemeProvider.component';

describe('ResponsiveThemeProvider: Component', () => {
  const defaultProps = {
    theme: {
      children: 'content',
      theme: {
        foo: 'bar',
      },
    },
  };

  const component = props => <ResponsiveThemeProvider {...defaultProps} {...props} />;

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    expect(wrapper).toMatchSnapshot();
  });

  describe('theme only contains primitive types', () => {
    it('should pass theme to provider', () => {
      const wrapper = render();
      expect(wrapper.find(ThemeProvider).prop('theme')).toEqual(defaultProps.theme);
    });
  });

  describe('theme contains functions', () => {
    const theme = {
      foo: 'bar',
      fn: () => 100,
    };

    it('should pass function result to theme', () => {
      const wrapper = render({ theme });
      expect(wrapper.find(ThemeProvider).prop('theme')).toEqual({
        foo: 'bar',
        fn: 100,
      });
    });
  });
});
