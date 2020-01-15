import React from 'react';
import * as ReactRedux from 'react-redux';
import { screen, fireEvent } from '@testing-library/react';

import { Users } from '..';
import { usersMock } from '../../../../../fixtures/users';
import { makeContextRenderer, prepareState } from '../../../utils/testUtils';

const dispatchSpy = jest.spyOn(ReactRedux, 'useDispatch');

describe('Users: Component', () => {
  const render = makeContextRenderer(() => <Users />);

  it('should render users', () => {
    const store = prepareState(defaultState => {
      defaultState.users.users = usersMock;
    });
    render({}, { store });

    usersMock.map(user => expect(screen.getByText(user.name)).toBeInTheDocument);
  });

  it('should call dispatch on button click', () => {
    const mockDispatch = jest.fn();
    dispatchSpy.mockImplementation(() => mockDispatch);

    render();

    fireEvent.click(screen.getByRole('button'));

    expect(mockDispatch).toHaveBeenCalled();
  });
});
