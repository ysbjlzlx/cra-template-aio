module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      if (env === 'development') {
        webpackConfig.stats = {
          ...webpackConfig.stats,
          errorDetails: true,
        };
      }
      return webpackConfig;
    },
  },
};
