// const config = require('./config');

module.exports = {
  siteMetadata: {
    title: `Mythic Table`,
    siteUrl: 'https://www.mythictable.com',
    name: 'Blaine Reid',
    role: 'Developer at Mythic Table',
    description: `Mythic Table is an online tabletop platform for playing your favorite roleplaying games with your friends around the world.`,
    author: `@marc`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-emotion',
    'gatsby-transformer-remark',
    // Image Plugins
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/markdown.js"),
        },
      }
    },
    // SEO plugins
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-react-helmet-async',
    // Pulls MDX Files for page creation
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/mdx`,
      }
    }
  ]
  // plugins: [
  //   `gatsby - plugin - react - helmet`,
  //   `gatsby - transformer - sharp`,
  //   `gatsby - plugin - sharp`,
  //   'gatsby-plugin-offline',  // https://gatsby.dev/offline
  //   {
  //     resolve: `gatsby - plugin - manifest`,
  //     options: {
  //       name: config.manifestName,
  //       short_name: config.manifestShortName,
  //       start_url: config.pathPrefix || config.manifestStartUrl,
  //       background_color: config.manifestBackgroundColor,
  //       theme_color: config.manifestThemeColor,
  //       display: config.manifestDisplay,
  //       icon: config.manifestIcon,
  //     },
  //   },
  //   {
  //     resolve: `gatsby - plugin - redirect - to`,
  //     options: {
  //       force: true,
  //       isPermanent: true,
  //       redirectInBrowser: true,
  //     },
  //   },
  //   {
  //     resolve: `gatsby - source - filesystem`,
  //     options: {
  //       name: `markdown - pages`,
  //       path: `${ __dirname } / pages`,
  //     },
  //   },
  //   {
  //     resolve: `gatsby - source - filesystem`,
  //     options: {
  //       name: `mdx - pages`,
  //       path: `${ __dirname } / pages - mdx`,
  //     },
  //   },
  //   'gatsby-plugin-mdx',
  //   {
  //     resolve: `gatsby - source - filesystem`,
  //     options: {
  //       name: `images`,
  //       path: `${ __dirname } / images`,
  //     },
  //   },
  //   {
  //     resolve: `gatsby - transformer - remark`,
  //     options: {
  //       plugins: [
  //         {
  //           resolve: `gatsby - remark - images`,
  //           options: {
  //             maxWidth: 800,
  //             backgroundColor: `transparent`,
  //           },
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     resolve: 'gatsby-plugin-matomo',
  //     options: {
  //       siteId: '2',
  //       matomoUrl: 'https://mythictable.matomo.cloud',
  //       siteUrl: 'https://mythictable.com'
  //     }
  //   },
  // ],
};
