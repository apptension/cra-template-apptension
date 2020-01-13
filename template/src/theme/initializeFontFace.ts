/* eslint-disable import/no-dynamic-require */
import { font } from './theme';

function fontFace(
  name: string,
  src: string,
  fontWeight = 'normal',
  fontStyle = 'normal',
  extensions = ['woff2', 'woff', 'ttf'],
  formats = ['woff2', 'woff', 'truetype']
) {
  const sources = extensions
    .map((ext, index) => `url(${require('../fonts/' + src + `.${ext}`)}) format("${formats[index]}")`)
    .join(',');

  return `
    @font-face{
        font-family: "${name}";
        src: ${sources};

        font-weight: ${fontWeight};
        font-style: ${fontStyle};
    }
  `;
}
/* eslint-enable import/no-dynamic-require */

const generateFontsString = () => [fontFace(font.primary, 'OpenSans')].join('\n');

export default () => {
  const style = document.createElement('style');
  style.innerHTML = generateFontsString();
  document.head.appendChild(style);
};
