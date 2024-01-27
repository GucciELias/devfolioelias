module.exports =
{
  // Disables running ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // Add your custom webpack config
    config.module.rules.push({
      test: /\.(mp3|wav)$/i,
      use: {
        loader: "url-loader",
      },
    });

    // Important: return the modified config
    return config;
  }
}
