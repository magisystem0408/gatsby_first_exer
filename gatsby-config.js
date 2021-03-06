
require('dotenv').config()
module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
        siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`,
            },
        },

        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 640
                        }
                    }
                ],
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `tcf2vhx4qhgp`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
            },
        },

        `gatsby-plugin-playground`,
        `gatsby-plugin-gatsby-cloud`,
    ],
}
