module.exports = {
  siteMetadata: {
    title: `The Hackathon`,
    description: `The Super Grand National World Hacker Bowl Cup Games causally know as The Hackathon.`,
    author: `@the_hackathon`,
    siteUrl: "https://thehackathon.dev/",
  },
  plugins: [
    "gatsby-plugin-cname",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Hackathon`,
        short_name: `The Hackathon`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
