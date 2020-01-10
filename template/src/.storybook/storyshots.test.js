import React from 'react';
import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots';
import { addSerializer } from 'jest-specific-snapshot';
import { styleSheetSerializer } from 'jest-styled-components/serializer';
import { render } from '@testing-library/react';

addSerializer(styleSheetSerializer);

initStoryshots({
  configPath: './src/.storybook',
  framework: 'react',
  test: ({ story, context }) => {
    const converter = new Stories2SnapsConverter({
      snapshotsDirName: './__tests__/__snapshots__',
    });
    const snapshotFilename = converter.getSnapshotFileName(context);
    const storyElement = story.render(context);

    const {container} = render(storyElement)
    expect(container).toMatchSpecificSnapshot(snapshotFilename);
  },
});
