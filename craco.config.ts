module.exports = {
  devSever: {
    proxy: {}
  },
  webpack: {
    module: {
      rules: [
        {
          test: /\.svg$/i,
          type: 'asset',
          resourceQuery: '.src/logo.svg' // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: [{ loader: '@svgr/webpack', options: { icon: true } }]
        }
      ]
    }
  }
}
