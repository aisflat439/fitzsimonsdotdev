import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

import Header from '../header';

jest.mock('@material-ui/core/AppBar', () => ({ children }) => <div>{children}</div>);
jest.mock('@material-ui/core/Toolbar', () => ({ children }) => <div>{children}</div>);
jest.mock('@material-ui/core/Typography', () => ({ children }) => <div>{children}</div>);
jest.mock('@material-ui/core/Hidden', () => ({ children }) => <div>{children}</div>);
jest.mock('@material-ui/core/Slide', () => ({ children }) => <div>{children}</div>);
jest.mock('@material-ui/core/Link', () => 'Link');

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));

const renderWith = (overrides) => {
  const props = {
    siteTitle: 'OMG the Site!',
    ...overrides
  };

  return render(
    <ThemeProvider theme={theme}>
      <Header {...props} />
    </ThemeProvider>
  );
};

describe('Header', () => {
  it('renders correctly', () => {
    const { getAllByText } = renderWith({
      siteTitle: 'Title'
    });

    expect(getAllByText(/Title/i)[0]).toBeInTheDocument();
  });

  it('dispatches toggle theme mode on click', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    const { getByTestId } = renderWith();

    expect(mockDispatch).not.toHaveBeenCalled();
    fireEvent.click(getByTestId('theme-toggle'));
    expect(mockDispatch).toHaveBeenCalled();
  });
});
