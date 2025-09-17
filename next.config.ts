import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Ensures Next.js treats this app directory as the tracing root (fixes multi-lockfile warning)
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.ctfassets.net' },
      { protocol: 'https', hostname: 'assets.ctfassets.net' },
    ],
  },
};

export default nextConfig;
