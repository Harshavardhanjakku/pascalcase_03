import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Ensures Next.js treats this app directory as the tracing root (fixes multi-lockfile warning)
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
