# TIL about Gatsby Image references

I spent the better part of today trying to get my graphiql query to work on images. The images were referenced in frontmatter. Something like

```code
---
title: "some title"
slug: "some-title"
image: "./some-title-post-image.png"
---
``` 

No matter what I tried I couldn't get graphiql to return a result. My queries looked something like:
```
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          image {
            childImageSharp {
              fluid {
                src
              }
            //..
```
but they'd fail each time. 

## The tips that helped

I was linked to this post (https://medium.com/significa/advanced-blog-system-in-gatsby-16e0cd6b85ad) which helped. Not in the traditional way but because I read the error message... finally. Which I should have done sooner because... When I googled the error I got this post (https://github.com/gatsbyjs/gatsby/issues/4123#issuecomment-366727781) which made me look at file paths.

## It's the file path 

Turns out I had `image: "./some-title-post-image.png"` wasn't pointing to anything because the image was a jpg. I cleaned up my frontmatter and image paths... and presto... I was back in business. Back to development!