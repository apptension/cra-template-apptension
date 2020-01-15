import React from 'react';

import { makeContextRenderer } from 'utils/testUtils';
import { NotFoundComponent as NotFound } from '../notFound.component';

describe('NotFound: Component', () => {
  const defaultProps = {};

  const component = props => <NotFound {...defaultProps} {...props} />;
  const render = makeContextRenderer(component);

  it('should render correctly', () => {
    const { container } = render();
    expect(container).toMatchSnapshot();
  });
});
