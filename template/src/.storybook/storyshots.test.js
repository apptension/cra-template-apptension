import initStoryshots, { multiSnapshotWithOptions, Stories2SnapsConverter } from '@storybook/addon-storyshots';
import { render } from "@testing-library/react";
import React from 'react';

const reactTestingLibrarySerializer = {
  print: (val, serialize, indent) => serialize(val.container),
  test: (val) => val && val.hasOwnProperty("container")
};

initStoryshots({
  configPath: './src/.storybook',
  framework: 'react',
  shallowSnapshot: true,
  snapshotSerializers: [reactTestingLibrarySerializer],
  test: multiSnapshotWithOptions({
    renderer: render
  }),

  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotsDirName: './__tests__/__snapshots__',
  }),
});
