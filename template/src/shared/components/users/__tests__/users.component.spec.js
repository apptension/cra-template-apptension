import React from 'react';
import * as ReactRedux from 'react-redux';
import { screen, fireEvent } from '@testing-library/react';

import { makeContextRenderer } from 'utils/testUtils';
import { Users } from '..';
import { usersMock } from '../../../../../fixtures/users';

const dispatchSpy = jest.spyOn(ReactRedux, 'useDispatch');

describe('Users: Component', () => {
  const defaultProps = {};

  const component = props => <Users {...defaultProps} {...props} />;
  const render = makeContextRenderer(component);

  it('should render users', () => {
    const users = usersMock;

    render(
      {},
      {
        store: {
          users: {
            users,
          },
        },
      }
    );

    users.map(user => {
      expect(screen.getByText(user.name)).toBeInTheDocument;
    });
  });

  it('should call dispatch on button click', () => {
    const mockDispatch = jest.fn();
    dispatchSpy.mockImplementation(() => mockDispatch);

    render();

    fireEvent.click(screen.getByRole('button'));

    expect(mockDispatch).toHaveBeenCalled();
  });
});
