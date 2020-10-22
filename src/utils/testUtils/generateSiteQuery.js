const generateSiteQuery = (overrides) => ({
  site: {
    siteMetadata: {
      title: 'title',
      description: 'description',
      author: 'author',
      identityData: [{
        siteLink: 'someLink',
        siteName: 'someName'
      }]
    },
    ...overrides
  }
});

export default generateSiteQuery;
