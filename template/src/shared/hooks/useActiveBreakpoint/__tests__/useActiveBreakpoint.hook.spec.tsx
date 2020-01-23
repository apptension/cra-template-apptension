import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useActiveBreakpoint } from '../useActiveBreakpoint.hook';
import { Breakpoint } from '../../../../theme/media';
import { ProvidersWrapper as MockProviders } from '../../../utils/testUtils';

const matchMedia = jest.spyOn(window, 'matchMedia');

describe('useActiveBreakpoint: Hook', () => {
  beforeEach(() => {
    matchMedia.mockReset();
  });

  describe('for mobile', () => {
    beforeEach(() => {
      // @ts-ignore
      matchMedia.mockReturnValue({ matches: false });
    });

    it('should return Breakpoint.MOBILE', () => {
      const { result } = renderHook(() => useActiveBreakpoint(), {
        wrapper: ({ children }) => <MockProviders context={{}}>{children}</MockProviders>,
      });
      expect(result.current).toBe(Breakpoint.MOBILE);
    });
  });

  describe('for desktop', () => {
    beforeEach(() => {
      // @ts-ignore
      matchMedia.mockReturnValue({ matches: true });
    });

    it('should return Breakpoint.DESKTOP_FULL', () => {
      const { result } = renderHook(() => useActiveBreakpoint(), {
        wrapper: ({ children }) => <MockProviders context={{}}>{children}</MockProviders>,
      });
      expect(result.current).toBe(Breakpoint.DESKTOP_FULL);
    });
  });
});
