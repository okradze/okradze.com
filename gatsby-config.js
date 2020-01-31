module.exports = {
    siteMetadata: {
        title: 'Mirian Okradze | A Full-Stack Web Developer',
        description:
            'Mirian Okradze is a full-stack web developer based in Tbilisi, Georgia, who enjoys building modern and performant web apps',
        author: 'Mirian Okradze',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-136314426-2',
                head: false,
                anonymize: true,
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: 'okradze.netlify.com',
            },
        },
        `gatsby-plugin-sass`,
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
