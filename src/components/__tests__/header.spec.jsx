import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

import Header from '../header';

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
});
