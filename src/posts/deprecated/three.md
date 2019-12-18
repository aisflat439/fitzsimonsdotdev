# Gatsby just being nice

Today I had the folder structure
```
/posts
  -- /postgroup
    -- /post
        --postMardown
  -- /otherpostgroup
    -- /post
        --postMardown
```

I wanted to create pages at `/posts/post-title`.

I worried that since the folder I was pointing at in `gatsby-source-filesystem` was posts that I'd have an issue creating pages. Pretty reasonable concern. Turns out it's having the cart before the horse. Just read through how Gatsby works and this is already solved.

- paths are created from frontmatter, not the file structure
- check the 'gatsby-node` file and you'll see the graphql query is just getting frontmatter
- you can even sanity check that query from the graphiql interface. 

This framework is a delight. 