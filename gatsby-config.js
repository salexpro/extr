const productionBranchNames = ['master', 'main']

module.exports = {
  /*
  Experimental flags that increase DX and build times with different technics (may require to use `yarn clean` time to time)
  Current available flags: https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
  */
  flags: {
    FAST_DEV: true,
  },
  trailingSlash: 'never',
  polyfill: false,
  siteMetadata: {
    title: `extrnode — Battle-tested decentralized RPC gateway`,
    description: `Connect your dApp to a decentralized cluster of RPC nodes and automatically reroute responses if any node is down. Powered by Everstake.`,
    domain:
      // Cloudflare
      process.env.CF_PAGES_URL ||
      // Vercel
      process.env.GATSBY_VERCEL_URL ||
      // Default
      'extr.salex.pro',
  },
  plugins: [
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-webpack-bundle-analyser-v2/
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-minify-classnames`,
      options: {
        enable:
          // Cloudflare
          productionBranchNames.includes(process.env.CF_PAGES_BRANCH) ||
          // Gatsby Cloud
          productionBranchNames.includes(process.env.BRANCH) ||
          // Vercel
          process.env.GATSBY_VERCEL_ENV === 'production',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `@gvrs/gatsby-transformer-blurhash`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-svgr-svgo`,
      options: {
        urlSvgOptions: [
          {
            test: /\.svg$/,
            urlLoaderOptions: {
              limit: 10,
            },
          },
        ],
      },
    },
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-K3S9E2Z1V7', // Google Analytics / GA
          // 'AW-CONVERSION_ID', // Google Ads / Adwords / AW
          // 'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        //   gtagConfig: {
        //     optimize_id: 'OPT_CONTAINER_ID',
        //     anonymize_ip: true,
        //     cookie_expires: 0,
        //   },
        //   // This object is used for configuration specific to this plugin
        //   pluginConfig: {
        //     // Puts tracking script in the head instead of the body
        //     head: false,
        //     // Setting this parameter is also optional
        //     respectDNT: true,
        //     // Avoids sending pageview hits from custom paths
        //     exclude: ['/preview/**', '/do-not-track/me/too/'],
        //     // Defaults to https://www.googletagmanager.com
        //     origin: 'YOUR_SELF_HOSTED_ORIGIN',
        //   },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-M95KF65',

        // // Include GTM in development.
        // //
        // // Defaults to false meaning GTM will only be loaded in production.
        // includeInDevelopment: false,

        // // datalayer to be set before GTM is loaded
        // // should be an object or a function that is executed in the browser
        // //
        // // Defaults to null
        // defaultDataLayer: { platform: 'gatsby' },

        // // Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        // dataLayerName: 'YOUR_DATA_LAYER_NAME',

        // // Name of the event that is triggered
        // // on every Gatsby route change.
        // //
        // // Defaults to gatsby-route-change
        // routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
        // // Defaults to false
        // enableWebVitalsTracking: true,
        // // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: 'YOUR_SELF_HOSTED_ORIGIN',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
