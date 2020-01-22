import { renderHook } from '@testing-library/react-hooks';
import { BreakpointQuery, useMediaQuery } from '../useMediaQuery.hook';
import { useActiveBreakpoint } from '../../useActiveBreakpoint';
import { Breakpoint } from '../../../../theme/media';

jest.mock('../../useActiveBreakpoint');

const render = (query: BreakpointQuery = {}) => renderHook(() => useMediaQuery(query));

describe('useMediaQuery: Hook', () => {
  beforeEach(() => {
    useActiveBreakpoint.mockReset();
  });

  it('should return true if no query defined', () => {
    const { result } = render();
    expect(result.current).toEqual({ matches: true });
  });

  describe('when matches props is specified', () => {
    it("should return false when given breakPoint name doesn't match current breakPoint", () => {
      useActiveBreakpoint.mockReturnValue(Breakpoint.TABLET);
      const { result } = render({ matches: Breakpoint.MOBILE });
      expect(result.current).toEqual({ matches: false });
    });

    it('should return true when given breakPoint name matches current breakPoint', () => {
      useActiveBreakpoint.mockReturnValue(Breakpoint.MOBILE);
      const { result } = render({ matches: Breakpoint.MOBILE });
      expect(result.current).toEqual({ matches: true });
    });
  });

  describe('when below prop is specified', () => {
    it('should return true if active breakpoint is smaller', () => {
      useActiveBreakpoint.mockReturnValue(Breakpoint.TABLET);
      const { result } = render({ below: Breakpoint.DESKTOP });
      expect(result.current).toEqual({ matches: true });
    });

    it('should return true if active breakpoint is equal', () => {
      useActiveBreakpoint.mockReturnValue(Breakpoint.DESKTOP);
      const { result } = render({ below: Breakpoint.DESKTOP });
      expect(result.current).toEqual({ matches: true });
    });

    it('should return false if active breakpoint larger', () => {
      useActiveBreakpoint.mockReturnValue(Breakpoint.DESKTOP_FULL);
      const { result } = render({ below: Breakpoint.DESKTOP });
      expect(result.current).toEqual({ matches: false });
    });
  });

  describe('when above prop is specified', () => {
    it('should return false if active breakpoint is smaller', () => {
      useActiveBreakpoint.mockReturnValue(Breakpoint.TABLET);
      const { result } = render({ above: Breakpoint.DESKTOP });
      expect(result.current).toEqual({ matches: false });
    });

    it('should return true if active breakpoint is equal', () => {
      useActiveBreakpoint.mockReturnValue(Breakpoint.DESKTOP);
      const { result } = render({ above: Breakpoint.DESKTOP });
      expect(result.current).toEqual({ matches: true });
    });

    it('should return true if active breakpoint is larger', () => {
      useActiveBreakpoint.mockReturnValue(Breakpoint.DESKTOP_FULL);
      const { result } = render({ above: Breakpoint.DESKTOP });
      expect(result.current).toEqual({ matches: true });
    });
  });
});
