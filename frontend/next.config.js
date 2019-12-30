const withOffline = require('next-offline')
const withPlugins = require('next-compose-plugins')
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

let nextConfig = {
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  }
}


if (process.env.NODE_ENV === 'production') {
  nextConfig = {
    env: {
      SITE_DESCRIPTION: process.env.SITE_DESCRIPTION,
      SITE_TITLE: process.env.SITE_TITLE,
      SENTRY_URL: process.env.SENTRY_URL
    }
  }
}

module.exports = withPlugins([
  withOffline,
  withBundleAnalyzer
], nextConfig)
