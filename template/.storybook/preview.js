import { addDecorator } from '@storybook/react';
import 'normalize.css/normalize.css';

import { withFontFace, withIntl, withTheme } from './decorators';
import { index } from '../src/theme/theme';

addDecorator(withIntl);
addDecorator(withTheme(index));
addDecorator(withFontFace);
