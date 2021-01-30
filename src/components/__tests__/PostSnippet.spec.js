import React from 'react';
import { render } from '@testing-library/react';

import PostSnippet from '../PostSnippet';

jest.mock('gatsby-plugin-mdx', () => ({
    // eslint-disable-next-line react/prop-types
    MDXRenderer: jest.fn(({ children }) => <div>{children}</div>),
}));
jest.mock('../HeadingGroup', () => () => 'MOCK_heading-group');
jest.mock('../seo', () => () => 'MOCK_seo');

describe('<PostSnippet />', () => {
    const setup = (overrides) => {
        const props = {
            title: 'Some title',
            timeToRead: 4,
            slug: '/some/path',
            content: 'a bunch of content',
            ...overrides
        };

        const R = render(<PostSnippet {...props} />);

        return {
            ...R,
            props
        };
    };

    it('renders our the time to read', () => {
        const { getByText } = setup({ timeToRead: 55 });

        expect(getByText(/55 minutes/)).toBeInTheDocument();
    });
});
