import React from 'react';
import { graphql } from 'gatsby';
import T from 'prop-types';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout';
import SEO from '../components/seo';
import VideoListing from '../components/VideoListing';

const SiteReviews = ({ data }) => (
  <Layout>
    <SEO title="Site Reviews" keywords={['eCommerce', 'eCommerce development', 'Shopify', 'youtube']} />
    <Typography variant="h3" component="h1">Site Reviews</Typography>
    <List>
      {data.allYoutubeVideo.edges.map(({ node: video }) => (
        <VideoListing key={video.publishedAt} video={video} />
      )).sort((a, b) => new Date(b.props.video.publishedAt) - new Date(a.props.video.publishedAt))}
    </List>
  </Layout>
);

export const query = graphql`
query {
  allYoutubeVideo(filter: {publishedAt: {gt: "2020"}}) {
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
  data: T.shape().isRequired
};

export default SiteReviews;
