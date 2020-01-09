import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ResponsiveThemeProvider } from '../responsiveThemeProvider.component';
import { makePropsRenderer, screen, getNodeText } from '../../../utils/testUtils';

const ThemeConsumer = () => {
  const theme = useContext(ThemeContext);
  return <div data-testid="content">{theme.foo}</div>;
};

describe('ResponsiveThemeProvider: Component', () => {
  const defaultProps = {
    children: <ThemeConsumer />,
    theme: {
      foo: 'bar',
    },
  };

  const component = props => <ResponsiveThemeProvider {...defaultProps} {...props} />;
  const render = makePropsRenderer(component);

  describe('theme only contains primitive types', () => {
    it('should use theme in child elements', () => {
      render();
      const content = screen.getByTestId('content');
      expect(getNodeText(content)).toEqual('bar');
    });
  });

  describe('theme contains functions', () => {
    const theme = {
      foo: () => 100,
    };

    it('should pass function result to theme', () => {
      render({ theme });
      const content = screen.getByTestId('content');
      expect(getNodeText(content)).toEqual('100');
    });
  });
});
