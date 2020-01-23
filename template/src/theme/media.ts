import { css } from 'styled-components';

export enum Breakpoint {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
  DESKTOP_WIDE = 'desktopWide',
  DESKTOP_FULL = 'desktopFull',
}

export const sizes: Record<Breakpoint, number> = {
  [Breakpoint.DESKTOP_FULL]: 1920,
  [Breakpoint.DESKTOP_WIDE]: 1440,
  [Breakpoint.DESKTOP]: 1280,
  [Breakpoint.TABLET]: 768,
  [Breakpoint.MOBILE]: 320,
};

export const sizesOrdered: Breakpoint[] = [
  Breakpoint.MOBILE,
  Breakpoint.TABLET,
  Breakpoint.DESKTOP,
  Breakpoint.DESKTOP_WIDE,
  Breakpoint.DESKTOP_FULL,
];

const getWindowWidth = () => window.innerWidth;

export const getBreakpointMediaQuery = (breakpoint: Breakpoint) => `(min-width: ${sizes[breakpoint]}px)`;

export const media = Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (...args: any[]) => css`
    @media (min-width: ${sizes[label as Breakpoint]}px) {
      // @ts-ignore
      ${css(...args)}
    }
  `;
  acc[`${label}Retina`] = (...args: any[]) => css`
    @media (min-width: ${sizes[label as Breakpoint]}px) and (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi) {
      // @ts-ignore
      ${css(...args)}
    }
  `;
  acc[`${label}Landscape`] = (...args: any[]) => css`
    @media (min-width: ${sizes[label as Breakpoint]}px) and (orientation: landscape) {
      // @ts-ignore
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const isMobile = () => {
  const width = getWindowWidth();
  return width < sizes[Breakpoint.TABLET];
};

export const isTablet = () => {
  const width = getWindowWidth();
  return width >= sizes[Breakpoint.TABLET] && width < sizes[Breakpoint.DESKTOP];
};

export const isDesktop = () => {
  const width = getWindowWidth();
  return width >= sizes[Breakpoint.DESKTOP];
};

export const responsiveValue = <T>(defaultValue: T, config: { [key: string]: T } = {}) => () => {
  let match = defaultValue;
  sizesOrdered.forEach(size => {
    if (config[size] && window.matchMedia(getBreakpointMediaQuery(size)).matches) {
      match = config[size];
    }
  });
  return match;
};
