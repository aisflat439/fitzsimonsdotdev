import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme';
import HeadingGroup from '../HeadingGroup';

describe('<HeadingGroup />', () => {
  const setup = (overrides) => {
    const props = {
      component: 'h2',
      title: 'Any string',
      ...overrides
    };

    const R = render(
      <ThemeProvider theme={theme}>
        <HeadingGroup {...props} />
      </ThemeProvider>
    );

    return {
      ...R,
      props
    };
  };

  it('renders the title', () => {
    const { getByText } = setup({ title: 'Some title' });

    expect(getByText('Some title')).toBeInTheDocument();
  });

  it('renders the title as an h1', () => {
    const { getByText } = setup({ component: 'h1', title: 'Some title' });

    expect(getByText('Some title')).toContainHTML('<h1>Some title</h1>');
  });

  it('renders the title as an h1, when passed uppercase component props', () => {
    const { getByText } = setup({ component: 'H1', title: 'Some title' });

    expect(getByText('Some title')).toContainHTML('<h1>Some title</h1>');
  });
});
