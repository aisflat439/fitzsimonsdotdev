/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
import React from 'react';

import styled, { css } from 'styled-components';
import { lighten, saturate } from 'polished';

import HomePageCardContent from '../components/HomePageCardContent';
import SEO from '../components/seo';
import Link from '../components/Link';
import Layout from '../components/layout';

const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.alternate.base};
`;

const HeaderWordHighlight = styled.span`
  display: block;
  text-align: center;
  background: linear-gradient(
    to top,
    transparent 0% 40%,
    ${({ theme }) => theme.palette.main.saturated} 40% 45%,
    transparent 45% 55%,
    ${({ theme }) => theme.palette.main.saturated} 55% 60%,
    transparent 60%
  );
`;

const CardLayout = styled.div`
  margin: auto;
  max-width: 1440px;
  padding: 1rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
    line-height: 150%;
    font-size: 1.55rem;
  }

  .subheader {
    font-size: 1rem;
  }

  .content {
    max-width: 75vw;
  }
`;
const Container = styled.div``;

const CardActions = styled.div`
  display: flex;
`;

const InfoBox = styled.div`
  background-color: ${({ theme }) => theme.palette.alternate.base};
  flex: 2;
  display: flex;
  padding: 0.5rem;

  > div {
    display: flex;
    padding: 0.5rem;
    flex: 1;
    background-color: ${({ theme }) => theme.palette.highlight.base};

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1.125rem;
      line-height: 125%;
      color: ${({ theme }) => theme.palette.main.saturated};
      padding: 0.5rem;
      flex: 1;
      background-color: ${({ theme }) => theme.palette.alternate.base};
    }
  }
`;

const StartParagraph = styled.p`
  font-size: 1.25rem;
  line-height: 150%;
  ::first-letter {
    font-size: 3rem;
  }
`;

const HeaderWord = styled.span`
  background-color: ${({ theme }) => theme.palette.alternate.lowlight};
  padding: 0rem 2rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        'ecommerce',
        'gatsby',
        'ecommerce development',
        'ecommerce design and development',
      ]}
    />
    <main>
      <h1 style={{ textAlign: 'center' }}>
        <HeaderWordHighlight>
          <HeaderWord>eCommerce</HeaderWord>
        </HeaderWordHighlight>
        design and development tips, reviews, opinions and
        <HeaderWordHighlight>
          <HeaderWord>ideas</HeaderWord>
        </HeaderWordHighlight>
      </h1>
      <div style={{ display: 'flex', maxWidth: '1440px', margin: 'auto' }}>
        <div style={{ flex: 5 }}>
          <StartParagraph>
            Hello! The goal of this site is to be a useful place to keep my
            general thoughts about web development on the internet. This is not
            a professional blog. I don't really know anything about blogging.
            Think of this more as a location for me to keep the useful
            information I have, perhaps let people know about the things that I
            make, and experiment with discussing the things about web
            development.
          </StartParagraph>
          <p>Things you can expect to find here relate to:</p>
          <ul>
            <li>ecommerce</li>
            <li>agencies</li>
            <li>Gatsby</li>
            <li>working in public</li>
            <li>projects and things I've made</li>
            <li>rants and raves about websites</li>
          </ul>
          <p>Things you wont find:</p>
          <ul>
            <li>news related stuff</li>
            <li>stuff about how I feel</li>
            <li>
              regular updates, expect more when I have time and something to say
            </li>
          </ul>
          <p>
            I'll do my best to keep this useful, or at least useful adjacent.
            Thanks for coming by!
          </p>
        </div>
        <InfoBox>
          <div>
            <div>
              If I was any good at marketing, I'd put some content in here and
              people would sign up for something and I'd turn that into money
              somehow.
            </div>
          </div>
        </InfoBox>
      </div>
    </main>
    <main>
      <Container>
        <GridItem>
          <CardLayout>
            <HomePageCardContent
              avatar="tips"
              title="what one developer thinks"
              subheader="Who knows what the difference between a tip and thought is, it could be anything."
              content="Development is difficult work that requires focus, understanding and great attention to detail. An ecommerce site is easy to get started but extremely challenging to grow. While there are ample resources for shop owners to get started there are very few that communicate what a shop owner can do to get the most out of their site from a developers perspective."
            />
            <CardActions>
              <Button component={Link} to="/tips">
                Most recent tip
              </Button>
              <Link to="/tips">all tips</Link>
            </CardActions>
          </CardLayout>
        </GridItem>

        <GridItem main>
          <CardLayout>
            <HomePageCardContent
              avatar="podcast"
              title="The Process is Black and White"
              subheader="Two friends do a public weekly check-in, as they journey from wantrepreneur to entrepreneur"
              content="Vernon and I have been doing the podcast for over a year. Each week, we read a few chapters of a book, share our reflections and talk Philly Sports. We tend to ramble a bit and enjoy this time together. The conceit of the show, is that we can learn together, in public, and we'll be better people and businessmen in the end. We'd be thrilled if you checkout out an episode."
            />
            <CardActions>
              <Link
                to="https://theprocessisblackandwhite.com/"
                rel="no-follow"
                target="blank"
              >
                Listen to an episode
              </Link>
            </CardActions>
          </CardLayout>
        </GridItem>

        <GridItem highlight>
          <CardLayout>
            <HomePageCardContent
              avatar="thoughts"
              title="General Ecommerce Thoughts"
              subheader="More broad thoughts around ecommerce and it's ecosystem"
              content="Whamboozles abound"
            />
            <CardActions>
              <Link to="/thoughts">Thoughts</Link>
            </CardActions>
          </CardLayout>
        </GridItem>

        <GridItem>
          <CardLayout>
            <HomePageCardContent
              avatar="products"
              title="Products and Tools"
              subheader="Check out the things I build"
              content="I have several tools to help you have more productive hours. None are publicy for sale today and all are in various stages of development. If you have a problem or would like information, sign up on the list!"
            />
            <CardActions>
              <Button component={Link} to="/products">
                Learn about andybuilt
              </Button>
            </CardActions>
          </CardLayout>
        </GridItem>
      </Container>
    </main>
  </Layout>
);

