import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '../button.component';
import { Container } from '../button.styles';

describe('Button: Component', () => {
  const defaultProps = {};

  const component = props => <Button {...defaultProps} {...props} />;

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onClick prop when clicked', () => {
    const onClick = jest.fn();
    const wrapper = render({ onClick });
    wrapper.find(Container).simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should pass native HTML props directly to the button element', () => {
    const wrapper = render({ type: 'submit' });
    expect(wrapper.find(Container)).toHaveProp('type', 'submit');
  });
});
