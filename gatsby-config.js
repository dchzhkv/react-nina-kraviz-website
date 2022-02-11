module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
              // Override the file regex for Sass
              sassRuleTest: /\.global\.s(a|c)ss$/,
              // Override the file regex for CSS modules
              sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
            },
          },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sass`
    ]
}