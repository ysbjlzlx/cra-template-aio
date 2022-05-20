module.exports = {
  webpack: {
    stats: (stats, {env}) => {
      stats.errorDetails = env === 'development'
    }
  },
};
