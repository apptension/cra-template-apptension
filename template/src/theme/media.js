import { css } from 'styled-components';

export const Breakpoints = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop',
  DESKTOP_WIDE: 'desktopWide',
  DESKTOP_FULL: 'desktopFull',
};

export const sizes = {
  [Breakpoints.DESKTOP_FULL]: 1920,
  [Breakpoints.DESKTOP_WIDE]: 1440,
  [Breakpoints.DESKTOP]: 1280,
  [Breakpoints.TABLET]: 768,
  [Breakpoints.MOBILE]: 320,
};

export const sizesOrdered = [
  Breakpoints.MOBILE,
  Breakpoints.TABLET,
  Breakpoints.DESKTOP,
  Breakpoints.DESKTOP_WIDE,
  Breakpoints.DESKTOP_FULL,
];

const getWindowWidth = () => window.innerWidth;

export const getBreakpointMediaQuery = sizeLabel => `(min-width: ${sizes[sizeLabel]}px)`;

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  acc[`${label}Retina`] = (...args) => css`
    @media (min-width: ${sizes[label]}px) and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      ${css(...args)}
    }
  `;
  acc[`${label}Landscape`] = (...args) => css`
    @media (min-width: ${sizes[label]}px) and (orientation: landscape) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const isMobile = () => {
  const width = getWindowWidth();
  return width < sizes.tablet;
};

export const isTablet = () => {
  const width = getWindowWidth();
  return width >= sizes.tablet && width < sizes.desktop;
};

export const isDesktop = () => {
  const width = getWindowWidth();
  return width >= sizes.desktop;
};

export const responsiveValue = (defaultValue, config = {}) => () => {
  let match = defaultValue;
  sizesOrdered.forEach(size => {
    if (config[size] && window.matchMedia(getBreakpointMediaQuery(size)).matches) {
      match = config[size];
    }
  });
  return match;
};
