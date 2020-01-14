import React from 'react';
import { shallow } from 'enzyme';

import { NotFound } from '../notFound.component';

describe('NotFound: Component', () => {
  const defaultProps = {};

  const component = props => <NotFound {...defaultProps} {...props} />;

  it('should render correctly', () => {
    const wrapper = shallow(component());
    expect(wrapper).toMatchSnapshot();
  });
});
