import React from 'react';
import { makePropsRenderer, fireEvent, screen } from 'utils/testUtils';
import { Button } from '../button.component';

describe('Button: Component', () => {
  const defaultProps = {};

  const component = props => <Button {...defaultProps} {...props} />;
  const render = makePropsRenderer(component);

  it('should render correctly', () => {
    const { container } = render();
    expect(container).toMatchSnapshot();
  });

  it('should call onClick prop when clicked', () => {
    const onClick = jest.fn();
    render({ onClick });
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should pass native HTML props directly to the button element', () => {
    render({ type: 'submit' });
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});
