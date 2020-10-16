import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme';
import Tag from '../Tag';

describe('<Tag />', () => {
  const setup = (overrides) => {
    const props = {
      count: 6,
      title: 'Any string',
      ...overrides
    };

    const R = render(
      <ThemeProvider theme={theme}>
        <Tag {...props} />
      </ThemeProvider>
    );

    return {
      ...R,
      props
    };
  };

  it('renders the title and count', () => {
    const { getByText } = setup({ count: 12, title: 'Some title' });

    expect(getByText('Some title')).toBeInTheDocument();
    expect(getByText('12')).toBeInTheDocument();
  });

  it('renders the title as an href with no spaces', () => {
    const { getByText } = setup({ count: 12, title: 'No code' });

    expect(getByText('No code').closest('a')).toHaveAttribute('href', '/categories/no-code');
  });
});
