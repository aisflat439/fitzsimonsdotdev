
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Provider } from "react-redux"
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import createStore from "../../src/redux/createStore"
import theme from '../../src/theme';

export default function TopLayout(props) {
    // Instantiating store in `wrapRootElement` handler ensures:
    //  - there is fresh store for each SSR page
    //  - it will be called only once in browser, when React mounts
    const store = createStore()

    return (
        <Provider store={store}>
            <Helmet>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </Provider>
    );
}

TopLayout.propTypes = {
    children: PropTypes.node,
};