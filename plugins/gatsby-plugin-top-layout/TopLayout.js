import React from 'react';
import T from 'prop-types';
import { Helmet } from 'react-helmet';

export default function TopLayout({ children }) {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Limelight:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </>
  );
}

TopLayout.propTypes = {
  children: T.node.isRequired,
};
