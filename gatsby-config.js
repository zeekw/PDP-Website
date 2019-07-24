/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
 require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
 })

module.exports = {
  siteMetadata: {
    title: "Philadelphia Dance Projects",
    titleTemplate: "%s · PDP",
    description:
      "The mission of Philadelphia Dance Projects is to support contemporary dance through Projects that encourage artists and audiences to more fully participate and engage in the experience and pursuit of dance as an evolving form.",
    url: "https://philadanceprojects.org", // No trailing slash allowed!
    image: "/photos/group-square.jpg", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ocpl5ulk',
        dataset: 'pdp-data',
        watchMode: true,
        useCdn: false,
        token: process.env.SANITY_TOKEN
      }
    }
  ],
  pathPrefix: "/PDP-Website"
}
