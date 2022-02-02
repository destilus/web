/** @type {import('next').NextConfig} */

const withTranspileModules = require('next-transpile-modules')(['@local/design-system'])
const withLinaria = require('next-linaria')

module.exports = withLinaria(
  withTranspileModules({
    reactStrictMode: true,
  }),
)
