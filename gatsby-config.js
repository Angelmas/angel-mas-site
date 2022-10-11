const path = require('path')
const sourcePath = path.resolve(__dirname, 'src')


console.log(sourcePath)
module.exports = {
  siteMetadata: {
    title: `Angel Mas site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-plugin-sass',
    options: { 
      sassOptions: {
        includePaths: [path.resolve(sourcePath, 'sass', 'resources.scss')]
      }
    }
  }, {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "MySideTrackingId"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`, // Needed for dynamic images
  ]
};