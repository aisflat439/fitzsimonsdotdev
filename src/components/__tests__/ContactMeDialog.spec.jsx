import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import ContactMeDialog from '../ContactMeDialog';

// eslint-disable-next-line react/prop-types
jest.mock('@material-ui/core/Link', () => ({ children }) => (
  <div>{children}</div>
));
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
  it("renders the contact form title when passed form='contact'", () => {
    const { getByText } = renderWith({
      form: 'contact',
    });

    expect(getByText(/request a site review/i)).toBeInTheDocument();
    expect(getByText(/MockContact/i)).toBeInTheDocument();
  });

  it('renders the Newsletter signup when passed form is not passed contact', () => {
    const { getByText, getByTestId } = renderWith({
      form: 'anything else',
    });

    expect(getByTestId('newsletter-title')).toBeInTheDocument();
    expect(getByText(/MockNewsletterSignup/i)).toBeInTheDocument();
  });

  it('handles opening of the modal', async () => {
    const { getByText } = renderWith({
      title: 'buttonTitle',
    });

    fireEvent.click(getByText('buttonTitle'));

    await waitFor(() => {
      expect(getByText('Request a site review')).toBeInTheDocument();
    });
  });
});
