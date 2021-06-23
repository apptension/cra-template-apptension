/* eslint-disable import/no-dynamic-require */
import { fontFamily } from './font';

function fontFace(
  name: string,
  files: { src: string; format: string }[],
  fontWeight = 'normal',
  fontStyle = 'normal'
): string {
  const sources = files.map(({ src, format }, index) => `url(${src}) format("${format}")`).join(',');

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

const generateFontsString = (): string => [
  fontFace(fontFamily.primary, [{ src: 'OpenSans', format: 'woff' }])
].join('\n');

export default (): void => {
  const style = document.createElement('style');
  style.innerHTML = generateFontsString();
  document.head.appendChild(style);
};
