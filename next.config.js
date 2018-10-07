const autoprefixer = require('autoprefixer-stylus');
const nib = require('nib');
const withStylus = require('@zeit/next-stylus');

module.exports = withStylus({
  cssLoaderOptions: {
    minimize: true,
  },
  stylusLoaderOptions: {
    use: [autoprefixer(), nib()],
  },
  webpack(cfg) {
    cfg.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)$/,
      loader: 'file-loader',
      options: {
        publicPath: '/_next/static/',
        outputPath: 'static/',
      },
    });
    return cfg;
  },
  useFileSystemPublicRoutes: false,
});
