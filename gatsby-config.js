module.exports = {
    siteMetadata: {
        title: 'Mirian Okradze | A Full-Stack Web Developer',
        description:
            'Mirian Okradze is a full-stack web developer based in Tbilisi, Georgia, who enjoys building modern and performant web apps',
        author: 'Mirian Okradze',
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-136314426-2',
                head: false,
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
                name: 'Mirian Okradze',
                short_name: 'Okradze',
                start_url: '/',
                background_color: '#6b37bf',
                theme_color: '#fff',
                display: 'standalone',
                icon: 'src/images/logo.png',
            },
        },
        // `gatsby-plugin-offline`,
    ],
}
