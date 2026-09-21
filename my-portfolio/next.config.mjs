import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  // Disable strict mode for build compatibility
  reactStrictMode: true,
};

export default nextConfig;
