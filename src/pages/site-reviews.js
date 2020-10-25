import React from 'react';
import { graphql } from 'gatsby';
import T from 'prop-types';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import VideoListing from '../components/VideoListing';
import HeadingGroup from '../components/HeadingGroup';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SiteReviews = ({ data }) => (
  <Layout>
    <SEO title="Site Reviews" keywords={['eCommerce', 'eCommerce development', 'Shopify', 'youtube']} />
    <HeadingGroup title="Site Reviews" component="h1" />
    <StyledList>
      {data.allYoutubeVideo.edges.map(({ node: video }) => (
        <VideoListing key={video.publishedAt} video={video} />
      )).sort((a, b) => new Date(b.props.video.publishedAt) - new Date(a.props.video.publishedAt))}
    </StyledList>
  </Layout>
);

export const query = graphql`
query {
  allYoutubeVideo(filter: {publishedAt: {gt: "2020"}}, limit: 10) {
    edges {
      node {
        description
        title
        publishedAt
        videoId
        localThumbnail {
          childImageSharp {
            fixed(height: 80, width: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
}
`;

SiteReviews.propTypes = {
  data: T.shape({
    allYoutubeVideo: T.shape().isRequired
  }).isRequired
};

export default SiteReviews;
