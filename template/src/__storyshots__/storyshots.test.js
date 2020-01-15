import { paramCase } from 'param-case';
import initStoryshots from '@storybook/addon-storyshots';
import { addSerializer } from 'jest-specific-snapshot';
import { styleSheetSerializer } from 'jest-styled-components/serializer';
import { render } from '@testing-library/react';

addSerializer(styleSheetSerializer);

initStoryshots({
  configPath: './.storybook',
  framework: 'react',
  test: ({ story, context }) => {
    const storyElement = story.render(context);
    const filename = paramCase(story.kind);
    const { container } = render(storyElement);
    expect(container).toMatchSpecificSnapshot(`./__snapshots__/${filename}.snapshot`);
  },
});