export default IndexPage;

const GridItem = styled.div`
  min-height: 60vh;
  margin: 2rem auto;
  padding: 1.5rem 0 1.5rem;
  border-width: 5px;
  border-style: solid;
  border-right: none;
  border-left: none;
  border-color: ${({ theme }) => theme.palette.highlight.base};
  background: linear-gradient(
    to right,
    ${({ theme }) => saturate(0.2, lighten(0.1, theme.palette.alternate.base))}
      4%,
    ${({ theme }) => saturate(0.1, lighten(0.1, theme.palette.alternate.base))}
      12%,
    ${({ theme }) => lighten(0.08, theme.palette.alternate.base)} 24%,
    ${({ theme }) => lighten(0.06, theme.palette.alternate.base)} 36%,
    ${({ theme }) => lighten(0.04, theme.palette.alternate.base)} 48%,
    ${({ theme }) => theme.palette.alternate.base}
  );

  ${(props) =>
    props.main &&
    css`
      color: ${({ theme }) => theme.palette.main.lowlight};
      border-color: ${({ theme }) => theme.palette.alternate.base};
      background: linear-gradient(
        to right,
        ${({ theme }) => saturate(0.2, lighten(0.1, theme.palette.main.base))}
          4%,
        ${({ theme }) => saturate(0.1, lighten(0.1, theme.palette.main.base))}
          12%,
        ${({ theme }) => lighten(0.08, theme.palette.main.base)} 24%,
        ${({ theme }) => lighten(0.06, theme.palette.main.base)} 36%,
        ${({ theme }) => lighten(0.04, theme.palette.main.base)} 48%,
        ${({ theme }) => theme.palette.main.base}
      );

      .avatar {
        color: ${({ theme }) => theme.palette.main.base};
      }
    `}

  ${(props) =>
    props.highlight &&
    css`
      border-color: ${({ theme }) => theme.palette.main.saturated};
      background: linear-gradient(
        to right,
        ${({ theme }) =>
            saturate(0.2, lighten(0.1, theme.palette.highlight.base))}
          4%,
        ${({ theme }) =>
            saturate(0.1, lighten(0.1, theme.palette.highlight.base))}
          12%,
        ${({ theme }) => lighten(0.08, theme.palette.highlight.base)} 24%,
        ${({ theme }) => lighten(0.06, theme.palette.highlight.base)} 36%,
        ${({ theme }) => lighten(0.04, theme.palette.highlight.base)} 48%,
        ${({ theme }) => theme.palette.highlight.base}
      );
    `}

  .avatar {
    margin-top: calc(-1.5rem + 16px);
    margin-bottom: 2rem;
    font-size: 24px;

    > span {
      margin: 0 8px;
      border: 5px solid ${({ theme }) => theme.palette.main.saturated}; 
      border-radius: 50%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      min-width: 50px;
      min-height: 50px;
      background-color: ${({ theme }) => theme.palette.alternate.lowlight};

      &.shadeOne {
        background-color: ${({ theme }) => theme.palette.main.lowlight};
      }

      &.shadeTwo {
        background-color: ${({ theme }) => theme.palette.brand.lowlight};
      }

      &.borderOne {
        border-color: ${({ theme }) => theme.palette.brand.base};
      }

      &.borderTwo {
        border-color: ${({ theme }) => theme.palette.highlight.base};
      }

      &.square {
        border-radius: 0;
      }

      &.tilt {
        transform: rotate(45deg);

        span {
          transform: rotate(-45deg);
        }
      }
`;
