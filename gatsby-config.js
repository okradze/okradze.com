module.exports = {
  siteMetadata: {
    title: 'Mirian Okradze | A Software Developer',
    description:
      "I'm Mirian Okradze, a software developer, focused on building performant web apps",
    author: 'Mirian Okradze',
  },
  plugins: [
    `gatsby-plugin-remove-serviceworker`,
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
