import React from 'react';
import { render } from '@testing-library/react';

import ContactMeDialog from '../ContactMeDialog';

jest.mock('../Contact', () => () => 'MockContact');
jest.mock('../NewsletterSignup', () => () => 'MockNewsletterSignup');

const renderWith = (overrides) => {
  const props = {
    title: 'the button title',
    form: 'contact',
    ...overrides,
  };

  return render(<ContactMeDialog {...props} />);
};

describe('<ContactMeDialog />', () => {
  it('renders the contact forms', () => {
    const { getByText } = renderWith({
      form: 'contact',
    });

    expect(getByText(/MockNewsletterSignup/i)).toBeInTheDocument();
    expect(getByText(/MockContact/i)).toBeInTheDocument();
  });
});
