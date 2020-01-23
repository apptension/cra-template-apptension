import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useTheme } from '../useTheme.hook';
import { ProvidersWrapper as MockProviders } from '../../../utils/testUtils';
import { theme } from '../../../../theme/theme';

describe('useTheme: Hook', () => {
  it('should return context theme', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <MockProviders context={{}}>{children}</MockProviders>,
    });
    // only comparing keys
    // can't compare values because theme is just a definition
    // and any functions are invoked with current context before being injected into context theme
    expect(Object.keys(result.current).sort()).toEqual(Object.keys(theme).sort());
  });
});
