require('dotenv').config({
  path: '.env'
});

module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ['./node_modules/normalize.css']
        }
      }
    }
  ]
};
