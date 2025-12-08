require('dotenv').config({
  path: '.env'
});

module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: process.env.GATSBY_PATH_PREFIX,
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ['./node_modules/ts-reboot']
        }
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': 'src'
        },
        extensions: ['.js', '.jsx', '.css', '.scss', '.json']
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: '',
    //     includeInDevelopment: false
    //   }
    // },
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     typekit: {
    //       id: ''
    //     },
    //     custom: {
    //       families: ['']
    //     }
    //   }
    // },
  ]
};
