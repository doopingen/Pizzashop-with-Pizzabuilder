if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({
      path: `.env.development`,
    });
  }
  module.exports = {
    siteMetadata: {
      title: 'Pizza Shop',
      siteUrl: `https://immense-crag-10644.herokuapp.com/`,
      description: `Eat ass`
    },
  }