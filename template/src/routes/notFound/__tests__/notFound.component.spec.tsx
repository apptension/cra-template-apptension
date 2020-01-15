import React from 'react';

import { makeContextRenderer } from 'utils/testUtils';
import { NotFoundComponent as NotFound } from '../notFound.component';

describe('NotFound: Component', () => {
  const component = () => <NotFound />;
  const render = makeContextRenderer(component);

  it('should render correctly', () => {
    const { container } = render();
    expect(container).toMatchSnapshot();
  });
});
