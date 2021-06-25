const path = require('path')

module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
    author: `@tam1110`,
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        "@": path.resolve(__dirname),
        "@components": path.resolve(__dirname, 'src/components'),
        "@contents": path.resolve(__dirname, 'contents')
        
      },
      path: path.join(__dirname, `src`, `images`),
      extensions: []
    }
  },
  `gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/contents/images/`,
    },
  },
  
],
  
};
