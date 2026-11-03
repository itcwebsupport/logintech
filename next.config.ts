import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['lida.local', 'lidaestarsa.hu'],
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
