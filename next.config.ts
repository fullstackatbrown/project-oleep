import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Server-side rendering enabled for dynamic CMS content
  // No static export configuration needed for Vercel deployment
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cosmicjs.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imgix.cosmicjs.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;