import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages static hosting
  output: 'export',

  // Generate routes as folders containing index.html
  trailingSlash: true,

  allowedDevOrigins: ['*.builtwithrocket.new'],

  productionBrowserSourceMaps: true,

  distDir: process.env.DIST_DIR || '.next',

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: imageHosts,
    minimumCacheTTL: 60,
    qualities: [75, 85, 100],

    // GitHub Pages does not support Next.js image optimization
    unoptimized: true,
  },
};

export default nextConfig;