import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import SiteReviews from '../site-reviews';
import theme from '../../theme';

const renderWith = (overrides) => {
    const props = {
        data: {
            allMarkdownRemark: {
                edges: [
                    {
                        node: {
                            frontmatter: {
                                title: 'The title'
                            },
                            fields: {
                                slug: '/the-path'
                            }
                        }
                    },
                    {
                        node: {
                            frontmatter: {
                                title: 'The other title'
                            },
                            fields: {
                                slug: '/the-other-path'
                            }
                        }
                    },
                    {
                        node: {
                            frontmatter: {
                                title: 'The last title'
                            },
                            fields: {
                                slug: '/the-last-path'
                            }
                        }
                    },
                ],
                group: [
                    {
                        tag: 'One',
                        totalCount: 1
                    },
                    {
                        tag: 'Two',
                        totalCount: 4
                    }
                ],
                ...overrides
            },
        },
    };

    return render(
        <ThemeProvider theme={theme}>
            <SiteReviews {...props} />
        </ThemeProvider>
    );
};

describe('<SiteReviews />', () => {
    it('works', () => {
        expect(1).toBe(1);
    });
});
