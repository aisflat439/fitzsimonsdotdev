import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Contact from '../Contact';

describe('<Contact />', () => {
  const setup = (overrides) => {
    const props = {
      handleClose: jest.fn(),
      ...overrides
    };

    const R = render(<Contact {...props} />);

    return {
      ...R,
      props
    };
  };

  beforeAll(() => {
    // eslint-disable-next-line no-console
    console.error = jest.fn();
  });

  afterAll(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  it('calls fetch on submit', async () => {
    global.fetch = jest.fn(() => Promise.resolve());
    jest.spyOn(global, 'fetch');

    const { getByRole, getByPlaceholderText } = setup();

    expect(global.fetch).not.toHaveBeenCalled();

    userEvent.type(getByPlaceholderText('Prince'), 'Bob');
    userEvent.type(getByPlaceholderText('Nelson'), 'Dylan');
    userEvent.type(getByPlaceholderText('email@mail.com'), 'bobdylan@music.com');
    userEvent.click(getByRole('button'));

    expect(await global.fetch).toHaveBeenCalled();
  });

  it('calls handleClose on submit', async () => {
    const handleClose = jest.fn();
    global.fetch = jest.fn(() => Promise.resolve());

    const { getByRole, getByPlaceholderText } = setup({ handleClose });

    expect(handleClose).not.toHaveBeenCalled();

    userEvent.type(getByPlaceholderText('Prince'), 'Bob');
    userEvent.type(getByPlaceholderText('Nelson'), 'Dylan');
    userEvent.type(getByPlaceholderText('email@mail.com'), 'bobdylan@music.com');
    userEvent.click(getByRole('button'));

    expect(await handleClose).toHaveBeenCalled();
  });
});
