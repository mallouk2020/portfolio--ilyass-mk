const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
       {
        protocol: 'https',
        hostname: 'portfolio-ilyass-mk.vercel.app', // Replace with your Vercel URL
        port: '',
        pathname: '/**', // Matches any path under the specified hostname
      },
      
    ],
  },
}


