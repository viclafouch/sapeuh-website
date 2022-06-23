const withLinaria = require('next-linaria');


const nextConfig = withLinaria({
  reactStrictMode: true,
  linaria: {
    /* linaria options here */
  },
})

module.exports = nextConfig

