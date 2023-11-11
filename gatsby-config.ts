import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";
dotenv.config();

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: `${process.env.SITE_TITLE}`,
    siteUrl: `${process.env.SITE_URL}`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sitemap",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: process.env.CONTENT_BUCKET,
        acl: null,
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `${process.env.GATSBY_RSS_FEED_URL}`,
        title: 'Podtron',
        name: `Podcasts`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.SITE_TITLE,
        short_name: process.env.SITE_TITLE,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    }
  ]
};

export default config;
