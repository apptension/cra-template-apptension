import { withIntl, withTheme } from './decorators';
import { theme } from '../src/theme/theme';
import { addDecorator } from '@storybook/react';

addDecorator(withIntl);
addDecorator(withTheme(theme));
