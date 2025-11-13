/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  // Disable strict mode for build compatibility
  reactStrictMode: true,
};

export default nextConfig;
