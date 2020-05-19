module.exports = {
    siteMetadata: {
        title: 'Mirian Okradze | A Full-Stack Web Developer',
        description:
            'Mirian Okradze is a full-stack web developer based in Tbilisi, Georgia, who enjoys building modern and performant web apps',
        author: 'Mirian Okradze',
    },
    plugins: [
        `gatsby-plugin-dark-mode`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /images/,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-prefetch-google-fonts',
            options: {
                fonts: [
                    {
                        family: `Open Sans`,
                        variants: [`300`, `400`, `700`],
                    },
                ],
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
                name: `src`,
                path: `${__dirname}/src`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
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
    ],
}
